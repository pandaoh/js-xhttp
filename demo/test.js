const { XHttp, XHttpMethod, XHttpUtils, Axios } = require('js-xhttp');
// import { XHttp, XHttpMethod, XHttpUtils, Axios as axios } from 'js-xhttp'; // 使用 import 导入 package.json[type] = "modules"

let $http = new XHttp(
  {
    timeout: 1000,
    cancelDuplicatedRequest: true,
    retryConfig: {
      retry: 3,
      delay: 1000
    },
    requestHandler: (config) => {
      console.log('requestHandler', config);
    },
    responseHandler: (response) => {
      console.log('responseHandler', response.status);
    },
    errorHandler: (error) => {
      // console.log('errorHandler', error);
    },
    setRequestHeaders: (config) => {
      return config;
    },
    requestFinally: () => {
      console.log('requestFinally Handler');
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
// $http.get('/200', { start: 0, count: 20 }, {});
// $http.get('/200', { start: 0, count: 20 }, {});
// $http.get('/200', { start: 0, count: 20 }, {});
// $http.get('/200', { start: 0, count: 20 }, {});
// $http.get('/200', { start: 0, count: 20 }, {});
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
    console.log('res', res);
  })
  .catch((err) => {
    console.log('err', err);
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
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  })
  .catch((e) => {});

// console.log(XHttpUtils.qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] })); // start=0&count=20&obj={"a":1}&arr=1&arr=2&arr=3
// console.log(XHttpUtils.qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }, str: '1', true)); // start=0&count=20&obj={"a":1}&arr=1,2,3&str=1
// console.log(XHttpUtils.qsParse('start=0&count=20&x=1&x=2&x=3')); // { '/': 'start=0&count=20&x=1&x=2&x=3', count: '20',x: [ '1', '2', '3' ] }
// console.log(XHttpUtils.qsParse('start=0&count=20&x=1&x=2&x=3', 'x')); // [ '1', '2', '3' ]
// console.log(XHttpUtils.data2Obj([{ a: 1, b: 2 }, { a: 3 }, { b: 1 }, { c: 1 }], 'a')); // { '1': { a: 1, b: 2 }, '3': { a: 3 }, undefined: { c: 1 } }
// console.log(XHttpUtils.data2Obj([{ a: 1, b: 'b1' }, { a: 3 }, { a: 2, b: 'b2' }], 'a', 'b')); // { '1': 'b1', '2': 'b2', '3': undefined }
// console.log(XHttpUtils.data2Arr([{ a: 1, b: 2 }, { a: 3 }, { b: 1 }], 'a')); // [ 1, 3 ]
// console.log(XHttpUtils.getV('', { name: { children: 123 } }, 'name', 'children')); // 123
// console.log(XHttpUtils.getV('xtest', { name: { children: 123 } }, 'name', 'x')); // xtest
// console.log(XHttpUtils.get1Var([1, 2])); // 1
// console.log(XHttpUtils.get1Var({ a: 2, b: 1 })); // 2
// console.log(XHttpUtils.mergeObj({ name: 1, oldValue: 2 }, { name: 3, value: 4 }, [])); // { name: 1, oldValue: 2, value: 4 }
// console.log(XHttpUtils.mergeObj({ name: 1, oldValue: 2 }, { name: 3, value: 4 }, ['name'], true)); // { name: 3, value: 4 }
