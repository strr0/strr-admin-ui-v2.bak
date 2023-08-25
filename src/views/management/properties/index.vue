<template>
  <div class="h-full overflow-hidden">
    <n-card title="配置管理" :bordered="false" class="rounded-16px shadow-sm">
      <n-space class="pb-12px" justify="space-between">
        <n-space>
          <n-button type="primary" @click="handleAddTable" v-permission="'add'">
            <icon-ic-round-plus class="mr-4px text-20px" />
            新增
          </n-button>
        </n-space>
        <n-space align="center" :size="18">
          <n-button size="small" type="primary" @click="getTableData">
            <icon-mdi-refresh class="mr-4px text-16px" :class="{ 'animate-spin': loading }" />
            刷新表格
          </n-button>
        </n-space>
      </n-space>
      <n-data-table :columns="columns" :data="tableData" :row-key="item => item.application" :loading="loading" />
      <properties-add v-model:visible="addVisible" :refresh="getTableData" />
    </n-card>
  </div>
</template>

<script setup lang="tsx">
import { h, reactive, ref } from 'vue';
import type { Ref } from 'vue';
import { NButton, NPopconfirm, NSpace, NTag } from 'naive-ui';
import type { DataTableColumns, PaginationProps } from 'naive-ui';
import { fetchApplicationList, batchRemoveProperties } from '@/service';
import { useBoolean, useLoading } from '@/hooks';
import { routeName } from '@/router';
import { useButton, useRouterPush } from '@/composables'
import PropertiesAdd from './components/add.vue'

const { loading, startLoading, endLoading } = useLoading(false);
const { bool: addVisible, setTrue: openAddModal } = useBoolean();
const { hasButton } = useButton();
const { routerPush } = useRouterPush();

const tableData = ref<ApiManagement.Properties[]>([]);
function setTableData(data: ApiManagement.Properties[]) {
  tableData.value = data;
}

async function getTableData() {
  startLoading();
  const { data } = await fetchApplicationList({});
  if (data) {
    setTimeout(() => {
      setTableData(data);
      endLoading();
    }, 1000);
  }
}

const showButton: (row: any) => any = hasButton('show') ? row => (
  <NButton size={'small'} onClick={() => handleShowTable(row)}>
    查看
  </NButton>
) : row => ''
const delButton: (application: string) => any = hasButton('del') ? application => (
  <NPopconfirm onPositiveClick={() => handleDeleteTable(application)}>
    {{
      default: () => '确认删除',
      trigger: () => <NButton size={'small'}>删除</NButton>
    }}
  </NPopconfirm>
) : application => ''

const columns: Ref<DataTableColumns<ApiManagement.Properties>> = ref([
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
    key: 'application',
    title: '应用',
    align: 'center'
  },
  {
    key: 'profile',
    title: '环境',
    align: 'center'
  },
  {
    key: 'actions',
    title: '操作',
    align: 'center',
    render: row => {
      return (
        <NSpace justify={'center'}>
          {showButton(row)}
          {delButton(row.application)}
        </NSpace>
      );
    }
  }
]) as Ref<DataTableColumns<ApiManagement.Properties>>;

const rowData = ref<ApiManagement.Properties | null>(null);

function setRowData(data: ApiManagement.Properties | null) {
  rowData.value = data;
}

function handleShowTable(row: any) {
  routerPush({
    name: routeName('management_properties_show'),
    query: {
      application: row.application
    }
  })
}

function handleAddTable() {
  openAddModal();
}

async function handleDeleteTable(application: string) {
  const { error } = await batchRemoveProperties(application)
  if (error) {
    window.$message?.error('删除失败');
    return
  }
  getTableData();
  window.$message?.success('删除成功');
}

function init() {
  getTableData();
}

// 初始化
init();
</script>

<style scoped></style>
