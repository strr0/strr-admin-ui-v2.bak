<template>
  <div class="h-full overflow-hidden">
    <n-card title="服务管理" :bordered="false" class="rounded-16px shadow-sm">
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
      <n-data-table :columns="columns" :data="tableData" :row-key="item => item.route_id" :loading="loading" />
    </n-card>
  </div>
</template>

<script setup lang="tsx">
import { h, reactive, ref } from 'vue';
import type { Ref } from 'vue';
import { NButton, NPopconfirm, NSpace, NTag } from 'naive-ui';
import type { DataTableColumns, PaginationProps } from 'naive-ui';
import { fetchServerList } from '@/service';
import { useBoolean, useLoading } from '@/hooks';
import { useButton } from '@/composables'

const { loading, startLoading, endLoading } = useLoading(false);
const { bool: editVisible, setTrue: openEditModal } = useBoolean();
const { bool: showVisible, setTrue: openShowModal } = useBoolean();
const { hasButton } = useButton();

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

const showButton: (row: any) => any = hasButton('show') ? row => (
  <NButton size={'small'} onClick={() => handleShowTable(row)}>
    查看
  </NButton>
) : row => ''
const editButton: (row: any) => any = hasButton('edit') ? row => (
  <NButton size={'small'} onClick={() => handleEditTable(row)}>
    编辑
  </NButton>
) : row => ''
const delButton: (id: number) => any = hasButton('del') ? id => (
  <NPopconfirm onPositiveClick={() => handleDeleteTable(id)}>
    {{
      default: () => '确认删除',
      trigger: () => <NButton size={'small'}>删除</NButton>
    }}
  </NPopconfirm>
) : id => ''

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
  },
  {
    key: 'actions',
    title: '操作',
    align: 'center',
    render: row => {
      return (
        <NSpace justify={'center'}>
          {showButton(row)}
          {editButton(row)}
          {delButton(row.id)}
        </NSpace>
      );
    }
  }
]) as Ref<DataTableColumns<ApiServer.Server>>;

const rowData = ref<ApiServer.Server | null>(null);

function setRowData(data: ApiServer.Server | null) {
  rowData.value = data;
}

function handleShowTable(row: any) {
  setRowData(row);
  openShowModal();
}

function handleAddTable() {
  openEditModal();
}

function handleEditTable(row: any) {
  setRowData(row);
  openEditModal();
}

async function handleDeleteTable(id: number) {
  // const { error } = await removeUser(id)
  // if (error) {
  //   window.$message?.error('删除失败');
  //   return
  // }
  window.$message?.success('删除成功');
}

function init() {
  getTableData();
}

// 初始化
init();
</script>

<style scoped></style>
