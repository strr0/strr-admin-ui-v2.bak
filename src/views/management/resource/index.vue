<template>
  <div class="h-full overflow-hidden">
    <n-card title="资源管理" :bordered="false" class="rounded-16px shadow-sm">
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
      <resource-show v-model:visible="showVisible" :show-data="rowData" />
      <resource-edit v-model:visible="editVisible" :type="modalType" :edit-data="rowData" :resource-options="resourceOptions" />
    </n-card>
  </div>
</template>

<script setup lang="tsx">
import { h, reactive, ref } from 'vue';
import type { Ref } from 'vue';
import { NButton, NPopconfirm, NSpace, NTag } from 'naive-ui';
import type { DataTableColumns, PaginationProps, TreeSelectOption } from 'naive-ui';
import { resourceTypeLables } from '@/constants';
import { fetchResourceList, removeResource } from '@/service';
import { useBoolean, useLoading } from '@/hooks';
import { useButton } from '@/composables'
import ResourceEdit from './components/edit.vue'
import ResourceShow from './components/show.vue'
import type { ModalType } from './components/edit.vue';

const { loading, startLoading, endLoading } = useLoading(false);
const { bool: editVisible, setTrue: openEditModal } = useBoolean();
const { bool: showVisible, setTrue: openShowModal } = useBoolean();
const { hasButton } = useButton();

const tableData = ref<ApiManagement.Resource[]>([]);
const resourceOptions = ref<TreeSelectOption[]>([])
function setTableData(data: ApiManagement.Resource[]) {
  tableData.value = data;
  resourceOptions.value = formatTreeOptions(data)
}

function formatTreeOptions(data: ApiManagement.Resource[]): TreeSelectOption[] {
  return data.map(item => {
    return {
      key: item.id,
      label: item.title,
      children: item.children ? formatTreeOptions(item.children) : null
    } as TreeSelectOption
  })
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
    align: 'center',
    render: row => {
      if (row.type) {
        return h('span', resourceTypeLables[row.type]);
      }
      return <span></span>;
    }
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
          {showButton(row)}
          {editButton(row)}
          {delButton(row.id)}
        </NSpace>
      );
    }
  }
]) as Ref<DataTableColumns<ApiManagement.Resource>>;

const modalType = ref<ModalType>('add');

function setModalType(type: ModalType) {
  modalType.value = type;
}

const rowData = ref<ApiManagement.Resource | null>(null);

function setRowData(data: ApiManagement.Resource | null) {
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
  const { error } = await removeResource(id)
  if (error) {
    window.$message?.error('删除失败');
    return
  }
  window.$message?.success('删除成功');
}

function init() {
  getTableData();
}

// 初始化
init();
</script>

<style scoped></style>
