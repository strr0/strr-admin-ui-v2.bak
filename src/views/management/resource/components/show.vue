<template>
  <n-modal v-model:show="modalVisible" preset="card" :title="title" class="w-700px">
    <n-descriptions label-placement="left" bordered :column="2">
      <n-descriptions-item label="名称">
        {{formModel.name}}
      </n-descriptions-item>
      <n-descriptions-item label="标题">
        {{formModel.title}}
      </n-descriptions-item>
      <n-descriptions-item label="类型">
        {{resourceTypeLables[formModel.type]}}
      </n-descriptions-item>
      <n-descriptions-item label="父节点">
        {{formModel.parentId}}
      </n-descriptions-item>
      <n-descriptions-item label="路由地址">
        {{formModel.path}}
      </n-descriptions-item>
      <n-descriptions-item label="路由组件">
        {{formModel.component}}
      </n-descriptions-item>
      <n-descriptions-item label="图标">
        {{formModel.icon}}
      </n-descriptions-item>
      <n-descriptions-item label="排序">
        {{formModel.order}}
      </n-descriptions-item>
    </n-descriptions>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue';
import type { FormInst, FormItemRule } from 'naive-ui';
import { resourceTypeLables } from '@/constants'

export interface Props {
  /** 弹窗可见性 */
  visible: boolean;
  /** 编辑的表格行数据 */
  showData?: ApiManagement.Resource | null;
}

defineOptions({ name: 'ResourceShow' });

const props = withDefaults(defineProps<Props>(), {
  showData: null
});

interface Emits {
  (e: 'update:visible', visible: boolean): void;
}

const emit = defineEmits<Emits>();

const modalVisible = computed({
  get() {
    return props.visible;
  },
  set(visible) {
    emit('update:visible', visible);
  }
});
const closeModal = () => {
  modalVisible.value = false;
};

const title = '资源详情'

type FormModel = Pick<ApiManagement.Resource, 'name' | 'title' | 'type' | 'parentId' | 'path' | 'component' | 'icon' | 'order' | 'status'>;

const formModel = reactive<FormModel>(createDefaultFormModel());

function createDefaultFormModel(): FormModel {
  return {
    name: '',
    title: '',
    type: '',
    parentId: 0,
    path: '',
    component: '',
    icon: '',
    order: 0,
    status: '0'
  };
}

function handleUpdateFormModel(model: Partial<FormModel>) {
  Object.assign(formModel, model);
}

watch(
  () => props.visible,
  newValue => {
    if (newValue && props.showData) {
      handleUpdateFormModel(props.showData);
    }
  }
);
</script>

<style scoped></style>
