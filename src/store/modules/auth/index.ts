import { unref, nextTick } from 'vue';
import { defineStore } from 'pinia';
import { router } from '@/router';
import { fetchLogin, fetchUserInfo, fetchToken } from '@/service';
import { useRouterPush } from '@/composables';
import { localStg } from '@/utils';
import { useTabStore } from '../tab';
import { useRouteStore } from '../route';
import { getToken, getUserInfo, clearAuthStorage } from './helpers';

interface AuthState {
  /** 用户信息 */
  userInfo: Auth.UserInfo;
  /** 用户token */
  token: string;
  /** 登录的加载状态 */
  loginLoading: boolean;
}

export const useAuthStore = defineStore('auth-store', {
  state: (): AuthState => ({
    userInfo: getUserInfo(),
    token: getToken(),
    loginLoading: false
  }),
  getters: {
    /** 是否登录 */
    isLogin(state) {
      return Boolean(state.token);
    }
  },
  actions: {
    /** 重置auth状态 */
    resetAuthStore() {
      const { toLogin } = useRouterPush(false);
      const { resetTabStore } = useTabStore();
      const { resetRouteStore } = useRouteStore();
      const route = unref(router.currentRoute);

      clearAuthStorage();
      this.$reset();

      if (route.meta.requiresAuth) {
        toLogin();
      }

      nextTick(() => {
        resetTabStore();
        resetRouteStore();
      });
    },
    /**
     * 处理登录后成功或失败的逻辑
     * @param backendToken - 返回的token
     */
    async handleActionAfterLogin() {
      const route = useRouteStore();
      const { toLoginRedirect } = useRouterPush(false);

      let loginSuccess = false

      const apiToken = await fetchToken()
      if (apiToken) {
        loginSuccess = this.loginByToken(apiToken)
      }

      if (loginSuccess) {
        await route.initAuthRoute();

        // 跳转登录后的地址
        toLoginRedirect();

        // 登录成功弹出欢迎提示
        if (route.isInitAuthRoute) {
          window.$notification?.success({
            title: '登录成功!',
            content: `欢迎回来，${this.userInfo.nickname}!`,
            duration: 3000
          });
        }

        return;
      }

      // 不成功则重置状态
      this.resetAuthStore();
    },
    /**
     * 根据token进行登录
     * @param backendToken - 返回的token
     */
    loginByToken(backendToken: ApiAuth.Token) {
      // 先把token存储到缓存中(后面接口的请求头需要token)
      const { access_token, refresh_token } = backendToken;
      localStg.set('token', access_token);
      localStg.set('refreshToken', refresh_token);
      this.token = access_token;

      return true;
    },
    /**
     * 登录
     * @param username - 用户名
     * @param password - 密码
     */
    async login(username: string, password: string) {
      this.loginLoading = true;
      const { success, data } = await fetchLogin(username, password);
      if (success) {
        // 成功后把用户信息存储到缓存中
        localStg.set('userInfo', data);
        this.userInfo = data
        await this.handleActionAfterLogin();
      }
      this.loginLoading = false;
    },
    /**
     * 更换用户权限(切换账号)
     * @param userRole
     */
    async updateUserRole(userRole: Auth.RoleType) {
      const { resetRouteStore, initAuthRoute } = useRouteStore();

      const accounts: Record<Auth.RoleType, { username: string; password: string }> = {
        super: {
          username: 'Super',
          password: 'super123'
        },
        admin: {
          username: 'Admin',
          password: 'admin123'
        },
        user: {
          username: 'User01',
          password: 'user01123'
        }
      };
      const { username, password } = accounts[userRole];
      const fetch = await fetchLogin(username, password);
      if (!fetch || !fetch.success) {
        return
      }
      const apiToken = await fetchToken()
      if (apiToken) {
        await this.loginByToken(apiToken);
        resetRouteStore();
        initAuthRoute();
      }
    }
  }
});
