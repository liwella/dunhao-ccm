<template>
  <CommonPage show-footer title="影片">
    <template #action>
      <div>
        <n-button type="primary" secondary @click="$table?.handleExport()">
          <TheIcon icon="mdi:download" :size="18" class="mr-5" />
          导出
        </n-button>
        <n-button type="primary" class="ml-16" @click="handleAdd">
          <TheIcon icon="material-symbols:add" :size="18" class="mr-5" />
          新建影片
        </n-button>
      </div>
    </template>

    <CrudTable
      ref="$table"
      v-model:query-items="queryItems"
      :extra-params="extraParams"
      :scroll-x="1200"
      :columns="columns"
      :get-data="api.pageMovie"
      @on-checked="onChecked"
      @on-data-change="(data) => (tableData = data)"
    >
      <template #queryBar>
        <QueryBarItem label="片名" :label-width="50">
          <n-input
            v-model:value="queryItems.mvName"
            type="text"
            placeholder="请输入片名"
            @keypress.enter="$table?.handleSearch"
          />
        </QueryBarItem>
        <QueryBarItem label="类型" :label-width="50">
          <n-input
            v-model:value="queryItems.mvType"
            type="text"
            placeholder="请输入类型"
            @keypress.enter="$table?.handleSearch"
          />
        </QueryBarItem>
      </template>
    </CrudTable>
    <!-- 新增/编辑/查看 -->
    <CrudModal
      v-model:visible="modalVisible"
      :title="modalTitle"
      :loading="modalLoading"
      :show-footer="modalAction !== 'view'"
      @on-save="handleSave"
      @modal-invisible="modalInvisible"
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
            trigger: ['input', 'blur'],
          }"
        >
          <n-input v-model:value="modalForm.mvName" />
        </n-form-item>
        <n-form-item
          label="影片分类"
          path="categoryName"
          :rule="{
            required: true,
            message: '请选择分类',
            trigger: ['input', 'blur'],
          }"
        >
          <n-select
            v-model:value="modalForm.mvType"
            placeholder="请选择分类"
            filterable
            :options="categoryOptions"
            :loading="categoryLoading"
          />
        </n-form-item>
        <n-form-item
          v-if="modalForm.mvArea"
          label="地区"
          path="mvArea"
          :rule="{
            required: false,
            message: '请选择地区',
            trigger: ['input', 'blur'],
          }"
        >
          <n-input v-model:value="modalForm.mvArea.description" placeholder="请选择地区" />
        </n-form-item>
        <!-- <n-form-item label="出场年份" path="mvYear">
          <n-date-picker
            v-model:formatted-value="modalForm.mvYear"
            value-format="yyyy"
            type="year"
            clearable
          />
        </n-form-item> -->
        <n-form-item label="创建时间" path="createTime">
          <n-date-picker
            v-model:formatted-value="modalForm.createTime"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetime"
            clearable
          />
        </n-form-item>
        <n-form-item label="最后更新时间" path="updateTime">
          <n-date-picker
            v-model:formatted-value="modalForm.updateTime"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetime"
            clearable
          />
        </n-form-item>
        <n-form-item
          label="最新集数"
          path="updateInfo"
          :rule="{
            required: true,
            message: '请输入最新集数',
            trigger: ['input', 'blur'],
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
        <n-form-item v-if="modalForm.state" label="状态" path="state">
          <n-select v-model:value="modalForm.state.value" :options="stateOptions" />
        </n-form-item>
        <n-form-item label="影片主图" path="picture">
          <n-input v-model:value="modalForm.picture" placeholder="请输入导演列表" />
        </n-form-item>
        <n-form-item>
          <n-card w-3xl>
            <template #cover>
              <img :src="modalForm.picture" />
            </template>
          </n-card>
        </n-form-item>
        <n-form-item label="评分" path="score">
          <n-input v-model:value="modalForm.score" placeholder="请输入评分" />
        </n-form-item>
      </n-form>
    </CrudModal>
  </CommonPage>
</template>

<script setup>
import { NButton } from 'naive-ui'
import { renderIcon } from '@/utils'
import { useCRUD } from '@/composables'
import api from './api'
import { onMounted } from 'vue'

defineOptions({ name: 'Crud' })

const $table = ref(null)
/** 表格数据，触发搜索的时候会更新这个值 */
const tableData = ref([])
/** QueryBar筛选参数（可选） */
const queryItems = ref({})
/** 补充参数（可选） */
const extraParams = ref({})

onMounted(() => {
  $table.value?.handleSearch()
})

// 影片状态选择初始化
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

// 分类选择初始化
const categoryLoading = ref(false)
const categoryOptions = ref([])
async function loadingCategory() {
  categoryLoading.value = true
  const result = await api.listCategory()
  filterCategory(result?.data)
  categoryLoading.value = false
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
    // if (item.level === 0) {
    //   const category = {
    //     type: 'group',
    //     label: item.name,
    //     key: item.name,
    //     children: [],
    //   }
    //   if (item.children && item.children.length) {
    //     filterCategory(item.children)
    //   }
    //   categoryOptions.value.push(category)
    // } else {
    //   const category = {
    //     label: item.name,
    //     value: item.id,
    //   }
    //   categoryOptions.value.push(category)
    // }
  })
}

// 取消编辑
function modalInvisible(visible = Boolean) {
  modalVisible.value = visible
  categoryOptions.value = []
}

const columns = [
  { type: 'selection', fixed: 'left' },
  { title: '影片名称', key: 'mvName', width: 150, ellipsis: { tooltip: true } },
  { title: '分类', key: 'categoryName', width: 80, ellipsis: { tooltip: true } },
  { title: '地区', key: 'mvArea.description', width: 80 },
  {
    title: '创建时间',
    key: 'createTime',
    width: 180,
    render(row) {
      return h('span', row['createTime'])
    },
  },
  {
    title: '最后更新时间',
    key: 'updateTime',
    width: 180,
    render(row) {
      return h('span', row['updateTime'])
    },
  },
  { title: '最新集数', key: 'updateInfo', width: 80 },
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
              handleView(row)
              loadingCategory()
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
              handleEdit(row)
              loadingCategory()
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
function onChecked(rowKeys) {
  if (rowKeys.length) $message.info(`选中${rowKeys.join(' ')}`)
}

const {
  modalVisible,
  modalAction,
  modalTitle,
  modalLoading,
  handleAdd,
  handleDelete,
  handleEdit,
  handleView,
  handleSave,
  modalForm,
  modalFormRef,
} = useCRUD({
  name: '影片',
  initForm: { author: 'liwell' },
  doCreate: api.addPost,
  doDelete: api.deletePost,
  doUpdate: api.updatePost,
  doSearch: api.detail,
  refresh: () => $table.value?.handleSearch(),
})
</script>

<style lang="scss" scoped></style>
