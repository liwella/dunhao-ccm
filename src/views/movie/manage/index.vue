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
      :get-data="api.getPosts"
      @on-checked="onChecked"
      @on-data-change="(data) => (tableData = data)"
    >
      <template #queryBar>
        <QueryBarItem label="片名" :label-width="50">
          <n-input
            v-model:value="queryItems.title"
            type="text"
            placeholder="请输入片名"
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
    >
      <n-form
        ref="modalFormRef"
        label-placement="left"
        label-align="left"
        :label-width="80"
        :model="modalForm"
        :disabled="modalAction === 'view'"
      >
        <n-form-item label="作者" path="author">
          <n-input v-model:value="modalForm.author" disabled />
        </n-form-item>
        <n-form-item
          label="文章标题"
          path="title"
          :rule="{
            required: true,
            message: '请输入文章标题',
            trigger: ['input', 'blur'],
          }"
        >
          <n-input v-model:value="modalForm.title" placeholder="请输入文章标题" />
        </n-form-item>
        <n-form-item
          label="文章内容"
          path="content"
          :rule="{
            required: true,
            message: '请输入文章内容',
            trigger: ['input', 'blur'],
          }"
        >
          <n-input
            v-model:value="modalForm.content"
            placeholder="请输入文章内容"
            type="textarea"
            :autosize="{
              minRows: 3,
              maxRows: 5,
            }"
          />
        </n-form-item>
      </n-form>
    </CrudModal>
  </CommonPage>
</template>

<script setup>
import { NButton } from 'naive-ui'
import { formatDateTime, renderIcon } from '@/utils'
import { useCRUD } from '@/composables'
import api from './api'

defineOptions({ name: 'Crud' })

const $table = ref(null)
/** 表格数据，触发搜索的时候会更新这个值 */
const tableData = ref([])
/** QueryBar筛选参数（可选） */
const queryItems = ref({})
/** 补充参数（可选） */
const extraParams = ref({})

onActivated(() => {
  $table.value?.handleSearch()
})

const columns = [
  { type: 'selection', fixed: 'left' },
  { title: '影片名称', key: 'mvName', width: 150, ellipsis: { tooltip: true } },
  { title: '分类', key: 'mvType', width: 80, ellipsis: { tooltip: true } },
  { title: '地区', key: 'mvArea', width: 80 },
  {
    title: '出厂年份',
    key: 'mvYear',
    width: 80,
  },
  {
    title: '创建时间',
    key: 'createTime',
    width: 150,
    render(row) {
      return h('span', formatDateTime(row['createDate']))
    },
  },
  {
    title: '最后更新时间',
    key: 'updateTime',
    width: 150,
    render(row) {
      return h('span', formatDateTime(row['updateDate']))
    },
  },
  { title: '最新集数', key: 'updateInfo', width: 80 },
  { title: '详情', key: 'description', width: 150, ellipsis: { tooltip: true } },
  { title: '演员列表', key: 'actorList', width: 150, ellipsis: { tooltip: true } },
  { title: '导演列表', key: 'directorList', width: 150, ellipsis: { tooltip: true } },
  { title: '状态', key: '影片状态', width: 80 },
  { title: '影片主图', key: 'picture', width: 80, ellipsis: { tooltip: true } },
  { title: '大图（轮播）', key: 'screenPicture', width: 80, ellipsis: { tooltip: true } },
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
            onClick: () => handleView(row),
          },
          { default: () => '查看', icon: renderIcon('majesticons:eye-line', { size: 14 }) }
        ),
        h(
          NButton,
          {
            size: 'small',
            type: 'primary',
            style: 'margin-left: 15px;',
            onClick: () => handleEdit(row),
          },
          { default: () => '编辑', icon: renderIcon('material-symbols:edit-outline', { size: 14 }) }
        ),

        h(
          NButton,
          {
            size: 'small',
            type: 'error',
            style: 'margin-left: 15px;',
            onClick: () => handleDelete(row.id),
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
  refresh: () => $table.value?.handleSearch(),
})
</script>

<style lang="scss" scoped></style>
