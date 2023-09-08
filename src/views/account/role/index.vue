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
    <CrudDrawer
      v-model:visible="tModalVisible"
      :title="tModalTitle"
      :loading="tModalLoading"
      :show-footer="tModalAction !== 'view'"
      @on-save="drawerUpdate"
    >
      <n-tree
        v-model:checked-keys="checkedKeys"
        :data="drawerData"
        checkable
        selectable
        block-line
        default-expand-all
      ></n-tree>
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
  fetchPermissionData()
  fetchCategoryData()
})

const drawerData = ref([])
const drawerDataType = ref(1)
function changeDrawerDataType(dataType = 1) {
  drawerDataType.value = dataType
  if (dataType === 1) {
    drawerData.value = permissionData.value
  } else {
    drawerData.value = categoryData.value
  }
}
async function drawerUpdate() {
  if (drawerDataType.value === 1) {
    await updateRoleMenu()
  } else {
    await updateRoleCategory()
  }
}

// 获取权限列表
const permissionData = ref([])
const loading = ref(false)
async function fetchPermissionData() {
  loading.value = true
  permissionData.value = []
  const result = await api.listMenu()
  const ret = filterPermissionData(result.data)
  permissionData.value = ret
  loading.value = false
}
function filterPermissionData(data = []) {
  const ret = []
  data.forEach((item) => {
    const permission = {
      label: item.menuName + ' / ' + item.permission,
      key: item.id,
      children: [],
    }
    if (item.children && item.children.length) {
      permission.children = filterPermissionData(item.children)
    }
    ret.push(permission)
  })
  return ret
}
// 获取角色权限（回显）
const checkedKeys = ref([])
async function fetchRoleMenu(roleId) {
  checkedKeys.value = []
  const result = await api.listRoleMenu({ id: roleId })
  result?.data.forEach((item) => {
    checkedKeys.value.push(item.menuId)
  })
}
// 更新角色权限
async function updateRoleMenu() {
  tModalForm.value.menuIds = checkedKeys.value
  if (!['edit', 'add'].includes(tModalAction.value)) {
    tModalVisible.value = false
    return
  }
  try {
    tModalLoading.value = true
    const data = await api.updateRoleMenu(tModalForm.value)
    $message.success('编辑成功')
    tModalLoading.value = tModalVisible.value = false
    data && $table.value?.handleSearch()
  } catch (error) {
    modalLoading.value = false
  }
}

// 获取菜单列表
const categoryData = ref([])
async function fetchCategoryData() {
  categoryData.value = []
  const result = await api.listCategory()
  const ret = filterCategoryData(result.data)
  categoryData.value = ret
}
function filterCategoryData(data = []) {
  const ret = []
  data.forEach((item) => {
    const category = {
      label: item.name,
      key: item.id,
      children: [],
    }
    if (item.children && item.children.length) {
      category.children = filterCategoryData(item.children)
    }
    ret.push(category)
  })
  return ret
}
// 获取角色菜单
async function fetchRoleCategory(roleId) {
  checkedKeys.value = []
  const result = await api.listRoleCategory({ id: roleId })
  result?.data.forEach((item) => {
    checkedKeys.value.push(item.categoryId)
  })
}
// 更新角色菜单
async function updateRoleCategory() {
  tModalForm.value.categoryIds = checkedKeys.value
  if (!['edit', 'add'].includes(tModalAction.value)) {
    tModalVisible.value = false
    return
  }
  try {
    tModalLoading.value = true
    const data = await api.updateRoleCategory(tModalForm.value)
    $message.success('编辑成功')
    tModalLoading.value = tModalVisible.value = false
    data && $table.value?.handleSearch()
  } catch (error) {
    modalLoading.value = false
  }
}

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
    width: 280,
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
            onClick: () => {
              changeDrawerDataType(1)
              fetchRoleMenu(row.id)
              tHandleEdit({ roleId: row.id }, false)
            },
          },
          { default: () => '角色权限', icon: renderIcon('ic:baseline-vpn-key', { size: 14 }) }
        ),
        h(
          NButton,
          {
            size: 'small',
            type: 'primary',
            style: 'margin-left: 15px;',
            onClick: () => {
              changeDrawerDataType(2)
              fetchRoleCategory(row.id)
              tHandleEdit({ roleId: row.id }, false)
            },
          },
          { default: () => '角色菜单', icon: renderIcon('ic:baseline-vpn-key', { size: 14 }) }
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

const {
  modalVisible: tModalVisible,
  modalTitle: tModalTitle,
  modalLoading: tModalLoading,
  modalAction: tModalAction,
  handleEdit: tHandleEdit,
  modalForm: tModalForm,
} = useCRUD({
  name: '角色权限',
  initForm: {},
  doCreate: null,
  doDelete: null,
  doUpdate: api.updateRoleMenu,
  doSearch: null,
  refresh: () => $table.value?.handleSearch(),
})
</script>

<style lang="scss" scoped></style>
