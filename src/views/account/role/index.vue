<template>
  <CommonPage show-footer title="角色管理">
    <template #action>
      <div>
        <n-button type="primary" @click="handleAdd">
          <TheIcon icon="material-symbols:add" :size="18" class="mr-5" />
          新建角色
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
      :get-data="api.listRole"
      @on-checked="onChecked"
      @reset-query-items="resetQueryItems"
    >
      <template #queryBar><div /></template>
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
        <n-form-item labe="角色id" path="id">
          <n-input v-model:value="modalForm.id" disabled />
        </n-form-item>
        <n-form-item
          label="角色名称"
          path="roleName"
          :rule="{
            required: true,
            message: '请输入角色名称',
            trigger: 'blur',
          }"
        >
          <n-input v-model:value="modalForm.roleName" maxlength="15" placeholder="请输入角色名称" />
        </n-form-item>
        <n-form-item
          v-if="modalAction === 'add'"
          label="角色编码"
          path="code"
          :rule="{
            required: true,
            message: '请输入角色编码',
            trigger: 'blur',
          }"
        >
          <n-input v-model:value="modalForm.code" maxlength="10" placeholder="请输入角色编码" />
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

const columns = [
  { type: 'selection', fixed: 'left' },
  { title: '角色名称', key: 'roleName', width: 240 },
  { title: '角色编码', key: 'code', width: 240 },
  {
    title: '操作',
    key: 'actions',
    width: 200,
    align: 'center',
    fixed: 'right',
    hideInExcel: true,
    render(row) {
      return [
        h(
          NButton,
          {
            size: 'small',
            type: 'primary',
            onClick: () => {
              handleEdit(row, false)
            },
          },
          { default: () => '编辑', icon: renderIcon('material-symbols:edit-outline', { size: 14 }) }
        ),
        h(
          NButton,
          {
            size: 'small',
            type: 'primary',
            style: 'margin-left: 15px;',
            onClick: () => {},
          },
          { default: () => '编辑权限', icon: renderIcon('ic:baseline-vpn-key', { size: 14 }) }
        ),
        h(
          NButton,
          {
            size: 'small',
            type: 'error',
            style: 'margin-left: 15px;',
            onClick: () => {
              handleDelete({ ids: [row.id] })
            },
          },
          {
            default: () => '删除',
            icon: renderIcon('material-symbols:delete-outline', { size: 14 }),
          }
        ),
      ]
    },
  },
]

const {
  modalVisible,
  modalTitle,
  modalLoading,
  modalAction,
  handleAdd,
  handleDelete,
  handleEdit,
  handleSave,
  modalForm,
  modalFormRef,
} = useCRUD({
  name: '角色',
  initForm: {},
  doCreate: api.addRole,
  doDelete: api.deleteRole,
  doUpdate: api.updateRole,
  doSearch: null,
  refresh: () => $table.value?.handleSearch(),
})
</script>

<style lang="scss" scoped></style>
