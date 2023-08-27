<template>
  <CommonPage show-footer title="采集管理">
    <template #action>
      <div>
        <n-button type="primary" class="ml-16" @click="handleAdd">
          <TheIcon icon="material-symbols:add" :size="18" class="mr-5" />
          新增任务
        </n-button>
      </div>
    </template>

    <CrudTable
      ref="$table"
      v-model:query-items="queryItems"
      :extra-params="extraParams"
      :scroll-x="1200"
      :columns="columns"
      :get-data="api.pageCollectTask"
      @on-checked="onChecked"
      @on-data-change="(data) => (tableData = data)"
      @reset-query-items="resetQueryItems"
    >
      <template #queryBar>
        <QueryBarItem label="采集源" :label-width="50">
          <n-select
            v-model:value="queryItems.sourceId"
            placeholder="请选择采集源"
            clearable
            :options="sourceConfigOptions"
          />
        </QueryBarItem>
        <QueryBarItem label="任务状态" :label-width="60" :content-width="150">
          <n-select
            v-model:value="queryItems.state"
            placeholder="请选择任务状态"
            clearable
            :options="taskStateOptions"
          />
        </QueryBarItem>
        <QueryBarItem label="创建时间" :label-width="65" :content-width="300">
          <n-date-picker
            v-model:formatted-value="queryItems.startTimeRange"
            type="datetimerange"
            placeholder="请选择范围"
            clearable
            @update:formatted-value="updateTime"
          />
        </QueryBarItem>
        <QueryBarItem label="结束时间" :label-width="65" :content-width="300">
          <n-date-picker
            v-model:formatted-value="queryItems.endTimeRange"
            type="datetimerange"
            placeholder="请选择范围"
            clearable
            @update:formatted-value="updateTime"
          />
        </QueryBarItem>
      </template>
    </CrudTable>
    <!-- 新增/编辑/查看 -->
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
        <n-form-item label="是否采集全部" :label-width="120">
          <n-switch v-model:value="activeDuration" />
        </n-form-item>
        <n-form-item
          v-if="!activeDuration"
          label="采集时间段"
          path="duration"
          :label-width="110"
          :rule="{
            required: true,
            message: '请输入采集时间段',
            trigger: 'blur',
            type: 'number',
          }"
        >
          <n-input-number
            v-model:value="modalForm.duration"
            :min="1"
            placeholder="采集过去xx天数据"
            clearable
            w-full
            button-placement="both"
          />
        </n-form-item>
        <n-form-item
          label="采集源"
          path="sourceIds"
          :rule="{
            required: true,
            message: '请选择采集源',
            trigger: 'blur',
            type: 'array',
          }"
        >
          <n-select
            v-model:value="modalForm.sourceIds"
            placeholder="请选择采集源"
            clearable
            :options="sourceConfigOptions"
            multiple
          />
        </n-form-item>
      </n-form>
    </CrudDrawer>
  </CommonPage>
</template>

<script setup>
import { NButton, NProgress } from 'naive-ui'
import { renderIcon } from '@/utils'
import { useCRUD } from '@/composables'
import api from './api'
import { h, onMounted } from 'vue'

defineOptions({ name: 'Crud' })

const $table = ref(null)
/** 表格数据，触发搜索的时候会更新这个值 */
const tableData = ref([])
/** QueryBar筛选参数（可选） */
const queryItems = ref({})
function resetQueryItems() {
  for (const key in queryItems.value) {
    queryItems.value[key] = null
  }
}
/** 补充参数（可选） */
const extraParams = ref({})
/** 是否启用采集时间段 */
const activeDuration = ref(true)

onMounted(() => {
  $table.value?.handleSearch()
  loadingSourceConfig()
  loadingTaskState()
})

// 加载采集源选项
const sourceConfigOptions = ref([])
async function loadingSourceConfig() {
  const result = await api.listSimpleSc()
  result?.data.forEach((item) => {
    const sourceConfig = {
      label: item.sourceName,
      value: item.id,
    }
    sourceConfigOptions.value.push(sourceConfig)
  })
}
// 加载采集任务状态
const taskStateOptions = ref([])
async function loadingTaskState() {
  const result = await api.listCollectTaskState()
  result?.data.forEach((item) => {
    const taskState = {
      label: item.description,
      value: item.value,
    }
    taskStateOptions.value.push(taskState)
  })
}
// 更新开始/结束时间查询参数
function updateTime() {
  let value = queryItems.value
  const startTime = {}
  if (value.startTimeRange && value.startTimeRange.length) {
    startTime.startTime = value.startTimeRange[0]
    startTime.endTime = value.startTimeRange[1]
    value.startTime = startTime
  } else {
    delete value.startTime
  }
  const endTime = {}
  if (value.endTimeRange && value.endTimeRange.length) {
    endTime.startTime = value.endTimeRange[0]
    endTime.endTime = value.endTimeRange[1]
    value.endTime = endTime
  } else {
    delete value.endTime
  }
}

async function handleStart(row) {
  const result = await api.startCollectTask({ id: row.id })
  if (result.code === 200) {
    $message.success('已开始~')
    refresh()
  }
}

async function handlePause(row) {
  const result = await api.pauseTask({ id: row.id })
  if (result.code === 200) {
    $message.success('已暂停~')
    refresh()
  }
}

async function handleStop(row) {
  const result = await api.stopTask({ id: row.id })
  if (result.code === 200) {
    $message.success('已停止~')
    refresh()
  }
}

const columns = [
  { title: '采集id', key: 'id', width: 80, ellipsis: { tooltip: true } },
  { title: '采集源名称', key: 'sourceName', width: 100, ellipsis: { tooltip: true } },
  {
    title: '采集时间段',
    key: 'duration',
    width: 100,
    render(row) {
      if (row.duration) {
        return `过去 ${row.duration} 天`
      }
      return '全部'
    },
  },
  {
    title: '采集进度',
    key: 'process',
    width: 150,
    render(row) {
      return h(NProgress, {
        type: 'line',
        status: (function () {
          switch (row.state.value) {
            case 2:
              return 'warning'
            case 3:
              return 'error'
            case 4:
              return 'success'
            default:
              return 'info'
          }
        })(),
        percentage: row.process,
        processing: (function () {
          switch (row.state.value) {
            case 2:
            case 3:
            case 4:
              return false
            default:
              return true
          }
        })(),
        borderRadius: 2,
      })
    },
  },
  { title: '任务状态', key: 'state.description', width: 80 },
  {
    title: '创建时间',
    key: 'createTime',
    width: 180,
    render(row) {
      return h('span', row['createTime'])
    },
  },
  {
    title: '开始时间',
    key: 'startTime',
    width: 180,
    render(row) {
      return h('span', row['startTime'])
    },
  },
  {
    title: '暂停时间',
    key: 'pauseTime',
    width: 180,
    render(row) {
      return h('span', row['pauseTime'])
    },
  },
  {
    title: '停止时间',
    key: 'stopTime',
    width: 180,
    render(row) {
      return h('span', row['stopTime'])
    },
  },
  {
    title: '完成时间',
    key: 'finishTime',
    width: 180,
    render(row) {
      return h('span', row['finishTime'])
    },
  },
  {
    title: '操作',
    key: 'actions',
    width: 180,
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
            text: true,
            onClick: () => {
              handleStart(row)
            },
            disabled: [0, 1, 3, 4].includes(row.state?.value),
          },
          { default: () => '', icon: renderIcon('bi:play-btn-fill', { size: 25 }) }
        ),
        h(
          NButton,
          {
            size: 'small',
            type: 'primary',
            text: true,
            style: 'margin-left: 15px;',
            onClick: () => {
              handlePause(row)
            },
            disabled: [2, 3, 4].includes(row.state?.value),
          },
          { default: () => '', icon: renderIcon('bi:pause-btn-fill', { size: 25 }) }
        ),
        h(
          NButton,
          {
            size: 'small',
            type: 'error',
            text: true,
            style: 'margin-left: 15px;',
            onClick: () => {
              handleStop(row)
            },
            disabled: [3, 4].includes(row.state?.value),
          },
          { default: () => '', icon: renderIcon('bi:stop-btn-fill', { size: 25 }) }
        ),
      ]
    },
  },
]

// 选中事件
function onChecked(rowKeys) {
  if (rowKeys.length) $message.info(`选中${rowKeys.join(' ')}`)
}

const {
  modalVisible,
  modalAction,
  modalTitle,
  modalLoading,
  handleAdd,
  handleSave,
  refresh,
  modalForm,
  modalFormRef,
} = useCRUD({
  name: '采集任务',
  initForm: {},
  doCreate: api.addCollectTask,
  doDelete: null,
  doUpdate: null,
  doSearch: null,
  refresh: () => $table.value?.handleSearch(),
})
</script>

<style lang="scss" scoped></style>
