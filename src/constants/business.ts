export const loginModuleLabels: Record<UnionKey.LoginModule, string> = {
  'pwd-login': '账密登录',
  'code-login': '手机验证码登录',
  register: '注册',
  'reset-pwd': '重置密码',
  'bind-wechat': '微信绑定'
};

export const userRoleLabels: Record<Auth.RoleType, string> = {
  super: '超级管理员',
  admin: '管理员',
  user: '普通用户'
};

export const userRoleOptions: Common.OptionWithKey<Auth.RoleType>[] = [
  { value: 'super', label: userRoleLabels.super },
  { value: 'admin', label: userRoleLabels.admin },
  { value: 'user', label: userRoleLabels.user }
];

export const statusLabels: Record<number, string> = {
  1: '启用',
  0: '禁用'
}

export const statusOptions: Common.OptionWithKey<number>[] = [
  { value: 1, label: statusLabels[1] },
  { value: 0, label: statusLabels[0] }
]

export const resourceTypeLables: Record<string, string> = {
  '0': '目录',
  '1': '菜单',
  '2': '按钮'
}

export const resourceTypeOptions: Common.OptionWithKey<string>[] = [
  { value: '0', label: resourceTypeLables['0'] },
  { value: '1', label: resourceTypeLables['1'] },
  { value: '2', label: resourceTypeLables['2'] }
]
