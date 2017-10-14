# storm

> storm components for vue2.x

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Loading 状态管理
- null: 未开始
- 0: 开始
- 1: 成功
- -1: 失败

```
loading === null => 未开始

loading === 0 => 正在开始

loading >= 1 已完成

loaidng === 1 已成功

loading === -1 以失败
```
