<template>
  <CommonPage show-footer title="采集源管理">
    <template #action>
      <div>
        <n-button type="primary" class="ml-16" @click="handleAdd">
          <TheIcon icon="material-symbols:add" :size="18" class="mr-5" />
          新增采集源
        </n-button>
        <n-button type="error" class="ml-16" @click="batchDelete">
          <TheIcon icon="material-symbols:delete-outline" :size="18" class="mr-5" />
          删除采集源
        </n-button>
      </div>
    </template>
    <CrudTable
      ref="$table"
      v-model:query-items="queryItems"
      :is-pagination="false"
      :scroll-x="1200"
      :columns="columns"
      :get-data="api.list"
      @on-checked="onChecked"
      @on-data-change="(data) => (tableData = data)"
      @reset-query-items="resetQueryItems"
    >
      <template #queryBar>
        <QueryBarItem label="采集源状态" :label-width="80" :content-width="150">
          <n-select
            v-model:value="queryItems.state"
            placeholder="请选择采集源状态"
            clearable
            :options="taskStateOptions"
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
        <n-form-item label="采集源id">
          <n-input v-model:value="modalForm.id" disabled />
        </n-form-item>
        <n-form-item label="采集源名称">
          <n-input v-model:value="modalForm.sourceName" />
        </n-form-item>
        <n-form-item label="视频列表地址">
          <n-input v-model:value="modalForm.listUrl" />
        </n-form-item>
        <n-form-item label="视频详情地址">
          <n-input v-model:value="modalForm.detailUrl" />
        </n-form-item>
        <n-form-item label="采集源状态">
          <n-select v-model:value="modalForm.state.value" />
        </n-form-item>
      </n-form>
    </CrudDrawer>
  </CommonPage>
</template>

<script setup>
import { NButton } from 'naive-ui'
import { renderIcon } from '@/utils'
import { useCRUD } from '@/composables'
import api from './api'

const $table = ref(null)
const queryItems = ref({})

const columns = [
  { title: '采集源名称', key: 'sourceName', width: 150, ellipsis: { tooltip: true } },
  { title: '视频列表地址', key: 'listUrl', width: 300, ellipsis: { tooltip: true } },
  { title: '视频详情地址', key: 'detailUrl', width: 300, ellipsis: { tooltip: true } },
  { title: '采集源状态', key: 'state.description', width: 150 },
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
              handleEdit(row)
            },
          },
          { default: () => '修改', icon: renderIcon('material-symbols:edit-outline', { size: 14 }) }
        ),
        h(
          NButton,
          {
            size: 'small',
            type: 'error',
            style: 'margin-left: 15px;',
            onClick: () => {
              handleDelete({ id: row.id })
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
  handleDelete,
  handleEdit,
  handleSave,
  modalForm,
  modalFormRef,
} = useCRUD({
  name: '采集源管理',
  initForm: {},
  doCreate: api.add,
  doDelete: null,
  doUpdate: null,
  doSearch: null,
  refresh: () => $table.value?.handleSearch(),
})
</script>

<style lang="scss" scoped></style>
