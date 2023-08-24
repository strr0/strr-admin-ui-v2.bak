<template>
  <div @click="handleOnClick">
    <n-input v-if="isEdit.value"
      ref="inputRef"
      v-model:value="inputValue"
      @update-value="setInputValue"
      @change="handleChange"
      @blur="handleChange"
    />
    <span v-else>{{props.value}}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import type { InputInst } from 'naive-ui'

defineOptions({ name: 'ShowOrEdit' });

interface Props {
  /** 图标名称 */
  value?: number | string;
  /** 本地svg的文件名 */
  onUpdateValue?: any;
}

const props = defineProps<Props>();

const isEdit = ref(false)
const inputRef = ref<HTMLElement & InputInst>()
const inputValue = ref(props.value)

function setInputValue(data: number | string) {
  inputValue.value = data
}

function handleOnClick () {
  isEdit.value = true
  nextTick(() => {
    inputRef.value?.focus()
  })
}

function handleChange () {
  props.onUpdateValue(inputValue.value)
  isEdit.value = false
}

</script>

<style scoped></style>
