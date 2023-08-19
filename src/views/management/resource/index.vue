<template>
  <div class="h-full overflow-hidden">
    <n-card title="资源管理" :bordered="false" class="rounded-16px shadow-sm">
      <n-data-table :columns="columns" :data="tableData" :row-key="item => item.id" :loading="loading" />
    </n-card>
  </div>
</template>

<script setup lang="tsx">
import { h, reactive, ref } from 'vue';
import type { Ref } from 'vue';
import { NButton, NPopconfirm, NSpace, NTag } from 'naive-ui';
import type { DataTableColumns, PaginationProps } from 'naive-ui';
import { fetchResourceList } from '@/service';
import { useBoolean, useLoading } from '@/hooks';

const { loading, startLoading, endLoading } = useLoading(false);
const { bool: visible, setTrue: openModal } = useBoolean();

const tableData = ref<ApiManagement.Resource[]>([]);
function setTableData(data: ApiManagement.Resource[]) {
  tableData.value = data;
}

async function getTableData() {
  startLoading();
  const { data } = await fetchResourceList({});
  if (data) {
    setTimeout(() => {
      setTableData(data);
      endLoading();
    }, 1000);
  }
}

const columns: Ref<DataTableColumns<ApiManagement.Resource>> = ref([
  {
    type: 'selection',
    align: 'center'
  },
  {
    key: 'id',
    title: '序号',
    align: 'center'
  },
  {
    key: 'name',
    title: '路由名称',
    align: 'center'
  },
  {
    key: 'path',
    title: '路由地址',
    align: 'center'
  },
  {
    key: 'component',
    title: '路由组件',
    align: 'center'
  },
  {
    key: 'title',
    title: '标题',
    align: 'center'
  },
  {
    key: 'type',
    title: '类型',
    align: 'center'
  },
  {
    key: 'icon',
    title: '图标',
    align: 'center'
  },
  {
    key: 'actions',
    title: '操作',
    align: 'center',
    render: row => {
      return (
        <NSpace justify={'center'}>
          <NButton size={'small'} onClick={() => handleEditTable(row.id)}>
            编辑
          </NButton>
          <NPopconfirm onPositiveClick={() => handleDeleteTable(row.id)}>
            {{
              default: () => '确认删除',
              trigger: () => <NButton size={'small'}>删除</NButton>
            }}
          </NPopconfirm>
        </NSpace>
      );
    }
  }
]) as Ref<DataTableColumns<ApiManagement.Resource>>;

const modalType = ref<ModalType>('add');

function setModalType(type: ModalType) {
  modalType.value = type;
}

const editData = ref<ApiManagement.Resource | null>(null);

function setEditData(data: ApiManagement.Resource | null) {
  editData.value = data;
}

function handleEditTable(rowId: string) {
  const findItem = tableData.value.find(item => item.id === rowId);
  if (findItem) {
    setEditData(findItem);
  }
  setModalType('edit');
  openModal();
}

function handleDeleteTable(rowId: string) {
  window.$message?.info(`点击了删除，rowId为${rowId}`);
}

function init() {
  getTableData();
}

// 初始化
init();
</script>

<style scoped></style>
