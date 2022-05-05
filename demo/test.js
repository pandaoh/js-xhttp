const { XHttp, XHttpMethod, XHttpUtils, Axios } = require('../lib/index.js');
// const { XHttp, XHttpMethod, XHttpUtils, Axios } = require('js-xhttp');
// import { XHttp, XHttpMethod, XHttpUtils, Axios } from 'js-xhttp'; // 使用 import 导入 package.json[type] = "modules"
let $http = XHttp.create(
  {
    timeout: 1000,
    cancelDuplicatedRequest: true,
    retryConfig: {
      retry: 3,
      delay: 1000
    },
    requestHandler: (config) => {
      // console.log('requestHandler', config);
    },
    responseHandler: (response) => {
      // console.log('responseHandler', response.status);
    },
    errorHandler: (error) => {
      // console.log('errorHandler', error);
    },
    setRequestHeaders: (config) => {
      return config;
    },
    requestFinally: () => {
      console.log('requestFinally Hooks');
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
$http.request(XHttpMethod.GET, '/tests', { start: 0, count: 20 }, {}, true);
$http
  .post('/login', { username: 'test', password: '123456' })
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
