// ref: https://umijs.org/config/
// 这里的内容可以全部转移到config/config.js
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/products/products',
          component: './products/products',
        },
        {
          path: '/puzzlecards',
          component: './puzzlecards',
        },
        {
          path: '/',
          component: '../pages/index',
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'gallery',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  //下面的配置是打包相关的配置 不配置打包出来有问题
  history: 'hash',
  base: './',
  publicPath: './',
};
