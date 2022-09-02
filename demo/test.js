const { XHttp, XHttpMethod, XHttpUtils, Axios, CODE_MSG } = require('../lib/index.js');
// const { XHttp, XHttpMethod, XHttpUtils, Axios, CODE_MSG } = require('js-xhttp');
// import { XHttp, XHttpMethod, XHttpUtils, Axios, CODE_MSG } from 'js-xhttp'; // 使用 import 导入 package.json[type] = "modules"

console.log(CODE_MSG);

let $http = XHttp.create(
  {
    timeout: 1000,
    cancelDuplicatedRequest: true,
    rejectErrorPromise: false,
    retryConfig: {
      retry: 3,
      delay: 1000
    },
    requestHandler: (config) => {
      // console.log('requestHandler', config);
    },
    responseHandler: (response) => {
      // console.log('responseHandler', response.status);
      console.log('responseHandler===>response.config', response.config);
    },
    errorHandler: (error, requestConfig) => {
      console.log('errorHandler===>requestConfig', requestConfig);
      // console.log('errorHandler', error);
      if (requestConfig.rejectErrorPromise) {
        console.log('Promise.reject(error)', requestConfig.url);
        // return Promise.reject(error);
      }
    },
    setRequestHeaders: (config) => {
      return config;
    },
    requestFinally: (requestConfig) => {
      console.log('requestFinally Hooks', requestConfig);
    }
  },
  {
    baseURL: 'http://localhost:3000'
  }
);

// $http.setAuthToken('test token');

// $http.setBaseURL('http://localhost:3000');

// console.log($http.getInstance().defaults.headers);

$http.get('/test', { start: 0, count: 20 }, {});
XHttp.get('/200', { start: 0, count: 20 }, {});
// XHttp.get('/200', { start: 0, count: 20 }, {});
// XHttp.get('/200', { start: 0, count: 20 }, {});
// XHttp.get('/200', { start: 0, count: 20 }, {});
// XHttp.get('/200', { start: 0, count: 20 }, {});
// $http.get('/200', { start: 0, count: 20 }, {});
// $http.get('/200', { start: 0, count: 20 }, {});
// $http.get('/200', { start: 0, count: 20 }, {});
// $http.get('/200', { start: 0, count: 20 }, {});
// $http.get('/200', { start: 0, count: 20 }, {});
// $http.get('/200', { start: 0, count: 20 }, {}, true);
// $http.get('/whitelist', { start: 0, count: 20 }, {}, true);
// $http.get('/200', { start: 0, count: 21 }, {});
// $http.get('/200', { start: 0, count: 21 }, {});
$http.request(XHttpMethod.GET, '/tests', { params: { start: 0, count: 20 }, rejectErrorPromise: true }, true);
$http
  .post('/login', { username: 'test', password: '123456' }, { rejectErrorPromise: true })
  .then((res) => {
    // console.log('res', res);
  })
  .catch((err) => {
    // console.log('err', err);
  })
  .finally(() => {
    console.log('finally TEST');
  });

// setTimeout(() => {
//   $http.cancelRequest('all');
//   $http.cancelWhiteListRequest('all');
// }, 0);

Axios.get('/axios')
  .then(function (response) {
    // console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
  })
  .catch((e) => {});
