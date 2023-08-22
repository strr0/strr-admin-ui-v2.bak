<template>
  <n-modal v-model:show="modalVisible" preset="card" :title="title" class="w-700px">
    <n-descriptions label-placement="left" bordered :column="2">
      <n-descriptions-item label="用户名">
        {{formModel.username}}
      </n-descriptions-item>
      <n-descriptions-item label="昵称">
        {{formModel.nickname}}
      </n-descriptions-item>
      <n-descriptions-item label="邮箱">
        {{formModel.email}}
      </n-descriptions-item>
      <n-descriptions-item label="头像">
        {{formModel.avatar}}
      </n-descriptions-item>
      <n-descriptions-item label="说明">
        {{formModel.remark}}
      </n-descriptions-item>
    </n-descriptions>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue';
import type { FormInst, FormItemRule } from 'naive-ui';

export interface Props {
  /** 弹窗可见性 */
  visible: boolean;
  /** 编辑的表格行数据 */
  showData?: ApiManagement.User | null;
}

defineOptions({ name: 'UserShow' });

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

const title = '用户详情'

type FormModel = Pick<ApiManagement.User, 'username' | 'nickname' | 'email' | 'avatar' | 'remark' | 'status'>;

const formModel = reactive<FormModel>(createDefaultFormModel());

function createDefaultFormModel(): FormModel {
  return {
    username: '',
    nickname: '',
    email: '',
    avatar: '',
    remark: '',
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
