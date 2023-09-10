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
      @reset-query-items="resetQueryItems"
    >
      <template #queryBar>
        <QueryBarItem label="采集源状态" :label-width="80" :content-width="150">
          <n-select
            v-model:value="queryItems.state"
            placeholder="请选择采集源状态"
            clearable
            :options="stateOptions"
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
        :label-width="120"
        :disabled="modalAction === 'view'"
      >
        <n-form-item label="采集源id" path="id">
          <n-input v-model:value="modalForm.id" disabled />
        </n-form-item>
        <n-form-item
          label="采集源名称"
          path="sourceName"
          :rule="{
            required: true,
            message: '请输入采集源名称',
            trigger: 'blur',
          }"
        >
          <n-input v-model:value="modalForm.sourceName" placeholder="请输入采集源名称" />
        </n-form-item>
        <n-form-item
          label="视频列表地址"
          path="listUrl"
          :rule="{
            required: true,
            message: '请输入视频列表地址',
            trigger: 'blur',
          }"
        >
          <n-input v-model:value="modalForm.listUrl" placeholder="请输入视频列表地址" />
        </n-form-item>
        <n-form-item
          label="视频详情地址"
          path="detailUrl"
          :rule="{
            required: true,
            message: '请输入视频详情地址',
            trigger: 'blur',
          }"
        >
          <n-input v-model:value="modalForm.detailUrl" placeholder="请输入视频详情地址" />
        </n-form-item>
        <n-form-item label="视频解析器" path="player">
          <n-input v-model:value="modalForm.player" placeholder="请输入视频解析器地址" />
        </n-form-item>
        <n-form-item
          v-if="modalAction === 'edit'"
          label="采集源状态"
          path="state.value"
          :rule="{
            required: true,
            message: '请选择采集源状态',
            trigger: 'change',
            type: 'number',
          }"
        >
          <n-select
            v-model:value="modalForm.state.value"
            :options="stateOptions"
            placeholder="请选择采集源状态"
          />
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
import { onMounted } from 'vue'

const queryItems = ref({})
function resetQueryItems() {
  for (const key in queryItems.value) {
    queryItems.value[key] = null
  }
}

const $table = ref(null)
onMounted(() => {
  $table.value.handleSearch()
})

// 加载状态选项
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

// 选中事件
const checked = ref([])
function onChecked(rowKeys) {
  if (rowKeys.length) {
    checked.value = [...rowKeys]
  } else {
    checked.value = []
  }
}
// 批量删除选中
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
  { title: '采集源名称', key: 'sourceName', width: 150, ellipsis: { tooltip: true } },
  { title: '视频列表地址', key: 'listUrl', width: 300, ellipsis: { tooltip: true } },
  { title: '视频详情地址', key: 'detailUrl', width: 300, ellipsis: { tooltip: true } },
  { title: '解析播放器', key: 'player', width: 200, ellipsis: { tooltip: true } },
  { title: '采集源状态', key: 'state.description', width: 150 },
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
          { default: () => '修改', icon: renderIcon('material-symbols:edit-outline', { size: 14 }) }
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
  handleDelete,
  handleEdit,
  handleSave,
  modalForm,
  modalFormRef,
} = useCRUD({
  name: '采集源',
  initForm: {},
  doCreate: api.add,
  doDelete: api.delete,
  doUpdate: api.update,
  refresh: () => $table.value?.handleSearch(),
})
</script>

<style lang="scss" scoped></style>
