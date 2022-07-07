import { defineConfig } from 'umi';

export default defineConfig({
  devServer: {
    port: 11000,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [{ path: '/', component: '@/pages/Home' }],
    },
  ],

  fastRefresh: {},
});
