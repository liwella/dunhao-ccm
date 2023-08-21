<template>
  <AppPage :show-footer="false">
    <n-card :title="采集源管理" size="small" :segmented="true" mt-15 rounded-10>
      <template #header-extra>
        <n-button type="primary" @click="handleAdd">
          <TheIcon icon="material-symbols:add" :size="18" class="mr-5" />
          新增采集源
        </n-button>
      </template>
      <CrudTable
        ref="$table"
        v-model:query-items="queryItems"
        :row-key="'id'"
        :extra-params="extraParams"
        :scroll-x="1200"
        :columns="columns"
        :get-data="api.pageMovie"
        @on-checked="onChecked"
        @on-data-change="(data) => (tableData = data)"
        @reset-query-items="resetQueryItems"
      >
        aa
      </CrudTable>
    </n-card>
  </AppPage>
</template>

<script setup></script>

<style lang="scss" scoped></style>
