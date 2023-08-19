<template>
  <div class="h-full overflow-hidden">
    <n-card title="角色管理" :bordered="false" class="rounded-16px shadow-sm">
      <n-data-table :columns="columns" :data="tableData" :loading="loading" :pagination="pagination" />
    </n-card>
  </div>
</template>

<script setup lang="tsx">
import { h, reactive, ref } from 'vue';
import type { Ref } from 'vue';
import { NButton, NPopconfirm, NSpace, NTag } from 'naive-ui';
import type { DataTableColumns, PaginationProps } from 'naive-ui';
import { fetchRoleList } from '@/service';
import { useBoolean, useLoading } from '@/hooks';

const { loading, startLoading, endLoading } = useLoading(false);
const { bool: visible, setTrue: openModal } = useBoolean();

const tableData = ref<ApiManagement.Role[]>([]);
function setTableData(data: ApiManagement.Role[]) {
  tableData.value = data;
}

async function getTableData() {
  startLoading();
  const { data } = await fetchRoleList({});
  if (data) {
    setTimeout(() => {
      setTableData(data.content);
      endLoading();
    }, 1000);
  }
}

const columns: Ref<DataTableColumns<ApiManagement.Role>> = ref([
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
    key: 'name',
    title: '角色名',
    align: 'center'
  },
  {
    key: 'title',
    title: '标题',
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
]) as Ref<DataTableColumns<ApiManagement.Role>>;

const modalType = ref<ModalType>('add');

function setModalType(type: ModalType) {
  modalType.value = type;
}

const editData = ref<ApiManagement.Role | null>(null);

function setEditData(data: ApiManagement.Role | null) {
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

const pagination: PaginationProps = reactive({
  page: 1,
  pageSize: 10,
  showSizePicker: true,
  pageSizes: [10, 15, 20, 25, 30],
  onChange: (page: number) => {
    pagination.page = page;
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
  }
});

function init() {
  getTableData();
}

// 初始化
init();
</script>

<style scoped></style>
