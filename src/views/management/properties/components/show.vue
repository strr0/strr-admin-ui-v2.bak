<template>
  <div class="h-full overflow-hidden">
    <n-card title="配置管理" :bordered="false" class="rounded-16px shadow-sm">
      <n-space class="pb-12px" justify="space-between">
        <n-space>
          <n-button type="primary" @click="handleAddTable">
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
      <n-data-table :columns="columns" :data="tableData" :row-key="item => item.id" virtual-scroll :loading="loading" />
    </n-card>
  </div>
</template>

<script setup lang="tsx">
import { h, reactive, ref } from 'vue';
import type { Ref } from 'vue';
import { NButton, NPopconfirm, NSpace, NTag } from 'naive-ui';
import type { DataTableColumns, PaginationProps } from 'naive-ui';
import { router } from '@/router';
import { fetchPropertiesList, saveProperties, updateProperties, removeProperties } from '@/service';
import { useLoading } from '@/hooks';
import { useButton } from '@/composables'
import { ShowOrEdit } from '@/components/custom/show-or-edit'

const { loading, startLoading, endLoading } = useLoading(false);
const { hasButton } = useButton();

function initQueryParam() {
  const application = router.currentRoute.value.query?.application;
  setApplication(application as string)
}

const application = ref<string | null>(null)
function setApplication(data: string) {
  application.value = data
}

const tableData = ref<ApiManagement.Properties[]>([]);
function setTableData(data: ApiManagement.Properties[]) {
  tableData.value = data;
}

async function getTableData() {
  startLoading();
  const { data } = await fetchPropertiesList({
    application: application.value
  });
  if (data) {
    setTimeout(() => {
      setTableData(data);
      endLoading();
    }, 1000);
  }
}

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
    key: 'key',
    title: '键',
    align: 'center',
    render: (row, index) => {
      return h(ShowOrEdit, {
        value: row.key,
        onUpdateValue (v: string) {
          tableData.value[index].key = v
        }
      })
    }
  },
  {
    key: 'name',
    title: '名称',
    align: 'center',
    render: (row, index) => {
      return h(ShowOrEdit, {
        value: row.name,
        onUpdateValue (v: string) {
          tableData.value[index].name = v
        }
      })
    }
  },
  {
    key: 'value',
    title: '值',
    align: 'center',
    render: (row, index) => {
      return h(ShowOrEdit, {
        value: row.value,
        onUpdateValue (v: string) {
          tableData.value[index].value = v
        }
      })
    }
  },
  {
    key: 'actions',
    title: '操作',
    align: 'center',
    render: row => {
      return (
        <NSpace justify={'center'}>
          <NButton size={'small'} onClick={() => handleSaveOrUpdate(row)}>
            保存
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
]) as Ref<DataTableColumns<ApiManagement.Properties>>;

async function handleSaveOrUpdate(row: any) {
  if (row.id) {
    const { success } = await updateProperties(row)
    if (!success) {
      window.$message?.error('更新失败');
      return
    }
    window.$message?.success('更新成功');
  } else {
    const { success } = await saveProperties(row)
    if (!success) {
      window.$message?.error('新增失败');
      return
    }
    window.$message?.success('新增成功');
  }
}

function handleAddTable() {
  tableData.value.push({ application: application.value })
}

async function handleDeleteTable(id: number) {
  const { success } = await removeProperties(id)
  if (!success) {
    window.$message?.error('删除失败');
    return
  }
  getTableData();
  window.$message?.success('删除成功');
}

function init() {
  initQueryParam();
  getTableData();
}

// 初始化
init();
</script>

<style scoped></style>
