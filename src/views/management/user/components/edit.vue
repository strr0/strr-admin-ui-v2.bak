<template>
  <n-modal v-model:show="modalVisible" preset="card" :title="title" class="w-700px">
    <n-form ref="formRef" label-placement="left" :label-width="80" :model="formModel" :rules="rules">
      <n-grid :cols="24" :x-gap="18">
        <n-form-item-grid-item :span="12" label="用户名" path="username">
          <n-input v-model:value="formModel.username" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="昵称" path="nickname">
          <n-input v-model:value="formModel.nickname" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="邮箱" path="email">
          <n-input v-model:value="formModel.email" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="头像" path="avatar">
          <n-input v-model:value="formModel.avatar" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="角色" path="roleIds">
          <n-select v-model:value="roleIds" multiple :options="roleOptions" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="说明" path="remark">
          <n-input v-model:value="formModel.remark" />
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
import type { FormInst, FormItemRule, SelectOption } from 'naive-ui';
import { formRules, createRequiredFormRule } from '@/utils';
import { fetchRoleIds, saveUser } from '@/service'

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
  editData?: ApiManagement.User | null;
  roleOptions?: SelectOption[] | null;
}

export type ModalType = NonNullable<Props['type']>;

defineOptions({ name: 'UserEdit' });

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
    add: '添加用户',
    edit: '编辑用户'
  };
  return titles[props.type];
});

const formRef = ref<HTMLElement & FormInst>();

type FormModel = Pick<ApiManagement.User, 'id' | 'username' | 'nickname' | 'email' | 'avatar' | 'remark'>;

const formModel = reactive<FormModel>(createDefaultFormModel());

const rules: Record<keyof FormModel, FormItemRule | FormItemRule[]> = {
  username: createRequiredFormRule('请输入用户名'),
  nickname: createRequiredFormRule('请输入昵称'),
  email: formRules.email
};

function createDefaultFormModel(): FormModel {
  return {
    id: null,
    username: '',
    nickname: '',
    email: '',
    avatar: '',
    remark: ''
  };
}

const roleIds = ref<number[] | null>([])
function setRoleIds(data: number[] | null) {
  roleIds.value = data;
}

async function getRoleIds(userId: number) {
  const { data } = await fetchRoleIds(userId)
  setRoleIds(data)
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
        getRoleIds(props.editData.id)
      }
    }
  };

  handlers[props.type]();
}

async function handleSubmit() {
  await formRef.value?.validate();
  let formData = {
    ...formModel,
    roleIds: roleIds
  }
  delete formData.createTime
  delete formData.updateTime
  const { error } = await saveUser(formData)
  if (error) {
    window.$message?.error('更新失败');
    return
  }
  window.$message?.success('更新成功');
  closeModal();
}

watch(
  () => props.visible,
  newValue => {
    if (newValue) {
      handleUpdateFormModelByModalType();
    } else {
      setRoleIds(null)
    }
  }
);
</script>

<style scoped></style>
