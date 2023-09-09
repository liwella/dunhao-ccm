<template>
  <AppPage :show-footer="false">
    <n-card title="分类管理" size="small" :segmented="true" mt-15 rounded-10>
      <template #header-extra>
        <n-button v-permission="'addCategory'" type="primary" @click="handleAdd">
          新增主分类
        </n-button>
        <n-button
          v-permission="'deleteCategory'"
          type="error"
          ml-20
          @click="handleDelete({ ids: checkedKeys })"
        >
          删除
        </n-button>
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
import hasPermission from '@/plugins/permission'

onMounted(() => {
  fetchData()
})

const checkedKeys = ref([])

// 获取分类列表
const categoryData = ref([])
const loading = ref(false)
async function fetchData() {
  loading.value = true
  const result = await api.listUserCategory()
  const ret = filterData(result.data)
  categoryData.value = ret
  loading.value = false
}
function filterData(data = []) {
  const ret = []
  data.forEach((item) => {
    const buttons = []
    if (hasPermission('updateCategory')) {
      buttons.push(
        h(
          NButton,
          {
            size: 'small',
            type: 'primary',
            text: true,
            style: 'margin-left: 15px;',
            onClick: () => {
              handleEdit({ parent: item.id, name: item.name }, false)
            },
          },
          { default: () => '', icon: renderIcon('material-symbols:edit-outline', { size: 20 }) }
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
        )
      )
    }
    if (hasPermission('deleteCategory')) {
      buttons.unshift(
        h(
          NButton,
          {
            size: 'small',
            type: 'error',
            text: true,
            style: 'margin-left: 15px;',
            onClick: () => {
              handleDelete({ ids: [item.id] })
            },
          },
          { default: () => '', icon: renderIcon('material-symbols:delete-outline', { size: 20 }) }
        )
      )
    }
    const category = {
      label: item.name,
      key: item.id,
      children: [],
    }
    if (item.level === 0) {
      if (hasPermission('addCategory')) {
        buttons.unshift(
          h(
            NButton,
            {
              size: 'small',
              type: 'primary',
              text: true,
              onClick: () => {
                handleAdd({ parent: item.id })
              },
            },
            {
              default: () => '',
              icon: renderIcon('material-symbols:add-notes-outline-rounded', { size: 22 }),
            }
          )
        )
      }
      category.suffix = () => {
        return buttons
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
