<template>
  <CommonPage show-footer title="影片管理">
    <template #action>
      <div>
        <n-button type="primary" @click="handleAdd">
          <TheIcon icon="material-symbols:add" :size="18" class="mr-5" />
          新建影片
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
      :row-key="'movieId'"
      :extra-params="extraParams"
      :scroll-x="1200"
      :columns="columns"
      :get-data="api.pageMovie"
      @on-checked="onChecked"
      @on-data-change="(data) => (tableData = data)"
      @reset-query-items="resetQueryItems"
    >
      <template #queryBar>
        <QueryBarItem label="片名" :label-width="35">
          <n-input
            v-model:value="queryItems.mvName"
            type="text"
            placeholder="请输入片名"
            @keypress.enter="$table?.handleSearch"
          />
        </QueryBarItem>
        <QueryBarItem label="类型" :label-width="35" :content-width="130">
          <n-select
            v-model:value="queryItems.mvType"
            placeholder="请选择类型"
            clearable
            :options="categoryOptions"
          />
        </QueryBarItem>
        <QueryBarItem label="出厂地区" :label-width="60" :content-width="120">
          <n-select
            v-model:value="queryItems.mvArea"
            placeholder="请选择地区"
            clearable
            :options="areaOptions"
          />
        </QueryBarItem>
        <QueryBarItem label="出厂年份" :label-width="60" :content-width="120">
          <n-date-picker
            v-model:formatted-value="queryItems.mvYear"
            value-format="yyyy"
            type="year"
            clearable
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
        <n-form-item label="影片id" path="movieId">
          <n-input v-model:value="modalForm.movieId" disabled />
        </n-form-item>
        <n-form-item
          label="影片名称"
          path="mvName"
          :rule="{
            required: true,
            message: '请输入影片名称',
            trigger: 'blur',
          }"
        >
          <n-input v-model:value="modalForm.mvName" />
        </n-form-item>
        <n-form-item
          label="影片分类"
          path="mvType"
          :rule="{
            required: true,
            message: '请选择分类',
            trigger: 'blur',
            type: 'number',
          }"
        >
          <n-select
            v-model:value="modalForm.mvType"
            placeholder="请选择分类"
            filterable
            :options="categoryOptions"
          />
        </n-form-item>
        <n-form-item
          v-if="modalForm.mvArea"
          label="地区"
          path="mvArea.value"
          :rule="{
            required: true,
            message: 请选择地区,
            trigger: 'change',
            type: 'number',
          }"
        >
          <n-select
            v-model:value="modalForm.mvArea.value"
            placeholder="请选择地区"
            filterable
            :options="areaOptions"
          />
        </n-form-item>
        <n-form-item label="出场年份" path="mvYear">
          <n-date-picker
            v-model:formatted-value="modalForm.mvYear"
            value-format="yyyy"
            type="year"
            clearable
          />
        </n-form-item>
        <n-form-item label="创建时间" path="createDate">
          <n-date-picker
            v-model:formatted-value="modalForm.createDate"
            value-format="yyyy-MM-dd"
            type="date"
            clearable
          />
        </n-form-item>
        <n-form-item label="最后更新时间" path="updateDate">
          <n-date-picker
            v-model:formatted-value="modalForm.updateDate"
            value-format="yyyy-MM-dd"
            type="date"
            clearable
          />
        </n-form-item>
        <n-form-item
          label="最新集数"
          path="updateInfo"
          :rule="{
            required: true,
            message: '请输入最新集数',
            trigger: 'blur',
          }"
        >
          <n-input v-model:value="modalForm.updateInfo" placeholder="请输入最新集数" />
        </n-form-item>
        <n-form-item label="详情" path="description">
          <n-input v-model:value="modalForm.description" placeholder="请输入详情" type="textarea" />
        </n-form-item>
        <n-form-item label="演员列表" path="actorList">
          <n-input v-model:value="modalForm.actorList" placeholder="请输入演员列表" />
        </n-form-item>
        <n-form-item label="导演列表" path="directorList">
          <n-input v-model:value="modalForm.directorList" placeholder="请输入导演列表" />
        </n-form-item>
        <n-form-item
          v-if="modalForm.state"
          label="状态"
          path="state.value"
          :rule="{
            required: true,
            message: '请选择影片状态',
            trigger: 'change',
            type: 'number',
          }"
        >
          <n-select v-model:value="modalForm.state.value" :options="stateOptions" />
        </n-form-item>
        <n-form-item label="影片主图" path="picture">
          <n-input v-model:value="modalForm.picture" placeholder="请输入主图地址" />
        </n-form-item>
        <n-form-item>
          <n-card w-3xl>
            <template #cover>
              <img :src="modalForm.picture" />
            </template>
          </n-card>
        </n-form-item>
        <n-form-item label="轮播图" path="screenPicture">
          <n-input v-model:value="modalForm.screenPicture" />
        </n-form-item>
        <n-form-item label="评分" path="score">
          <n-input v-model:value="modalForm.score" placeholder="请输入评分" />
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
import { useRouter } from 'vue-router'

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

onMounted(() => {
  $table.value?.handleSearch()
  loadingCategory()
  loadingArea()
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

// 加载分类选项
const categoryOptions = ref([])
async function loadingCategory() {
  const result = await api.listCategory()
  filterCategory(result?.data)
}
function filterCategory(data = []) {
  data.forEach((item) => {
    const category = {
      label: item.name,
      value: item.id,
    }
    categoryOptions.value.push(category)
    if (item.children && item.children.length) {
      filterCategory(item.children)
    }
  })
}

// 加载地区选项
const areaOptions = ref([])
async function loadingArea() {
  const result = await api.listArea()
  result?.data.forEach((item) => {
    const area = {
      label: item.description,
      value: item.value,
    }
    areaOptions.value.push(area)
  })
}

const columns = [
  { type: 'selection', fixed: 'left' },
  { title: '影片名称', key: 'mvName', width: 150, ellipsis: { tooltip: true } },
  { title: '分类', key: 'categoryName', width: 80, ellipsis: { tooltip: true } },
  { title: '地区', key: 'mvArea.description', width: 80 },
  { title: '出厂年份', key: 'mvYear', width: 80 },
  {
    title: '创建日期',
    key: 'createDate',
    width: 120,
    render(row) {
      return h('span', row['createDate'])
    },
  },
  {
    title: '最后更新日期',
    key: 'updateDate',
    width: 120,
    render(row) {
      return h('span', row['updateDate'])
    },
  },
  { title: '最新集数', key: 'updateInfo', width: 120 },
  { title: '演员列表', key: 'actorList', width: 150, ellipsis: { tooltip: true } },
  { title: '导演列表', key: 'directorList', width: 150, ellipsis: { tooltip: true } },
  { title: '状态', key: 'state.description', width: 80 },
  { title: '影片主图', key: 'picture', width: 150, ellipsis: { tooltip: true } },
  { title: '评分', key: 'score', width: 80 },
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
              toWatch(row.movieId)
            },
          },
          { default: () => '观看', icon: renderIcon('majesticons:eye-line', { size: 14 }) }
        ),
        h(
          NButton,
          {
            size: 'small',
            type: 'primary',
            style: 'margin-left: 15px;',
            onClick: () => {
              handleEdit(row)
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
            onClick: () => handleDelete(row.movieId),
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
    handleDelete(checked.value)
    checked.value = []
  } else {
    $message.error('未选中任何数据')
  }
}

// 跳转详情页观看影片
const router = useRouter()
function toWatch(id) {
  router.push({
    name: 'detail',
    params: {
      id,
    },
  })
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
  name: '影片',
  initForm: {
    state: { value: 1, description: '有效' },
    mvArea: { value: -1, description: '未知' },
  },
  doCreate: api.addOrUpdate,
  doDelete: api.deleteMovie,
  doUpdate: api.addOrUpdate,
  doSearch: api.detail,
  refresh: () => $table.value?.handleSearch(),
})
</script>

<style lang="scss" scoped></style>
