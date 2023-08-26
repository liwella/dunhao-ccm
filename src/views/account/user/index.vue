<template>
  <CommonPage show-footer title="用户管理">
    <template #action>
      <div>
        <n-button type="primary" @click="handleAdd">
          <TheIcon icon="material-symbols:add" :size="18" class="mr-5" />
          新建用户
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
      :get-data="api.pageUser"
      @on-checked="onChecked"
      @reset-query-items="resetQueryItems"
    >
      <template #queryBar>
        <QueryBarItem label="用户名/邮箱/号码" :label-width="120">
          <n-input
            v-model:value="queryItems.condition"
            type="text"
            placeholder="请用户名"
            @keypress.enter="$table?.handleSearch"
          />
        </QueryBarItem>
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
        <n-form-item label="用户id" path="id">
          <n-input v-model:value="modalForm.id" disabled />
        </n-form-item>
        <n-form-item
          label="用户名称"
          path="username"
          :rule="{
            required: true,
            message: '请输入用户名称',
            trigger: 'blur',
          }"
        >
          <n-input v-model:value="modalForm.username" placeholder="请输入用户名称" />
        </n-form-item>
        <n-form-item
          v-if="modalAction !== 'view'"
          label="用户密码"
          path="password"
          :rule="{
            required: true,
            message: '请输入用户密码',
            trigger: 'blur',
          }"
        >
          <n-input
            v-model:value="modalForm.password"
            type="password"
            show-password-on="click"
            placeholder="请输入用户密码"
          />
        </n-form-item>
        <n-form-item label="邮箱" path="email">
          <n-input v-model:value="modalForm.email" placeholder="请输入用户邮箱" />
        </n-form-item>
        <n-form-item label="电话号码" path="phone">
          <n-input
            v-model:value="modalForm.phone"
            maxlength="11"
            show-count
            :allow-input="onlyAllowNumber"
            placeholder="请输入电话号码"
          />
        </n-form-item>
        <n-form-item label="头像" path="avatar">
          <n-input v-model:value="modalForm.avatar" placeholder="请上传头像" />
        </n-form-item>
        <n-form-item
          label="性别"
          path="sex.value"
          :rule="{
            required: true,
            message: '请选择性别',
            trigger: 'change',
            type: 'number',
          }"
        >
          <n-select
            v-model:value="modalForm.sex.value"
            placeholder="请选择"
            :options="sexOptions"
          />
        </n-form-item>
        <n-form-item
          v-if="modalAction !== 'add'"
          label="状态"
          path="state.value"
          :rule="{
            required: true,
            message: '请选择状态',
            trigger: 'change',
            type: 'number',
          }"
        >
          <n-select
            v-model:value="modalForm.state.value"
            placeholder="请选择"
            :options="stateOptions"
          />
        </n-form-item>
        <n-form-item
          label="角色"
          path="role.id"
          :rule="{
            required: true,
            message: '请选择角色',
            trigger: 'change',
            type: 'number',
          }"
        >
          <n-select v-model:value="modalForm.role.id" placeholder="请选择" :options="roleOptions" />
        </n-form-item>
      </n-form>
    </CrudDrawer>
  </CommonPage>
</template>

<script setup>
import { NButton } from 'naive-ui'
import { renderIcon } from '@/utils'
import { onMounted, ref } from 'vue'
import api from './api'
import { useCRUD } from '@/composables'

const onlyAllowNumber = (value) => !value || /^\d+$/.test(value)
const sexOptions = ref([
  {
    label: '男',
    value: 1,
  },
  {
    label: '女',
    value: 0,
  },
])
const stateOptions = ref([
  {
    label: '有效',
    value: 1,
  },
  {
    label: '无效',
    value: 0,
  },
])

const $table = ref(null)
const roleOptions = ref([])
onMounted(() => {
  $table.value.handleSearch()
  fetchRoleOptions()
})
async function fetchRoleOptions() {
  const result = await api.listRole()
  result.data?.forEach((item) => {
    const roleOption = {
      label: item.roleName,
      value: item.id,
    }
    roleOptions.value.push(roleOption)
  })
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
  { title: '用户名称', key: 'username', width: 120, ellipsis: { tooltip: true } },
  { title: '邮箱', key: 'email', width: 180, ellipsis: { tooltip: true } },
  { title: '电话号码', key: 'phone', width: 120 },
  { title: '头像', key: 'mvYear', width: 120, ellipsis: { tooltip: true } },
  { title: '性别', key: 'sex.description', width: 80 },
  {
    title: '创建时间',
    key: 'createTime',
    width: 180,
    render(row) {
      return h('span', row['createTime'])
    },
  },
  {
    title: '更新时间',
    key: 'updateTime',
    width: 180,
    render(row) {
      return h('span', row['updateTime'])
    },
  },
  { title: '状态', key: 'state.description', width: 80 },
  { title: '角色', key: 'role.roleName', width: 80 },
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
            secondary: true,
            onClick: () => {
              handleView(row, false)
            },
          },
          { default: () => '查看', icon: renderIcon('majesticons:eye-line', { size: 14 }) }
        ),
        h(
          NButton,
          {
            size: 'small',
            type: 'primary',
            style: 'margin-left: 15px;',
            onClick: () => {
              handleEdit({ id: row.id })
            },
          },
          { default: () => '编辑', icon: renderIcon('material-symbols:edit-outline', { size: 14 }) }
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
  modalAction,
  modalTitle,
  modalLoading,
  handleAdd,
  handleSave,
  handleView,
  handleEdit,
  handleDelete,
  modalForm,
  modalFormRef,
} = useCRUD({
  name: '用户',
  initForm: {
    state: {},
    sex: {},
    role: {},
  },
  doCreate: api.addUser,
  doDelete: api.deleteUser,
  doUpdate: api.updateUser,
  doSearch: api.getUser,
  refresh: () => $table.value?.handleSearch(),
})
</script>

<style lang="scss" scoped></style>
