<template>
  <div class="h-full overflow-hidden">
    <n-card title="用户管理" :bordered="false" class="rounded-16px shadow-sm">
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
      <n-data-table remote :columns="columns" :data="tableData" :row-key="item => item.id" :loading="loading" :pagination="pagination" />
      <user-show v-model:visible="showVisible" :show-data="rowData" :role-labels="roleLabels" />
      <user-edit v-model:visible="editVisible" :type="modalType" :edit-data="rowData" :role-options="roleOptions" :refresh="getTableData" />
    </n-card>
  </div>
</template>

<script setup lang="tsx">
import { h, reactive, ref } from 'vue';
import type { Ref } from 'vue';
import { NButton, NPopconfirm, NSpace, NTag } from 'naive-ui';
import type { DataTableColumns, PaginationProps, SelectOption } from 'naive-ui';
import { statusLabels } from '@/constants';
import { fetchUserList, fetchRoleList, removeUser } from '@/service';
import { useBoolean, useLoading } from '@/hooks';
import { useButton } from '@/composables'
import UserEdit from './components/edit.vue';
import UserShow from './components/show.vue';
import type { ModalType } from './components/edit.vue';

const { loading, startLoading, endLoading } = useLoading(false);
const { bool: editVisible, setTrue: openEditModal } = useBoolean();
const { bool: showVisible, setTrue: openShowModal } = useBoolean();
const { hasButton } = useButton();

const tableData = ref<ApiManagement.User[]>([]);
function setTableData(data: ApiManagement.User[]) {
  tableData.value = data;
}

async function getTableData() {
  startLoading();
  const data = await fetchUserList({
    page: pagination.page,
    size: pagination.pageSize
  });
  if (data) {
    setTimeout(() => {
      setTableData(data.content);
      pagination.itemCount = data.total
      endLoading();
    }, 1000);
  }
}

const roleLabels = ref<Record<number, string>>({});
const roleOptions = ref<SelectOption[]>([]);
function setRoleOptions(data: ApiManagement.Role[]) {
  let lables: Record<number, string> = {}
  data.forEach(item => {
    lables[item.id] = item.title
  })
  roleLabels.value = lables;
  roleOptions.value = data.map(item => {
    return {
      value: item.id,
      label: item.title
    } as SelectOption
  })
}

async function getRoleOptions() {
  const { data } = await fetchRoleList({});
  if (data) {
    setTimeout(() => {
      setRoleOptions(data);
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

const columns: Ref<DataTableColumns<ApiManagement.User>> = ref([
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
    key: 'username',
    title: '用户名',
    align: 'center'
  },
  {
    key: 'nickname',
    title: '昵称',
    align: 'center'
  },
  {
    key: 'email',
    title: '邮箱',
    align: 'center'
  },
  {
    key: 'avatar',
    title: '头像',
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
          {showButton(row)}
          {editButton(row)}
          {delButton(row.id)}
        </NSpace>
      );
    }
  }
]) as Ref<DataTableColumns<ApiManagement.User>>;

const modalType = ref<ModalType>('add');

function setModalType(type: ModalType) {
  modalType.value = type;
}

const rowData = ref<ApiManagement.User | null>(null);

function setRowData(data: ApiManagement.User | null) {
  rowData.value = data;
}

function handleShowTable(row: any) {
  setRowData(row);
  openShowModal();
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
  const { success } = await removeUser(id)
  if (!success) {
    window.$message?.error('删除失败');
    return
  }
  getTableData();
  window.$message?.success('删除成功');
}

const pagination: PaginationProps = reactive({
  page: 1,
  pageSize: 10,
  showSizePicker: true,
  pageSizes: [10, 15, 20, 25, 30],
  onChange: (page: number) => {
    pagination.page = page;
    getTableData();
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
    getTableData();
  }
});

function init() {
  getTableData();
  getRoleOptions();
}

// 初始化
init();
</script>

<style scoped></style>
