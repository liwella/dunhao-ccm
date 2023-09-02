<template>
  <CommonPage show-footer title="权限菜单管理">
    <template #action>
      <div>
        <n-button type="primary" @click="handleAdd">
          <TheIcon icon="material-symbols:add" :size="18" class="mr-5" />
          新增
        </n-button>
        <n-button type="error" class="ml-16" @click="batchDelete">
          <TheIcon icon="material-symbols:delete-outline" :size="18" class="mr-5" />
          批量删除
        </n-button>
      </div>
    </template>
    <CrudTable
      ref="$table"
      v-model:query-items="queryItems"
      :row-key="'id'"
      :scroll-x="1200"
      :columns="columns"
      :is-pagination="false"
      :get-data="api.listMenu"
      @on-checked="onChecked"
      @reset-query-items="resetQueryItems"
    >
      <template #queryBar>
        <div />
      </template>
    </CrudTable>
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
        <n-form-item label="菜单/权限id" path="id" :label-width="100">
          <n-input v-model:value="modalForm.id" disabled />
        </n-form-item>
        <n-form-item
          label="菜单/权限名称"
          path="menuName"
          :label-width="120"
          :rule="{
            required: true,
            message: '请输入菜单/权限名称',
            trigger: 'blur',
          }"
        >
          <n-input v-model:value="modalForm.menuName" placeholder="请输入菜单/权限名称" />
        </n-form-item>
        <n-form-item label="访问路径" path="url">
          <n-input v-model:value="modalForm.url" placeholder="请输入访问路径" />
        </n-form-item>
        <n-form-item label="权限编码" path="permission">
          <n-input v-model:value="modalForm.permission" placeholder="请输入权限编码" />
        </n-form-item>
        <n-form-item
          label="类型"
          path="type.value"
          :rule="{
            required: true,
            message: '请选择类型',
            trigger: 'change',
            type: 'number',
          }"
        >
          <n-select
            v-model:value="modalForm.type.value"
            :options="typeOptions"
            placeholder="请选择"
          />
        </n-form-item>
        <n-form-item label="图标" path="icon">
          <n-input v-model:value="modalForm.icon" placeholder="请输入图标路径" />
        </n-form-item>
        <n-form-item label="父菜单id" path="parentId">
          <n-input v-model:value="modalForm.parentId" disabled />
        </n-form-item>
      </n-form>
    </CrudDrawer>
  </CommonPage>
</template>

<script setup>
import api from './api'
import { useCRUD } from '@/composables'
import { NButton } from 'naive-ui'
import { renderIcon } from '@/utils'
import { onMounted } from 'vue'

const typeOptions = [
  {
    label: '菜单',
    value: 1,
  },
  {
    label: '目录',
    value: 2,
  },
  {
    label: '权限',
    value: 3,
  },
]

const $table = ref(null)
onMounted(() => {
  $table.value.handleSearch()
})

// 查询参数
const queryItems = ref({})
function resetQueryItems() {
  for (const key in queryItems.value) {
    queryItems.value[key] = null
  }
}

// 选中事件
const checked = ref([])
function onChecked(rowKeys) {
  if (rowKeys.length) {
    checked.value = [...rowKeys]
  } else {
    checked.value = []
  }
}
function batchDelete() {
  if (checked.value.length) {
    handleDelete({ ids: checked.value })
    checked.value = []
  } else {
    $message.error('未选中任何数据')
  }
}

async function moveMenu(params = {}) {
  await api.moveMenu(params)
  $table.value.handleSearch()
}

const columns = [
  { type: 'selection', fixed: 'left' },
  { title: '菜单/权限名称', key: 'menuName', width: 120, ellipsis: { tooltip: true } },
  { title: '访问路径', key: 'url', width: 120, ellipsis: { tooltip: true } },
  { title: '权限编码', key: 'permission', width: 100, ellipsis: { tooltip: true } },
  { title: '类型', key: 'type.description', width: 80 },
  { title: '图标', key: 'icon', width: 120, ellipsis: { tooltip: true } },
  {
    title: '操作',
    key: 'actions',
    width: 200,
    align: 'center',
    fixed: 'right',
    hideInExcel: true,
    render(row) {
      const result = [
        h(
          NButton,
          {
            size: 'small',
            type: 'primary',
            style: 'margin-right: 15px;',
            text: true,
            onClick: () => {
              handleEdit(row, false)
            },
          },
          { default: () => '', icon: renderIcon('material-symbols:edit-outline', { size: 20 }) }
        ),
        h(
          NButton,
          {
            size: 'small',
            type: 'error',
            text: true,
            onClick: () => {
              handleDelete({ ids: [row.id] })
            },
          },
          {
            default: () => '',
            icon: renderIcon('material-symbols:delete-outline', { size: 20 }),
          }
        ),
      ]
      if (row.level !== 2) {
        result.unshift(
          h(
            NButton,
            {
              size: 'small',
              type: 'primary',
              style: 'margin-right: 15px',
              text: true,
              onClick: () => {
                handleAdd({ parentId: row.id })
              },
            },
            {
              default: () => '',
              icon: renderIcon('material-symbols:add-notes-outline-rounded', { size: 22 }),
            }
          )
        )
      }
      if (row.level !== 3) {
        result.push([
          h(
            NButton,
            {
              size: 'small',
              type: 'primary',
              text: true,
              style: 'margin-left: 15px;',
              onClick: () => {
                moveMenu({ id: row.id, up: true })
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
                moveMenu({ id: row.id, up: false })
              },
            },
            { default: () => '', icon: renderIcon('material-symbols:arrow-downward', { size: 20 }) }
          ),
        ])
      }
      return result
    },
  },
]

const {
  modalVisible,
  modalTitle,
  modalLoading,
  modalAction,
  handleSave,
  handleAdd,
  handleDelete,
  handleEdit,
  modalForm,
  modalFormRef,
} = useCRUD({
  name: '权限菜单',
  initForm: {
    type: {},
  },
  doCreate: api.addMenu,
  doDelete: api.deleteMenu,
  doUpdate: api.updateMenu,
  doSearch: null,
  refresh: () => $table.value?.handleSearch(),
})
</script>

<style lang="scss" scoped></style>
