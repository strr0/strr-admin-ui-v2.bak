import type {
  AllowedComponentProps,
  ComponentCustomProperties,
  ComponentCustomProps,
  ComponentInternalInstance,
  ComponentOptionsBase,
  ComponentOptionsMixin,
  ComponentPublicInstance,
  DebuggerEvent,
  DefineComponent,
  ExtractPropTypes,
  PropType,
  RendererElement,
  RendererNode,
  ShallowUnwrapRef,
  Slot,
  VNode,
  VNodeProps,
  VNodeRef,
  WatchOptions,
  WatchStopHandle
} from 'vue';

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

declare type __VLS_TypePropsToRuntimeProps<T> = {
  [K in keyof T]-?: {} extends Pick<T, K>
    ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
      }
    : {
        type: PropType<T[K]>;
        required: true;
      };
};

declare type __VLS_WithDefaults<P, D> = {
  [K in keyof Pick<P, keyof P>]: K extends keyof D
    ? __VLS_Prettify<
        P[K] & {
          default: D[K];
        }
      >
    : P[K];
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
  new (): {
    $slots: S;
  };
};

export declare const AdminLayout: __VLS_WithTemplateSlots<
  DefineComponent<
    __VLS_WithDefaults<
      __VLS_TypePropsToRuntimeProps<LayoutProps>,
      {
        mode: string;
        scrollMode: string;
        scrollElId: string;
        commonClass: string;
        fixedTop: boolean;
        maxZIndex: number;
        headerVisible: boolean;
        headerHeight: number;
        tabVisible: boolean;
        tabHeight: number;
        siderVisible: boolean;
        siderCollapse: boolean;
        siderWidth: number;
        siderCollapsedWidth: number;
        footerVisible: boolean;
        footerHeight: number;
        rightFooter: boolean;
      }
    >,
    {},
    unknown,
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      'click-mobile-sider-mask': () => void;
    },
    string,
    VNodeProps & AllowedComponentProps & ComponentCustomProps,
    Readonly<
      ExtractPropTypes<
        __VLS_WithDefaults<
          __VLS_TypePropsToRuntimeProps<LayoutProps>,
          {
            mode: string;
            scrollMode: string;
            scrollElId: string;
            commonClass: string;
            fixedTop: boolean;
            maxZIndex: number;
            headerVisible: boolean;
            headerHeight: number;
            tabVisible: boolean;
            tabHeight: number;
            siderVisible: boolean;
            siderCollapse: boolean;
            siderWidth: number;
            siderCollapsedWidth: number;
            footerVisible: boolean;
            footerHeight: number;
            rightFooter: boolean;
          }
        >
      >
    > & {
      'onClick-mobile-sider-mask'?: (() => any) | undefined;
    },
    {
      mode: LayoutMode;
      scrollMode: ScrollMode;
      scrollElId: string;
      commonClass: string;
      fixedTop: boolean;
      maxZIndex: number;
      headerVisible: boolean;
      headerHeight: number;
      tabVisible: boolean;
      tabHeight: number;
      siderVisible: boolean;
      siderCollapse: boolean;
      siderWidth: number;
      siderCollapsedWidth: number;
      footerHeight: number;
      footerVisible: boolean;
      rightFooter: boolean;
    },
    {}
  >,
  LayoutSlots
>;

/**
 * @deprecated 请使用 PageTab
 */
export declare const AdminTab: {
  new (...args: any[]): {
    $: ComponentInternalInstance;
    $data: {};
    $props: {
      mode?: TabMode | undefined;
      commonClass?: string | undefined;
      activeColor?: string | undefined;
      closable?: boolean | undefined;
      style?: unknown;
      key?: string | number | symbol | undefined;
      ref?: VNodeRef | undefined;
      ref_for?: boolean | undefined;
      ref_key?: string | undefined;
      onVnodeBeforeMount?:
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)[]
        | undefined;
      onVnodeMounted?:
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)[]
        | undefined;
      onVnodeBeforeUpdate?:
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >,
            oldVNode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >,
            oldVNode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)[]
        | undefined;
      onVnodeUpdated?:
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >,
            oldVNode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >,
            oldVNode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)[]
        | undefined;
      onVnodeBeforeUnmount?:
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)[]
        | undefined;
      onVnodeUnmounted?:
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)[]
        | undefined;
      class?: unknown;
      readonly darkMode?: boolean | undefined;
      readonly buttonClass?: string | undefined;
      readonly chromeClass?: string | undefined;
      readonly active?: boolean | undefined;
      onClose?: (() => any) | undefined;
    };
    $attrs: {
      [x: string]: unknown;
    };
    $refs: {
      [x: string]: unknown;
    };
    $slots: Readonly<{
      [name: string]: Slot<any> | undefined;
    }>;
    $root: ComponentPublicInstance<
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      false,
      ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>,
      {},
      {}
    > | null;
    $parent: ComponentPublicInstance<
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      false,
      ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>,
      {},
      {}
    > | null;
    $emit: (event: 'close') => void;
    $el: any;
    $options: ComponentOptionsBase<
      Readonly<
        ExtractPropTypes<{
          mode: {
            type: PropType<TabMode>;
            default: string;
          };
          commonClass: {
            type: PropType<string>;
            default: string;
          };
          darkMode: {
            type: PropType<boolean>;
          };
          buttonClass: {
            type: PropType<string>;
          };
          chromeClass: {
            type: PropType<string>;
          };
          active: {
            type: PropType<boolean>;
          };
          activeColor: {
            type: PropType<string>;
            default: string;
          };
          closable: {
            type: PropType<boolean>;
            default: boolean;
          };
        }>
      > & {
        onClose?: (() => any) | undefined;
      },
      {},
      unknown,
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {
        close: () => void;
      },
      string,
      {
        mode: TabMode;
        commonClass: string;
        activeColor: string;
        closable: boolean;
      },
      {},
      string,
      {}
    > & {
      beforeCreate?: ((() => void) | (() => void)[]) | undefined;
      created?: ((() => void) | (() => void)[]) | undefined;
      beforeMount?: ((() => void) | (() => void)[]) | undefined;
      mounted?: ((() => void) | (() => void)[]) | undefined;
      beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
      updated?: ((() => void) | (() => void)[]) | undefined;
      activated?: ((() => void) | (() => void)[]) | undefined;
      deactivated?: ((() => void) | (() => void)[]) | undefined;
      beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
      beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
      destroyed?: ((() => void) | (() => void)[]) | undefined;
      unmounted?: ((() => void) | (() => void)[]) | undefined;
      renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
      renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
      errorCaptured?:
        | (
            | ((
                err: unknown,
                instance: ComponentPublicInstance<
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  false,
                  ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>,
                  {},
                  {}
                > | null,
                info: string
              ) => boolean | void)
            | ((
                err: unknown,
                instance: ComponentPublicInstance<
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  false,
                  ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>,
                  {},
                  {}
                > | null,
                info: string
              ) => boolean | void)[]
          )
        | undefined;
    };
    $forceUpdate: () => void;
    $nextTick<T = void>(this: T, fn?: ((this: T) => void) | undefined): Promise<void>;
    $watch<T extends string | ((...args: any) => any)>(
      source: T,
      cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any,
      options?: WatchOptions<boolean> | undefined
    ): WatchStopHandle;
  } & Readonly<
    ExtractPropTypes<{
      mode: {
        type: PropType<TabMode>;
        default: string;
      };
      commonClass: {
        type: PropType<string>;
        default: string;
      };
      darkMode: {
        type: PropType<boolean>;
      };
      buttonClass: {
        type: PropType<string>;
      };
      chromeClass: {
        type: PropType<string>;
      };
      active: {
        type: PropType<boolean>;
      };
      activeColor: {
        type: PropType<string>;
        default: string;
      };
      closable: {
        type: PropType<boolean>;
        default: boolean;
      };
    }>
  > & {
      onClose?: (() => any) | undefined;
    } & ShallowUnwrapRef<{}> & {} & ComponentCustomProperties & {};
  __isFragment?: undefined;
  __isTeleport?: undefined;
  __isSuspense?: undefined;
} & ComponentOptionsBase<
  Readonly<
    ExtractPropTypes<{
      mode: {
        type: PropType<TabMode>;
        default: string;
      };
      commonClass: {
        type: PropType<string>;
        default: string;
      };
      darkMode: {
        type: PropType<boolean>;
      };
      buttonClass: {
        type: PropType<string>;
      };
      chromeClass: {
        type: PropType<string>;
      };
      active: {
        type: PropType<boolean>;
      };
      activeColor: {
        type: PropType<string>;
        default: string;
      };
      closable: {
        type: PropType<boolean>;
        default: boolean;
      };
    }>
  > & {
    onClose?: (() => any) | undefined;
  },
  {},
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    close: () => void;
  },
  string,
  {
    mode: TabMode;
    commonClass: string;
    activeColor: string;
    closable: boolean;
  },
  {},
  string,
  {}
> &
  VNodeProps &
  AllowedComponentProps &
  ComponentCustomProps &
  (new () => {
    $slots: {
      default?: ((props?: Record<string, unknown> | undefined) => any) | undefined;
      prefix?: ((props?: Record<string, unknown> | undefined) => any) | undefined;
      suffix?: ((props?: Record<string, unknown> | undefined) => any) | undefined;
    };
  });

/** @deprecated 请使用PageTab 设置mode="button" */
export declare const ButtonTab: {
  new (...args: any[]): {
    $: ComponentInternalInstance;
    $data: {};
    $props: {
      readonly mode?: TabMode | undefined;
      readonly commonClass?: string | undefined;
      style?: unknown;
      key?: string | number | symbol | undefined;
      ref?: VNodeRef | undefined;
      ref_for?: boolean | undefined;
      ref_key?: string | undefined;
      onVnodeBeforeMount?:
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)[]
        | undefined;
      onVnodeMounted?:
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)[]
        | undefined;
      onVnodeBeforeUpdate?:
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >,
            oldVNode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >,
            oldVNode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)[]
        | undefined;
      onVnodeUpdated?:
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >,
            oldVNode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >,
            oldVNode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)[]
        | undefined;
      onVnodeBeforeUnmount?:
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)[]
        | undefined;
      onVnodeUnmounted?:
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)[]
        | undefined;
      class?: unknown;
      readonly darkMode?: boolean | undefined;
      readonly buttonClass?: string | undefined;
      readonly chromeClass?: string | undefined;
      readonly active?: boolean | undefined;
      readonly activeColor?: string | undefined;
      readonly closable?: boolean | undefined;
    };
    $attrs: {
      [x: string]: unknown;
    };
    $refs: {
      [x: string]: unknown;
    };
    $slots: Readonly<{
      [name: string]: Slot<any> | undefined;
    }>;
    $root: ComponentPublicInstance<
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      false,
      ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>,
      {},
      {}
    > | null;
    $parent: ComponentPublicInstance<
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      false,
      ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>,
      {},
      {}
    > | null;
    $emit: (event: string, ...args: any[]) => void;
    $el: any;
    $options: ComponentOptionsBase<
      Readonly<
        ExtractPropTypes<{
          darkMode: {
            type: PropType<boolean>;
          };
          mode: {
            type: PropType<TabMode>;
          };
          commonClass: {
            type: PropType<string>;
          };
          buttonClass: {
            type: PropType<string>;
          };
          chromeClass: {
            type: PropType<string>;
          };
          active: {
            type: PropType<boolean>;
          };
          activeColor: {
            type: PropType<string>;
          };
          closable: {
            type: PropType<boolean>;
          };
        }>
      >,
      {},
      unknown,
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {},
      string,
      {},
      {},
      string,
      {}
    > & {
      beforeCreate?: ((() => void) | (() => void)[]) | undefined;
      created?: ((() => void) | (() => void)[]) | undefined;
      beforeMount?: ((() => void) | (() => void)[]) | undefined;
      mounted?: ((() => void) | (() => void)[]) | undefined;
      beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
      updated?: ((() => void) | (() => void)[]) | undefined;
      activated?: ((() => void) | (() => void)[]) | undefined;
      deactivated?: ((() => void) | (() => void)[]) | undefined;
      beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
      beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
      destroyed?: ((() => void) | (() => void)[]) | undefined;
      unmounted?: ((() => void) | (() => void)[]) | undefined;
      renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
      renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
      errorCaptured?:
        | (
            | ((
                err: unknown,
                instance: ComponentPublicInstance<
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  false,
                  ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>,
                  {},
                  {}
                > | null,
                info: string
              ) => boolean | void)
            | ((
                err: unknown,
                instance: ComponentPublicInstance<
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  false,
                  ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>,
                  {},
                  {}
                > | null,
                info: string
              ) => boolean | void)[]
          )
        | undefined;
    };
    $forceUpdate: () => void;
    $nextTick: nextTick;
    $watch<T extends string | ((...args: any) => any)>(
      source: T,
      cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any,
      options?: WatchOptions<boolean> | undefined
    ): WatchStopHandle;
  } & Readonly<
    ExtractPropTypes<{
      darkMode: {
        type: PropType<boolean>;
      };
      mode: {
        type: PropType<TabMode>;
      };
      commonClass: {
        type: PropType<string>;
      };
      buttonClass: {
        type: PropType<string>;
      };
      chromeClass: {
        type: PropType<string>;
      };
      active: {
        type: PropType<boolean>;
      };
      activeColor: {
        type: PropType<string>;
      };
      closable: {
        type: PropType<boolean>;
      };
    }>
  > &
    ShallowUnwrapRef<{}> & {} & ComponentCustomProperties & {};
  __isFragment?: undefined;
  __isTeleport?: undefined;
  __isSuspense?: undefined;
} & ComponentOptionsBase<
  Readonly<
    ExtractPropTypes<{
      darkMode: {
        type: PropType<boolean>;
      };
      mode: {
        type: PropType<TabMode>;
      };
      commonClass: {
        type: PropType<string>;
      };
      buttonClass: {
        type: PropType<string>;
      };
      chromeClass: {
        type: PropType<string>;
      };
      active: {
        type: PropType<boolean>;
      };
      activeColor: {
        type: PropType<string>;
      };
      closable: {
        type: PropType<boolean>;
      };
    }>
  >,
  {},
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {},
  string,
  {},
  {},
  string,
  {}
> &
  VNodeProps &
  AllowedComponentProps &
  ComponentCustomProps &
  (new () => {
    $slots: {
      default?: ((props?: Record<string, unknown> | undefined) => any) | undefined;
      prefix?: ((props?: Record<string, unknown> | undefined) => any) | undefined;
      suffix?: ((props?: Record<string, unknown> | undefined) => any) | undefined;
    };
  });

/** @deprecated 请使用PageTab 设置mode="chrome" */
export declare const ChromeTab: {
  new (...args: any[]): {
    $: ComponentInternalInstance;
    $data: {};
    $props: {
      readonly mode?: TabMode | undefined;
      readonly commonClass?: string | undefined;
      style?: unknown;
      key?: string | number | symbol | undefined;
      ref?: VNodeRef | undefined;
      ref_for?: boolean | undefined;
      ref_key?: string | undefined;
      onVnodeBeforeMount?:
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)[]
        | undefined;
      onVnodeMounted?:
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)[]
        | undefined;
      onVnodeBeforeUpdate?:
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >,
            oldVNode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >,
            oldVNode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)[]
        | undefined;
      onVnodeUpdated?:
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >,
            oldVNode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >,
            oldVNode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)[]
        | undefined;
      onVnodeBeforeUnmount?:
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)[]
        | undefined;
      onVnodeUnmounted?:
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)
        | ((
            vnode: VNode<
              RendererNode,
              RendererElement,
              {
                [key: string]: any;
              }
            >
          ) => void)[]
        | undefined;
      class?: unknown;
      readonly darkMode?: boolean | undefined;
      readonly buttonClass?: string | undefined;
      readonly chromeClass?: string | undefined;
      readonly active?: boolean | undefined;
      readonly activeColor?: string | undefined;
      readonly closable?: boolean | undefined;
    };
    $attrs: {
      [x: string]: unknown;
    };
    $refs: {
      [x: string]: unknown;
    };
    $slots: Readonly<{
      [name: string]: Slot<any> | undefined;
    }>;
    $root: ComponentPublicInstance<
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      false,
      ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>,
      {},
      {}
    > | null;
    $parent: ComponentPublicInstance<
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      false,
      ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>,
      {},
      {}
    > | null;
    $emit: (event: string, ...args: any[]) => void;
    $el: any;
    $options: ComponentOptionsBase<
      Readonly<
        ExtractPropTypes<{
          darkMode: {
            type: PropType<boolean>;
          };
          mode: {
            type: PropType<TabMode>;
          };
          commonClass: {
            type: PropType<string>;
          };
          buttonClass: {
            type: PropType<string>;
          };
          chromeClass: {
            type: PropType<string>;
          };
          active: {
            type: PropType<boolean>;
          };
          activeColor: {
            type: PropType<string>;
          };
          closable: {
            type: PropType<boolean>;
          };
        }>
      >,
      {},
      unknown,
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {},
      string,
      {},
      {},
      string,
      {}
    > & {
      beforeCreate?: ((() => void) | (() => void)[]) | undefined;
      created?: ((() => void) | (() => void)[]) | undefined;
      beforeMount?: ((() => void) | (() => void)[]) | undefined;
      mounted?: ((() => void) | (() => void)[]) | undefined;
      beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
      updated?: ((() => void) | (() => void)[]) | undefined;
      activated?: ((() => void) | (() => void)[]) | undefined;
      deactivated?: ((() => void) | (() => void)[]) | undefined;
      beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
      beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
      destroyed?: ((() => void) | (() => void)[]) | undefined;
      unmounted?: ((() => void) | (() => void)[]) | undefined;
      renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
      renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
      errorCaptured?:
        | (
            | ((
                err: unknown,
                instance: ComponentPublicInstance<
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  false,
                  ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>,
                  {},
                  {}
                > | null,
                info: string
              ) => boolean | void)
            | ((
                err: unknown,
                instance: ComponentPublicInstance<
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  false,
                  ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>,
                  {},
                  {}
                > | null,
                info: string
              ) => boolean | void)[]
          )
        | undefined;
    };
    $forceUpdate: () => void;
    $nextTick: nextTick;
    $watch<T extends string | ((...args: any) => any)>(
      source: T,
      cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any,
      options?: WatchOptions<boolean> | undefined
    ): WatchStopHandle;
  } & Readonly<
    ExtractPropTypes<{
      darkMode: {
        type: PropType<boolean>;
      };
      mode: {
        type: PropType<TabMode>;
      };
      commonClass: {
        type: PropType<string>;
      };
      buttonClass: {
        type: PropType<string>;
      };
      chromeClass: {
        type: PropType<string>;
      };
      active: {
        type: PropType<boolean>;
      };
      activeColor: {
        type: PropType<string>;
      };
      closable: {
        type: PropType<boolean>;
      };
    }>
  > &
    ShallowUnwrapRef<{}> & {} & ComponentCustomProperties & {};
  __isFragment?: undefined;
  __isTeleport?: undefined;
  __isSuspense?: undefined;
} & ComponentOptionsBase<
  Readonly<
    ExtractPropTypes<{
      darkMode: {
        type: PropType<boolean>;
      };
      mode: {
        type: PropType<TabMode>;
      };
      commonClass: {
        type: PropType<string>;
      };
      buttonClass: {
        type: PropType<string>;
      };
      chromeClass: {
        type: PropType<string>;
      };
      active: {
        type: PropType<boolean>;
      };
      activeColor: {
        type: PropType<string>;
      };
      closable: {
        type: PropType<boolean>;
      };
    }>
  >,
  {},
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {},
  string,
  {},
  {},
  string,
  {}
> &
  VNodeProps &
  AllowedComponentProps &
  ComponentCustomProps &
  (new () => {
    $slots: {
      default?: ((props?: Record<string, unknown> | undefined) => any) | undefined;
      prefix?: ((props?: Record<string, unknown> | undefined) => any) | undefined;
      suffix?: ((props?: Record<string, unknown> | undefined) => any) | undefined;
    };
  });

/**
 * 主体内容配置
 */
declare interface ContentConfig {
  /**
   * 主体内容样式名
   * @default ''
   */
  contentClass?: string;
  /**
   * 主体内容是否全屏铺满
   * @description 铺满时，其他元素通过display: none进行隐藏
   */
  fullContent?: boolean;
}

/**
 * 底部配置
 */
declare interface FooterConfig {
  /**
   * 底部可见
   * @default true
   */
  footerVisible?: boolean;
  /**
   * 固定底部
   * @default true
   */
  fixedFooter?: boolean;
  /**
   * 底部样式名
   * @default ''
   */
  footerClass?: string;
  /**
   * 底部的高度
   * @default 48px
   */
  footerHeight?: number;
  /**
   * 底部是否局右
   * @description 布局为vertical时起作用
   */
  rightFooter?: boolean;
}

/**
 * 头部配置
 */
declare interface HeaderConfig {
  /**
   * 头部可见
   * @default true
   */
  headerVisible?: boolean;
  /**
   * 头部样式名
   * @default ''
   */
  headerClass?: string;
  /**
   * 头部高度
   * @default 56px
   */
  headerHeight?: number;
}

/** 最大的zIndex值 */
export declare const LAYOUT_MAX_Z_INDEX = 100;

/** 布局组件的滚动元素id默认值 */
export declare const LAYOUT_SCROLL_EL_ID = '__SCROLL_EL_ID__';

/**
 * 布局模式
 * - horizontal 水平
 * - vertical 垂直
 */
export declare type LayoutMode = 'horizontal' | 'vertical';

/**
 * 布局组件的属性
 */
export declare interface LayoutProps extends HeaderConfig, TabConfig, SiderConfig, ContentConfig, FooterConfig {
  /**
   * 布局模式
   * - {@link LayoutMode}
   */
  mode?: LayoutMode;
  /** 是否是移动端 */
  isMobile?: boolean;
  /**
   * 内容溢出时的出现滚动条的方式
   * - {@link ScrollMode}
   */
  scrollMode?: ScrollMode;
  /**
   * 滚动元素的ID
   * @description 可用于获取对应的Dom，使其滚动
   * @default 默认: const adminLayoutScrollElId = '__ADMIN_LAYOUT_SCROLL_EL_ID__'
   * @example 使用导出的默认ID
   * ```ts
   * import { adminLayoutScrollElId } from '@soybeanjs/vue-materials';
   * ```
   */
  scrollElId?: string;
  /**
   * 滚动元素的的样式class
   */
  scrollElClass?: string;
  /** 外层滚动容器的样式 */
  scrollWrapperClass?: string;
  /**
   * 通用的样式名称
   * - 可以用来配置过渡动画的样式
   * @default 'transition-all-300'
   */
  commonClass?: string;
  /**
   * 固定上面的头部和Tab页签部分
   * @default true
   */
  fixedTop?: boolean;
  /** Header,Tab,Sider和Footer的zIndex取值不超过该值 */
  maxZIndex?: number;
}

export declare const PageTab: __VLS_WithTemplateSlots<
  DefineComponent<
    __VLS_WithDefaults<
      __VLS_TypePropsToRuntimeProps<TabProps>,
      {
        mode: string;
        commonClass: string;
        activeColor: string;
        closable: boolean;
      }
    >,
    {},
    unknown,
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      close: () => void;
    },
    string,
    VNodeProps & AllowedComponentProps & ComponentCustomProps,
    Readonly<
      ExtractPropTypes<
        __VLS_WithDefaults<
          __VLS_TypePropsToRuntimeProps<TabProps>,
          {
            mode: string;
            commonClass: string;
            activeColor: string;
            closable: boolean;
          }
        >
      >
    > & {
      onClose?: (() => any) | undefined;
    },
    {
      mode: TabMode;
      commonClass: string;
      activeColor: string;
      closable: boolean;
    },
    {}
  >,
  TabSlots
>;

/**
 * @deprecated 请使用 LAYOUT_SCROLL_EL_ID
 */
export declare const SCROLL_EL_ID = '__SCROLL_EL_ID__';

/**
 * 内容溢出时的出现滚动条的方式
 * - wrapper 布局组件最外层的元素出现滚动条
 * - content 主体内容组件出现滚动条
 * @default 默认 wrapper
 */
export declare type ScrollMode = 'wrapper' | 'content';

/**
 * 侧边栏配置
 */
declare interface SiderConfig {
  /**
   * 侧边栏可见
   * @default true
   */
  siderVisible?: boolean;
  /**
   * 侧边栏样式名
   * @default ''
   */
  siderClass?: string;
  /**
   * 移动端的侧边栏样式名
   * @default ''
   */
  mobileSiderClass?: string;
  /**
   * 侧边栏折叠状态
   * @default false
   */
  siderCollapse?: boolean;
  /**
   * 侧边栏未折叠时的宽度
   * @default 220px
   */
  siderWidth?: number;
  /**
   * 侧边栏折叠时的宽度
   * @default 64px
   */
  siderCollapsedWidth?: number;
}

declare type SlotFn = (props?: Record<string, unknown>) => any;

declare type LayoutSlots = {
  /** 插槽：主体 */
  default?: SlotFn;
  /** 插槽：头部 */
  header?: SlotFn;
  /** 插槽：页签 */
  tab?: SlotFn;
  /** 插槽：侧边栏 */
  sider?: SlotFn;
  /** 插槽：底部 */
  footer?: SlotFn;
};

declare type TabSlots = {
  /** 插槽：Tab中间内容 */
  default?: SlotFn;
  /** 插槽: Tab前缀 */
  prefix?: SlotFn;
  /** 插槽: Tab后缀 */
  suffix?: SlotFn;
};

/**
 * Tab页签配置
 */
declare interface TabConfig {
  /**
   * Tab页签可见
   * @default true
   */
  tabVisible?: boolean;
  /**
   * Tab页签样式名
   * @default ''
   */
  tabClass?: string;
  /**
   * Tab页签高度
   * @default 48px
   */
  tabHeight?: number;
}

/**
 * Tab页签模式
 * - button 按钮风格
 * - chrome 浏览器标签风格
 * @default chrome
 */
export declare type TabMode = 'button' | 'chrome';

export declare interface TabProps {
  /** 暗黑模式 */
  darkMode?: boolean;
  /**
   * Tab模式
   * - {@link TabMode}
   */
  mode?: TabMode;
  /**
   * 通用的样式名称
   * - 可以用来配置过渡动画的样式
   * @default 'transition-all-300'
   */
  commonClass?: string;
  /** button模式的类名 */
  buttonClass?: string;
  /** chrome模式的类名 */
  chromeClass?: string;
  /** 是否是激活状态 */
  active?: boolean;
  /** 激活时的颜色 */
  activeColor?: string;
  /** 是否显示关闭图标 */
  closable?: boolean;
}

export {};
