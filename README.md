[README in English](https://github.com/pandaoh/js-xhttp/blob/master/README.en.md)

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
* 提供常用请求相关方法工具类 `XHttpUtils` (单例-无需初始化-`1.4.0` 及以上版本取消-迁移至 [js-xxx JavaScript 常用函数库](https://www.npmjs.com/package/js-xxx))

## 安装

```shell
npm install js-xhttp -S
```

## 引入

```javascript
const { XHttp, XHttpMethod, XHttpUtils, Axios, CODE_MSG } = require('js-xhttp');
import { XHttp, XHttpMethod, XHttpUtils, Axios, CODE_MSG } from 'js-xhttp';
import XHttp from 'js-xhttp';
```

## 使用

### 初始化实例

```javascript
import XHttp from "js-xhttp";
import { message, notification } from "@/plugins/antd";

// 可以直接使用 XHttp，也可以全局初始化一个实例即可，所有配置如下，均为可选参数。也可以直接 XHttp.create(); 初始化。
const $http = XHttp.create(
  {
    timeout: 10000, // 超时时间 default: 30000
    cancelDuplicatedRequest: true, // 是否取消重复请求 default: true
    rejectErrorPromise: false, // [default: true] 配合 errorHandler 使用，决定是否抛出异常到页面上。
    retryConfig: {
      // 重试配置
      retry: 3, // 次数
      delay: 1000, // 每次重试的基础延迟时间
    },
    requestHandler: (config: any) => {
      console.log("requestHandler", config); // 请求前的拦截处理 可自行打印日志log
      console.log(config?.cancelRequest); // 请求取消函数
    },
    // 可以使用 formatResultAdaptor 处理返回值，或者单独请求 config 中 formatResultAdaptor 处理返回值。
    responseHandler: (response: any) => {
      // 可在此处统一处理返回数据提示
      if (response.data.code != 0) {
        message.error(response.data.msg);
      }
      console.log(response.config);
    },
    errorHandler: (error: any, requestConfig: any) => {
      console.log(requestConfig);
      // 统一错误处理
      if (!XHttp.isCancel(error) && !error.message?.includes("custom-error")) {
        notification.error({
          message: `${error.status}-${error.statusText}`,
          description: `发生错误了 ${error.data?.msg ?? error?.data?.message ?? "未知错误"}`,
        });
      }
      // return Promise.reject(error); // 是否传递错误到外层 不传递则可以免去每次请求去自定义错误处理
      console.log("errorHandler", error); // 错误处理 可自行打印日志log
      if (requestConfig.rejectErrorPromise) {
        return Promise.reject(error);
      }
    },
    setRequestHeaders: (config: any) => {
      // 设置请求头 可以添加 token 等，也可以通过 $http.setAuthToken 来处理
      return config; // 返回配置对象，可修改请求头。必须返回一个请求头对象，否则会抛出错误。
    },
    requestFinally: (requestConfig: any) => {
      console.log("requestFinally Hooks", requestConfig); // 请求完成时的回调，无论结果如何。
    },
  },
  // axios 配置
  {
    baseURL: import.meta.env.VITE_REQUEST_BASE_URL, // 根据环境添加 baseURL
    validateStatus: (status: number) => {
      // XHttp 默认的 status 校验规则是全部返回 true
      // 返回 true 则表示成功(resolve)，否则表示失败(reject)。 可以根据 status 自定义
      return status >= 200 && status < 300;
    },
  }
);

export default $http;
// 也可直接导出常用的方法 get post put patch delete request 等，也可以导出原 axios 对象、工具类等等。
```

### 基础请求

```javascript
XHttp.get('/tests', { start: 0, count: 20 }, {});
XHttp
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
XHttp.get('/test', { start: 0, count: 20 }, {}, true); 
// 白名单不可取消 除非调用 cancelWhiteListRequest()
XHttp.request(XHttpMethod.GET, '/tests', { params: { start: 0, count: 20 }, rejectErrorPromise: true }, {}, true);

$http.get('/tests', { start: 0, count: 20 }, {});
$http
  .post(
  '/login',
  { username: 'test', password: '123456' },
  { headers: { 'Content-Type': 'application/json' }, rejectErrorPromise: true }
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
$http.request(XHttpMethod.GET, '/tests', { params: { start: 0, count: 20 } }, {}, true);
```

### 相关方法

```javascript
$http.setAuthToken('test token');
$http.setBaseURL('http://localhost:666');
console.log($http.getInstance().defaults.headers);
$http.cancelRequest('all');
$http.cancelWhiteListRequest('all white list');

XHttp.setAuthToken('test token');
XHttp.setBaseURL('http://localhost:666');
console.log(XHttp.getInstance().defaults.headers);
XHttp.cancelRequest('all');
XHttp.cancelWhiteListRequest('all white list');
/* ...... */
```

### 工具类方法

```javascript
XHttpUtils.typeof({}); // 'object'
/* ...... */
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
/* ...... */
```

* [Axios 参考文档](https://www.axios-http.cn/docs/intro)
* [Axios Github](https://github.com/axios/axios)

## 全部 API 列表

[API Docs](https://github.com/pandaoh/js-xhttp/blob/master/docs/README.md)

## 其他

* 此工具类基于 [axios](https://github.com/axios/axios) 二次封装实现
* 问题反馈可以建 [Issue](https://github.com/pandaoh/js-xhttp/issues)，或者提交 [Pull Request](https://github.com/pandaoh/js-xhttp/pulls)，邮箱：[hxbpandaoh@163.com](mailto:hxbpandaoh@163.com)。
* [Blog](http://a.biugle.cn)
* Leo He
* 更多功能完善中...
