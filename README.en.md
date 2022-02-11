[中文 README](https://github.com/pandaoh/js-xhttp)

# XHttp

## 介绍

> An HTTP tool is based on Axios that can make ajax more convenient and universal, easier to manage, and more efficient and unified.

-----

### Features

* Compatible with `axios`.
* Basic request encapsulation.
* Request, response, error interception and handling.
* Request header interception processing.
* Log output, callback (whether successful or not) Hooks when the request is completed.
* Actively cancel requests, cancel duplicate requests, and add request whitelist.
* Request result processing, permission control, and so on.
* Request to retry `axios-retry`.
* Default error handling, which can also be customized.
* Provide a method for modifying the default configuration of an instance.
* Provide common request-related method tool class `XHttpUtils`. (Singleton Class-no initialization required)

## Install

```shell
npm install js-xhttp -S
```

## Import/Require

```javascript
const { XHttp, HttpMethod, XHttpUtils, Axios } = require('js-xhttp');
import { XHttp, HttpMethod, XHttpUtils, Axios } from 'js-xhttp';
```

## Use

### Initialize an instance

```javascript
// globally initialize an instance. All configurations are as follows, all optional parameters. You can also new XHttp (); initialize directly.
const $http = new XHttp(
  {
    timeout: 1000, // timeout default: 30000
    cancelDuplicatedRequest: true, // Whether to cancel the duplicate request default: true
    retryConfig: { // Retry the configuration
      retry: 3, // retry count
      delay: 1000 // Base delay time for each retry
    },
    requestHandler: (config) => {
      console.log('requestHandler', config); // Intercept processing before request
    },
    responseHandler: (response) => {
      console.log('responseHandler', response.status); // Intercept processing after response
    },
    errorHandler: (error) => {
      console.log('errorHandler', error); // Intercept processing after error
    },
    setRequestHeaders: (config) => {
      return config; // Returns the configuration object, and the request header can be modified. For example, an object is returned, otherwise an error will be thrown.
    },
    requestFinally: () => {
      console.log('requestFinally Handler'); // The callback when the request is completed, regardless of the result.
    }
  },
  { // Compatible with axios configuration
    baseURL: 'http://localhost:3000'
  }
);

export default { XHttp: $http, XHttpMethod, axios: Axios, XHttpUtils };
// Subsequent projects can use the introduction of this file, if the project has already used axios, can also be compatible with the use.
```

### Basic request

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
// The whitelist cannot be cancelled unless cancelWhiteListRequest () is called
$http.request(XHttpMethod.GET, '/tests', { start: 0, count: 20 }, {}, true);
```

### XHttp methods

```javascript
$http.setAuthToken('test token');
$http.setBaseURL('http://localhost:3000');
console.log($http.getInstance().defaults.headers);
$http.cancelRequest('all');
$http.cancelWhiteListRequest('all white list');
/* ...and so more... */
```

### XHttpUtils methods

```javascript
XHttpUtils.qsParse('start=0&count=20&x=1&x=2&x=3', 'x'); // [1, 2, 3]
XHttpUtils.empty('');
XHttpUtils.typeof({});
XHttpUtils.deepClone({});
XHttpUtils.formatDate(new Date(), 'yyyy-mm-dd hh:ii:ss'); // Referenc php
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

### Axios

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

* [Axios Docs](https://www.axios-http.cn/docs/intro)
* [Axios Github](https://github.com/axios/axios)

## API List

[API Docs](https://github.com/pandaoh/js-xhttp/blob/master/docs/README.md)

## Others

* XHttp is based on [axios](https://github.com/axios/axios) secondary encapsulation implementation.
* For problem feedback, you can create [Issue](https://github.com/pandaoh/js-xhttp/issues) or submit [Pull Request](https://github.com/pandaoh/js-xhttp/pulls), email: [hxbpandaoh@163.com](mailto:hxbpandaoh@163.com)).
* More functions are being improved...
