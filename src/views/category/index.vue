<template>
  <AppPage :show-footer="false">
    <n-card title="分类管理" size="small" :segmented="true" mt-15 rounded-10>
      <template #header-extra>
        <n-button type="primary" @click="handleAdd">新增主分类</n-button>
        <n-button type="error" ml-20 @click="handleDelete(checkedKeys)">删除</n-button>
      </template>
      <n-space vertical>
        <n-spin :show="loading">
          <template #description>加载中 ~</template>
          <n-tree
            v-model:checked-keys="checkedKeys"
            :data="categoryData"
            checkable
            selectable
            block-line
            cascade
          />
        </n-spin>
      </n-space>
      <CrudDrawer
        v-model:visible="modalVisible"
        :title="modalTitle"
        :loading="modalLoading"
        :show-footer="modalAction !== 'view'"
        @on-save="wrapperHandlerSave"
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
import { renderIcon } from '@/utils'

onMounted(() => {
  fetchData()
})

const checkedKeys = ref([])

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
    const buttons = [
      h(
        NButton,
        {
          size: 'small',
          type: 'primary',
          secondary: true,
          style: 'margin-left: 15px;',
          onClick: () => {
            handleEdit({ parent: item.id, name: item.name }, false)
          },
        },
        { default: () => '修改' }
      ),
      h(
        NButton,
        {
          size: 'small',
          type: 'error',
          secondary: true,
          style: 'margin-left: 15px;',
          onClick: () => {
            handleDelete([item.id])
          },
        },
        { default: () => '删除' }
      ),
      h(
        NButton,
        {
          size: 'small',
          type: 'primary',
          text: true,
          style: 'margin-left: 15px;',
          onClick: () => {
            moveCategory({ id: item.id, up: true })
          },
        },
        { default: () => '', icon: renderIcon('material-symbols:arrow-upward', { size: 20 }) }
      ),
      h(
        NButton,
        {
          size: 'small',
          type: 'primary',
          text: true,
          onClick: () => {
            moveCategory({ id: item.id, up: false })
          },
        },
        { default: () => '', icon: renderIcon('material-symbols:arrow-downward', { size: 20 }) }
      ),
    ]
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
              secondary: true,
              onClick: () => {
                handleAdd({ parent: item.id })
              },
            },
            { default: () => '新增' }
          ),
          ...buttons,
        ]
      }
    } else {
      category.suffix = () => {
        return buttons
      }
    }
    if (item.children && item.children.length) {
      category.children = filterData(item.children)
    }
    ret.push(category)
  })
  return ret
}

// 包装保存，兼容新增和修改功能
function wrapperHandlerSave() {
  modalForm.value.id = modalForm.value.parent
  handleSave()
}

// 移动分类
async function moveCategory(data = {}) {
  await api.moveCategory(data)
  fetchData()
}

const {
  modalVisible,
  modalAction,
  modalTitle,
  modalLoading,
  handleAdd,
  handleDelete,
  handleEdit,
  handleSave,
  modalForm,
  modalFormRef,
} = useCRUD({
  name: '分类',
  initForm: {},
  doCreate: api.addCategory,
  doDelete: api.deleteCategory,
  doUpdate: api.updateCategory,
  refresh: () => fetchData(),
})
</script>

<style lang="scss" scoped></style>
