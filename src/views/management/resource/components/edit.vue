<template>
  <n-modal v-model:show="modalVisible" preset="card" :title="title" class="w-700px">
    <n-form ref="formRef" label-placement="left" :label-width="80" :model="formModel" :rules="rules">
      <n-grid :cols="24" :x-gap="18">
        <n-form-item-grid-item :span="12" label="名称" path="name">
          <n-input v-model:value="formModel.name" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="标题" path="title">
          <n-input v-model:value="formModel.title" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="类型" path="type">
          <n-select v-model:value="formModel.type" :options="resourceTypeOptions" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="路由地址" path="path">
          <n-input v-model:value="formModel.path" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="路由组件" path="component">
          <n-input v-model:value="formModel.component" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="图标" path="icon">
          <n-input v-model:value="formModel.icon" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="排序" path="order">
          <n-input-number v-model:value="formModel.order" clearable />
        </n-form-item-grid-item>
      </n-grid>
      <n-space class="w-full pt-16px" :size="24" justify="end">
        <n-button class="w-72px" @click="closeModal">取消</n-button>
        <n-button class="w-72px" type="primary" @click="handleSubmit">确定</n-button>
      </n-space>
    </n-form>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue';
import type { FormInst, FormItemRule } from 'naive-ui';
import { resourceTypeOptions } from '@/constants';
import { formRules, createRequiredFormRule } from '@/utils';

export interface Props {
  /** 弹窗可见性 */
  visible: boolean;
  /**
   * 弹窗类型
   * add: 新增
   * edit: 编辑
   */
  type?: 'add' | 'edit';
  /** 编辑的表格行数据 */
  editData?: ApiManagement.Resource | null;
}

export type ModalType = NonNullable<Props['type']>;

defineOptions({ name: 'ResourceEdit' });

const props = withDefaults(defineProps<Props>(), {
  type: 'add',
  editData: null
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

const title = computed(() => {
  const titles: Record<ModalType, string> = {
    add: '添加资源',
    edit: '编辑资源'
  };
  return titles[props.type];
});

const formRef = ref<HTMLElement & FormInst>();

type FormModel = Pick<ApiManagement.Resource, 'name' | 'title' | 'type' | 'path' | 'component'  | 'icon' | 'order' | 'status'>;

const formModel = reactive<FormModel>(createDefaultFormModel());

const rules: Record<keyof FormModel, FormItemRule | FormItemRule[]> = {
  name: createRequiredFormRule('请输入名称'),
  title: createRequiredFormRule('请输入标题')
};

function createDefaultFormModel(): FormModel {
  return {
    name: '',
    title: '',
    type: null,
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

function handleUpdateFormModelByModalType() {
  const handlers: Record<ModalType, () => void> = {
    add: () => {
      const defaultFormModel = createDefaultFormModel();
      handleUpdateFormModel(defaultFormModel);
    },
    edit: () => {
      if (props.editData) {
        handleUpdateFormModel(props.editData);
      }
    }
  };

  handlers[props.type]();
}

async function handleSubmit() {
  await formRef.value?.validate();
  window.$message?.success('新增成功!');
  closeModal();
}

watch(
  () => props.visible,
  newValue => {
    if (newValue) {
      handleUpdateFormModelByModalType();
    }
  }
);
</script>

<style scoped></style>
