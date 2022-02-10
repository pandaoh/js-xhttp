[README in English](https://github.com/pandaoh/web_ajax_xhttp/blob/master/README.en.md)

# XHttp

## 介绍

> XHttp 是一个基于 `axios` 二次封装的 HTTP 请求工具，可以让你在项目中使用 `http` 请求时更加简单，更加通用灵活，更加高效统一，且易于全局管理。

-----

### 功能

* 兼容 `axios`
* 基础请求封装使用
* 请求、响应、错误拦截与处理
* 请求头拦截处理
* 日志输出，请求完成时的回调(无论是否成功) Hooks。
* 主动取消请求、取消重复请求、添加请求白名单
* 请求结果处理，可进行权限管控等等。
* 请求重试 `axios-retry`
* 默认错误处理，也可自定义。
* 提供实例默认配置修改方法
* 提供常用请求相关方法工具类 `XHttpUtils` (单例-无需初始化)

## 安装

```shell
npm install js-xhttp -S
```

## 引入

```javascript
const { XHttp, HttpMethod, XHttpUtils, Axios } = require('js-xhttp');
import { XHttp, HttpMethod, XHttpUtils, Axios } from 'js-xhttp';
```

## 使用

### 初始化实例

```javascript
// 全局初始化一个实例即可，所有配置如下，均为可选参数。也可以直接 new XHttp(); 初始化。
const $http = new XHttp(
  {
    timeout: 1000, // 超时时间 default: 30000
    cancelDuplicatedRequest: true, // 是否取消重复请求 default: true
    retryConfig: { // 重试配置
      retry: 3, // 次数
      delay: 1000 // 每次重试的基础延迟时间
    },
    requestHandler: (config) => {
      console.log('requestHandler', config); // 请求前的拦截处理 可自行打印日志log
    },
    responseHandler: (response) => {
      console.log('responseHandler', response.status); // 响应后的拦截处理 可自行打印日志log
    },
    errorHandler: (error) => {
      console.log('errorHandler', error); // 错误处理 可自行打印日志log
    },
    setRequestHeaders: (config) => {
      return config; // 返回配置对象，可修改请求头。比如返回一个对象，否则会抛出错误。
    },
    requestFinally: () => {
      console.log('requestFinally Handler'); // 请求完成时的回调，无论结果如何。
    }
  },
  { // 兼容 axios 配置
    baseURL: 'http://localhost:3000'
  }
);

export default { XHttp: $http, XHttpMethod, axios: Axios, XHttpUtils };
// 后续项目使用引入此文件即可，若项目已经使用了 axios，也可以兼容使用。
```

### 基础请求

```javascript
$http.get('/tests', { start: 0, count: 20 }, {});
$http
  .post(
  '/login',
  { username: 'test', password: '123456' },
  { headers: { 'Content-Type': 'application/json' }}
  ).then((res) => {
    console.log('res', res);
  })
  .catch((err) => {
    console.log('err', err);
  })
  .finally(() => {
    console.log('finally TEST');
  });
$http.get('/test', { start: 0, count: 20 }, {}, true); 
// 白名单不可取消 除非调用 cancelWhiteListRequest()
$http.request(XHttpMethod.GET, '/tests', { start: 0, count: 20 }, {}, true);
```

### 相关方法

```javascript
$http.setAuthToken('test token');
$http.setBaseURL('http://localhost:3000');
console.log($http.getInstance().defaults.headers);
$http.cancelRequest('all');
$http.cancelWhiteListRequest('all white list');
/* ...and so more... */
```

### 工具类方法

```javascript
XHttpUtils.qsParse('start=0&count=20&x=1&x=2&x=3', 'x'); // [1, 2, 3]
XHttpUtils.empty('');
XHttpUtils.typeof({});
XHttpUtils.deepClone({});
XHttpUtils.formatDate(new Date(), 'yyyy-mm-dd hh:ii:ss'); // 参考 php
/* ...and so more... */
```

### XHttpMethod

```javascript
console.log(XHttpMethod);
// {
//   GET: 'GET',
//   POST: 'POST',
//   PUT: 'PUT',
//   DELETE: 'DELETE',
//   PATCH: 'PATCH',
//   OPTIONS: 'OPTIONS'
// }
```

### 原始 Axios 使用

```javascript
Axios.get('/axios')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  })
  .catch((e) => {});
/* ...and so more... */
```

* [Axios 参考文档](https://www.axios-http.cn/docs/intro)
* [Axios Github](https://github.com/axios/axios)

## 全部 API 列表

[API Docs](https://github.com/pandaoh/web_ajax_xhttp/blob/master/docs/README.md)

## 其他

* 此工具类基于 [axios](https://github.com/axios/axios) 二次封装实现
* 问题反馈可以建 [Issue](https://github.com/pandaoh/web_ajax_xhttp/issues)，或者提交 [Pull Request](https://github.com/pandaoh/web_ajax_xhttp/pulls)，邮箱：[hxbpandaoh@163.com](mailto:hxbpandaoh@163.com)
* 更多功能完善中...
