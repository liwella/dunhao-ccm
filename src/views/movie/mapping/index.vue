<template>
  <AppPage :show-footer="false">
    <n-card title="映射管理" size="small" :segmented="true" mt-15 rounded-10>
      <template #header-extra>
        <n-select
          v-model:value="selectedSource"
          placeholder="请选择采集源"
          :options="sourceConfigOptions"
          clearable
          w-3xl
          @update:value="handleSourceUpdate"
        />
      </template>
      <n-space vertical>
        <n-spin :show="sourceCategoryLoading">
          <div v-if="selectedSource" flex flex-wrap justify-between>
            <n-card
              v-for="(item, index) in sourceCategory"
              :key="index"
              class="mb-10 mr-10 w-200 flex-shrink-0 cursor-pointer"
              hover:card-shadow
              :title="item.type_name"
              size="small"
            >
              <n-select
                v-model:value="item.categoryId"
                :options="categoryOptions"
                :loading="item.loading"
                filterable
                clearable
                placeholder="请选择分类"
                @update:value="handleUpdateMapping(item)"
              />
            </n-card>
          </div>
        </n-spin>
      </n-space>
      <div h-10 w-300></div>
    </n-card>
  </AppPage>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import api from './api'
import { isNullOrUndef } from '@/utils'

onMounted(() => {
  loadingSourceConfig()
  loadingCategory()
})

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
// 采集源绑定值
const selectedSource = ref(null)

// 获取采集源分类列表
const sourceCategoryLoading = ref(false)
const sourceCategory = ref([])
async function handleSourceUpdate(value) {
  if (isNullOrUndef(value)) {
    return
  }
  sourceCategoryLoading.value = true
  const scList = await api.listSourceCategory({ id: value })
  const cmList = await api.listCategoryMapping({ sourceId: value })
  cmList?.data.forEach((item) => {
    const find = scList?.data.find((sc) => sc.type_id === item.sourceTypeId)
    if (!isNullOrUndef(find)) {
      find.categoryId = item.categoryId
    }
  })
  sourceCategory.value = scList?.data
  sourceCategoryLoading.value = false
}

// 更新分类映射
async function handleUpdateMapping(item) {
  item.loading = true
  if (isNullOrUndef(item.categoryId)) {
    await api.deleteMapping({ sourceId: selectedSource.value, sourceTypeId: item.type_id })
    item.loading = false
    return
  }
  const param = {
    sourceId: selectedSource.value,
    sourceTypeId: item.type_id,
    categoryId: item.categoryId,
  }
  await api.addOrUpdate(param)
  item.loading = false
}
</script>

<style lang="scss" scoped></style>
