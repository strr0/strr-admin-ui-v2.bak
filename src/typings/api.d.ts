// 后端接口返回的数据类型

/** 后端返回的用户权益相关类型 */
declare namespace ApiAuth {
  /** 返回的token和刷新token */
  interface Token {
    access_token: string;
    refresh_token: string;
  }
  /** 返回的用户信息 */
  type UserInfo = Auth.UserInfo;
}

/** 后端返回的路由相关类型 */
declare namespace ApiRoute {
  /** 后端返回的路由数据类型 */
  interface Route {
    /** 动态路由 */
    routes: AuthRoute.Route[];
    /** 路由首页对应的key */
    home: AuthRoute.AllRouteKey;
  }
}

declare namespace ApiManagement {
  interface User {
    id: number;
    username: string;
    nickname: string;
    email: string;
    avatar: string;
    remark: string;
    status: number;
  }
  interface Role {
    id: number;
    name: string;
    title: string;
    status: number;
  }
  interface Resource {
    id: number;
    name: string;
    path: string;
    component: string;
    title: string;
    type: string;
    icon: string;
    parentId: number;
    order: number;
    status: number;
    children?: Resource[]
  }
  interface Properties {
    id?: number;
    application: string;
    profile: string;
    label?: string;
    key?: string;
    name?: string;
    value?: string;
  }
}

declare namespace ApiServer {
  interface Server {
    predicate: string;
    metadata: string;
    route_id: string;
    filters: any;
    uri: string;
    order: number;
  }
}