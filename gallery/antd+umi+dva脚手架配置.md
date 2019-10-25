### 脚手架创建步骤

## 使用的脚手架
此脚手架为 react+antd+umi+dva 
配置教程 ：https://ant.design/docs/react/practical-projects-cn

参阅 https://www.jianshu.com/p/20f4f39d0461

## 环境搭建
Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时。 是一个 JS 执行环境，umi 基于 JS 编写，并且需要在你的开发机上运行，所以依赖于它。 http://nodejs.cn/
npm 是javascript开发必要的开发工具，可以安装很多插件 https://www.npmjs.com 使用介绍：https://www.runoob.com/nodejs/nodejs-npm.html
安装完成后，执行下面的命令确认是否安装成功。
```
node -v
npm -v
```
在国内，你可以安装cnpm获得更快速、更安全的包管理体验。使用如下命令安装：
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 安装依赖 
以下所有依赖的js都能在 npm上安装 此网址用来查找js插件： https://www.npmjs.com 

https://ant.design/docs/react/introduce-cn
antd 是阿里的开源js框架,提供了很多好用的组件 
 
https://dvajs.com/guide/
dva 是一个基于 Redux 的 轻量级数据流方案，概念来自 elm，支持 side effects、热替换、动态加载、react-native、SSR 等，已在生产环境广泛应用。

https://umijs.org/guide/
umi 则是一个可插拔的企业级 react 应用框架。umi 以路由为基础的，支持类 next.js 的约定式路由，以及各种进阶的路由功能，并以此进行功能扩展，比如支持路由级的按需加载。然后配以完善的插件体系，覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求，同时提供 Umi UI 通过可视化辅助编程（VAP）提高开发体验和研发效率。  
 



1.安装umi
```
yarn global add umi
umi -v
2.10.4
```
确保 umi 版本在 2.10.0 以上

2.创建新应用
启动 Umi UI，
```
umi ui
```
启动后， Umi UI 会自动打开浏览器，点击 创建项目，选择路径并输入 应用名， 
点击 下一步，选择 基础模板，技术栈选上 antd 和 dva，然后点击 完成。
进入到项目创建流程，等待几分钟，
创建完成后，进入到 总览，点击快捷入口 本地启动，


通过在 package.json中添加
"scripts": {
    "start": "umi dev",
    "build": "umi build"
  },
  然后控制台输入 npm run start 之类的就等效于 umi dev


## umi中访问静态资源

https://www.jianshu.com/p/c98480042c59





## js 行内样式
   <div style={{ background: '#eee', width: '200px', height: '200px'}}>
        <p style= {{color:'red', fontSize:'40px'}}>行内样式</p>
      </div>