<template>
  <AppPage :show-footer="false">
    <n-card title="分类管理" size="small" :segmented="true" mt-15 rounded-10>
      <template #header-extra>
        <n-button type="primary">新增主分类</n-button>
        <n-button type="error" ml-20>删除</n-button>
      </template>
      <n-space vertical>
        <n-spin :show="loading">
          <template #description>加载中 ~</template>
          <n-tree :data="categoryData" checkable selectable block-line cascade />
        </n-spin>
      </n-space>
      <CrudDrawer
        v-model:visible="modalVisible"
        :title="modalTitle"
        :loading="modalLoading"
        :show-footer="modalAction !== 'view'"
        @on-save="handleSave"
      >
        <n-form
          ref="modalFormRef"
          :model="modalForm"
          label-placement="left"
          label-align="left"
          :label-width="80"
          :disabled="modalAction === 'view'"
        >
          <n-form-item label="父分类id" path="parent">
            <n-input v-model:value="modalForm.parent" disabled />
          </n-form-item>
          <n-form-item label="分类名称">
            <n-input v-model:value="modalForm.name" placeholder="请输入分类名称" />
          </n-form-item>
        </n-form>
      </CrudDrawer>
    </n-card>
  </AppPage>
</template>

<script setup>
import { NButton } from 'naive-ui'
import api from './api'
import { onMounted } from 'vue'
import { useCRUD } from '@/composables'

onMounted(() => {
  fetchData()
})

// 获取分类列表
const categoryData = ref([])
const loading = ref(false)
async function fetchData() {
  loading.value = true
  const result = await api.listCategory()
  const ret = filterData(result.data)
  categoryData.value = ret
  loading.value = false
}
function filterData(data = []) {
  const ret = []
  data.forEach((item) => {
    const category = {
      label: item.name,
      key: item.id,
      children: [],
    }
    if (item.level === 0) {
      category.suffix = () => {
        return [
          h(
            NButton,
            {
              size: 'small',
              type: 'primary',
              onClick: () => {
                handleAdd({ parent: item.id })
              },
            },
            { default: () => '新增' }
          ),
          h(
            NButton,
            {
              size: 'small',
              type: 'error',
              style: 'margin-left: 15px;',
              onClick: () => {
                handleDelete([item.id])
              },
            },
            { default: () => '删除' }
          ),
        ]
      }
    } else {
      category.suffix = () =>
        h(
          NButton,
          {
            size: 'small',
            type: 'error',
            onClick: () => {
              handleDelete([item.id])
            },
          },
          { default: () => '删除' }
        )
    }
    if (item.children && item.children.length) {
      category.children = filterData(item.children)
    }
    ret.push(category)
  })
  return ret
}

const {
  modalVisible,
  modalAction,
  modalTitle,
  modalLoading,
  handleAdd,
  handleDelete,
  handleEdit,
  handleView,
  handleSave,
  modalForm,
  modalFormRef,
} = useCRUD({
  name: '分类',
  initForm: {},
  doCreate: api.addCategory,
  doDelete: api.deleteCategory,
  doUpdate: api.addOrUpdate,
  doSearch: api.detail,
  refresh: () => fetchData(),
})
</script>

<style lang="scss" scoped></style>
