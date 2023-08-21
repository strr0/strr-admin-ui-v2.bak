import { router } from '@/router';

/** 权限判断 */
export function useButton() {

  function hasButton(button: string) {
    const route = router.currentRoute.value;
    const buttons = (route.meta?.buttons ? route.meta.buttons : []) as string[]
    return buttons.includes(button);
  }

  return {
    hasButton
  };
}
