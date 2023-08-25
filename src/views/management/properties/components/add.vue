<template>
  <n-modal v-model:show="modalVisible" preset="card" :title="title" class="w-700px">
    <n-form ref="formRef" label-placement="left" :label-width="80" :model="formModel" :rules="rules">
      <n-grid :cols="24" :x-gap="18">
        <n-form-item-grid-item :span="12" label="应用名称" path="application">
          <n-input v-model:value="formModel.application" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="环境" path="profile">
          <n-input v-model:value="formModel.profile" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="24" label="配置" path="content">
          <n-input v-model:value="formModel.content" type="textarea" />
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
import { formRules, createRequiredFormRule } from '@/utils';
import { batchSaveProperties } from '@/service'

export interface Props {
  /** 弹窗可见性 */
  visible: boolean;
  refresh: any;
}

defineOptions({ name: 'PropertiesAdd' });

const props = withDefaults(defineProps<Props>(), {});

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

const title = '添加配置'

const formRef = ref<HTMLElement & FormInst>();

type FormModel = {
  application: string;
  profile: string;
  content: string;
};

const formModel = reactive<FormModel>(createDefaultFormModel());

const rules: Record<keyof FormModel, FormItemRule | FormItemRule[]> = {
  application: createRequiredFormRule('请输入应用名称'),
  content: createRequiredFormRule('请输入配置')
};

function createDefaultFormModel(): FormModel {
  return {
    application: '',
    profile: null,
    content: ''
  };
}

function handleUpdateFormModel() {
  const model = createDefaultFormModel();
  Object.assign(formModel, model);
}

async function handleSubmit() {
  await formRef.value?.validate();
  let reg = new RegExp(/(.+)=(.+)/, 'gi')
  let { application, profile, content } = formModel
  let formData: any[] = []
  content.split('\n').forEach((item: string) => {
    item.replace(reg, (match, p1, p2) => {
      formData.push({
        application: application,
        profile: profile,
        key: p1,
        value: p2
      })
      return null
    })
  })
  const { success } = await batchSaveProperties(formData)
  if (!success) {
    window.$message?.error('新增失败');
    return
  }
  window.$message?.success('新增成功');
  props.refresh();
  closeModal();
}

watch(
  () => props.visible,
  newValue => {
    if (newValue) {
      handleUpdateFormModel();
    }
  }
);
</script>

<style scoped></style>
