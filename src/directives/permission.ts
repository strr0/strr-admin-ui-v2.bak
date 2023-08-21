import type { App, Directive } from 'vue';
import { useButton } from '@/composables';

export default function setupPermissionDirective(app: App) {
  const { hasButton } = useButton()

  function updateElVisible(el: HTMLElement, button: string) {
    if (!button) {
      throw new Error(`need roles: like v-permission="'add'"`);
    }
    if (!hasButton(button)) {
      el.parentElement?.removeChild(el);
    }
  }

  const permissionDirective: Directive<HTMLElement, string> = {
    mounted(el, binding) {
      updateElVisible(el, binding.value);
    },
    beforeUpdate(el, binding) {
      updateElVisible(el, binding.value);
    }
  };

  app.directive('permission', permissionDirective);
}
