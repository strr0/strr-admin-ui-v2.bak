<template>
  <div class="h-full overflow-hidden">
    <n-card title="服务管理" :bordered="false" class="rounded-16px shadow-sm">
      <n-space class="pb-12px" justify="space-between">
        <n-space align="center" :size="18">
          <n-button size="small" type="primary" @click="getTableData">
            <icon-mdi-refresh class="mr-4px text-16px" :class="{ 'animate-spin': loading }" />
            刷新表格
          </n-button>
        </n-space>
      </n-space>
      <n-data-table :columns="columns" :data="tableData" :row-key="item => item.route_id" :loading="loading" />
    </n-card>
  </div>
</template>

<script setup lang="tsx">
import { h, reactive, ref } from 'vue';
import type { Ref } from 'vue';
import type { DataTableColumns, PaginationProps } from 'naive-ui';
import { fetchServerList } from '@/service';
import { useLoading } from '@/hooks';

const { loading, startLoading, endLoading } = useLoading(false);

const tableData = ref<ApiServer.Server[]>([]);
function setTableData(data: ApiServer.Server[]) {
  tableData.value = data;
}

async function getTableData() {
  startLoading();
  const data = await fetchServerList();
  if (data) {
    setTimeout(() => {
      setTableData(data);
      endLoading();
    }, 1000);
  }
}

const columns: Ref<DataTableColumns<ApiServer.Server>> = ref([
  {
    type: 'selection',
    align: 'center'
  },
  {
    key: 'index',
    title: '序号',
    align: 'center',
    render (row, index) {
      return h('span', index + 1)
    }
  },
  {
    key: 'predicate',
    title: 'Predicate',
    align: 'center'
  },
  // {
  //   key: 'metadata',
  //   title: 'Metadata',
  //   align: 'center'
  // },
  {
    key: 'route_id',
    title: 'RouteId',
    align: 'center'
  },
  {
    key: 'uri',
    title: 'Uri',
    align: 'center'
  },
  {
    key: 'order',
    title: 'Order',
    align: 'center'
  }
]) as Ref<DataTableColumns<ApiServer.Server>>;

function init() {
  getTableData();
}

// 初始化
init();
</script>

<style scoped></style>
