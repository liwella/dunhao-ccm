<template>
  <AppPage :show-footer="false">
    <n-card title="分类管理" size="small" :segmented="true" mt-15 rounded-10>
      <template #header-extra>
        <n-button type="primary">新增</n-button>
        <n-button type="error" ml-4>删除</n-button>
      </template>
      <n-tree block-line :data="categoryData" checkable expand-on-click selectable />
    </n-card>
  </AppPage>
</template>

<script setup>
import api from './api'
import { onMounted } from 'vue'

onMounted(() => {
  fetchData()
})

// 获取分类列表
const categoryData = ref([])
async function fetchData() {
  const result = await api.listCategory()
  const ret = filterData(result.data)
  categoryData.value = ret
}
function filterData(data = []) {
  const ret = []
  data.forEach((item) => {
    const category = {
      label: item.name,
      key: item.id,
      children: [],
    }
    if (item.children && item.children.length) {
      category.children = filterData(item.children)
    }
    ret.push(category)
  })
  return ret
}
</script>

<style lang="scss" scoped></style>
