<template>
  <div class="h-full overflow-hidden">
    <n-card title="角色管理" :bordered="false" class="rounded-16px shadow-sm">
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
          <!-- <column-setting v-model:columns="columns" /> -->
        </n-space>
      </n-space>
      <n-data-table :columns="columns" :data="tableData" :row-key="item => item.id" :loading="loading" />
      <role-alloc v-model:visible="allocVisible" :role-id="rowData?.id" />
      <role-edit v-model:visible="editVisible" :type="modalType" :edit-data="rowData" :refresh="getTableData" />
    </n-card>
  </div>
</template>

<script setup lang="tsx">
import { h, reactive, ref } from 'vue';
import type { Ref } from 'vue';
import { NButton, NPopconfirm, NSpace, NTag } from 'naive-ui';
import type { DataTableColumns, PaginationProps } from 'naive-ui';
import { statusLabels } from '@/constants';
import { fetchRoleList, removeRole } from '@/service';
import { useBoolean, useLoading } from '@/hooks';
import { useButton } from '@/composables'
import RoleEdit from './components/edit.vue'
import RoleAlloc from './components/alloc.vue'
import type { ModalType } from './components/edit.vue';

const { loading, startLoading, endLoading } = useLoading(false);
const { bool: editVisible, setTrue: openEditModal } = useBoolean();
const { bool: allocVisible, setTrue: openAllocModal } = useBoolean();
const { hasButton } = useButton();

const tableData = ref<ApiManagement.Role[]>([]);
function setTableData(data: ApiManagement.Role[]) {
  tableData.value = data;
}

async function getTableData() {
  startLoading();
  const { data } = await fetchRoleList({});
  if (data) {
    setTimeout(() => {
      setTableData(data);
      endLoading();
    }, 1000);
  }
}

const allocButton: (row: any) => any = hasButton('alloc') ? row => (
  <NButton size={'small'} onClick={() => handleAllocTable(row)}>
    资源
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
    key: 'status',
    title: '状态',
    align: 'center',
    render: row => {
      if (row.status) {
        const tagTypes: Record<number, NaiveUI.ThemeColor> = {
          1: 'success',
          0: 'default'
        };
        return <NTag type={tagTypes[row.status]}>{statusLabels[row.status]}</NTag>;
      }
      return <span></span>;
    }
  },
  {
    key: 'actions',
    title: '操作',
    align: 'center',
    render: row => {
      return (
        <NSpace justify={'center'}>
          {allocButton(row)}
          {editButton(row)}
          {delButton(row.id)}
        </NSpace>
      );
    }
  }
]) as Ref<DataTableColumns<ApiManagement.Role>>;

const modalType = ref<ModalType>('add');

function setModalType(type: ModalType) {
  modalType.value = type;
}

const rowData = ref<ApiManagement.Role | null>(null);

function setRowData(data: ApiManagement.Role | null) {
  rowData.value = data;
}

function handleAllocTable(row: any) {
  setRowData(row);
  openAllocModal();
}

function handleAddTable() {
  setModalType('add');
  openEditModal();
}

function handleEditTable(row: any) {
  setRowData(row);
  setModalType('edit');
  openEditModal();
}

async function handleDeleteTable(id: number) {
  const { success } = await removeRole(id)
  if (!success) {
    window.$message?.error('删除失败');
    return
  }
  getTableData()
  window.$message?.success('删除成功');
}

function init() {
  getTableData();
}

// 初始化
init();
</script>

<style scoped></style>
