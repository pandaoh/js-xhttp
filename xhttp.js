var xhttp=function(t,e,n){"use strict";function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=i(e),r=i(n),s=function(){return s=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},s.apply(this,arguments)};function u(t,e,n,i){return new(n||(n=Promise))((function(o,r){function s(t){try{a(i.next(t))}catch(t){r(t)}}function u(t){try{a(i.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,u)}a((i=i.apply(t,e||[])).next())}))}function a(t,e){var n,i,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function u(r){return function(u){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,u])}}}function c(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,o,r=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(t){o={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}var l,d=o.default;t.XHttpMethod=void 0,(l=t.XHttpMethod||(t.XHttpMethod={})).GET="GET",l.POST="POST",l.PUT="PUT",l.DELETE="DELETE",l.PATCH="PATCH",l.OPTIONS="OPTIONS",l.get="GET",l.post="POST",l.put="PUT",l.delete="DELETE",l.patch="PATCH",l.options="OPTIONS";var f=function(){function t(){}return t.getInstance=function(){return this.instance||(this.instance=new t),this.instance},t.typeof=function(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()},t}(),p=function(){function e(t,e){var n,i,r,u,a,c,l,d;return void 0===e&&(e={}),this.timeout=3e4,this._cancelTokens=[],this._whiteListCancelTokens=[],this._cancelDuplicatedRequest=null===(n=null==t?void 0:t.cancelDuplicatedRequest)||void 0===n||n,this._cancelDuplicatedRequest&&(this._pendingRequests=new Map),this._retryConfig=null!==(i=null==t?void 0:t.retryConfig)&&void 0!==i?i:null,this._requestHandler=null!==(r=null==t?void 0:t.requestHandler)&&void 0!==r?r:void 0,this._responseHandler=null!==(u=null==t?void 0:t.responseHandler)&&void 0!==u?u:void 0,this._errorHandler=null!==(a=null==t?void 0:t.errorHandler)&&void 0!==a?a:void 0,this._requestFinally=null!==(c=null==t?void 0:t.requestFinally)&&void 0!==c?c:void 0,this._setRequestHeaders=null!==(l=null==t?void 0:t.setRequestHeaders)&&void 0!==l?l:void 0,this._defaultAxiosConfig=s({timeout:null!==(d=null==t?void 0:t.timeout)&&void 0!==d?d:this.timeout,validateStatus:function(t){return!0}},e),this.instance=o.default.create(this._defaultAxiosConfig),this._initAxiosRetry(),this._initInterceptors(),this}return e.prototype._initAxiosRetry=function(){var t=this;this._retryConfig&&r.default(this.instance,{retries:this._retryConfig.retry,retryDelay:function(e){return e*t._retryConfig.delay},shouldResetTimeout:!0,retryCondition:function(t){var e,n,i;return!((null===(e=t.message)||void 0===e?void 0:e.includes("not-retry"))||o.default.isCancel(t)||(null===(n=t.message)||void 0===n?void 0:n.includes("custom-error")))&&(!!r.default.isNetworkOrIdempotentRequestError(t)||(!t.code||(!!["ECONNRESET","ETIMEDOUT"].includes(t.code)||!("ECONNABORTED"!=t.code||!(null===(i=t.message)||void 0===i?void 0:i.includes("timeout"))))))}})},e.prototype._initInterceptors=function(){var t=this;this.instance.interceptors.request.use((function(e){var n;if(t._cancelTokens.length>100&&(t._cancelTokens=[]),t._whiteListCancelTokens.length>100&&(t._whiteListCancelTokens=[]),t._cancelDuplicatedRequest&&!e.cancelToken&&(t._removePendingRequest(e),t._addPendingRequest(e)),"object"===f.typeof(e)&&null!=t._setRequestHeaders&&(e=t._setRequestHeaders.call(t,e),"object"!==f.typeof(e)))throw new Error("XHttp Error: [setRequestHeaders] must be a function, and return a complete object value(RequestConfig) without missing original attributes!");return null===(n=t._requestHandler)||void 0===n||n.call(t,e),e}),(function(e){return o.default.isCancel(e)||(t._cancelDuplicatedRequest&&t._pendingRequests.clear(),t._whiteListCancelTokens=[],t._cancelTokens=[]),Promise.reject(e)})),this.instance.interceptors.response.use((function(e){var n,i;return t._cancelDuplicatedRequest&&!(null===(n=e.config)||void 0===n?void 0:n.cancelToken)&&t._removePendingRequest(e),null===(i=t._responseHandler)||void 0===i||i.call(t,e),{status:null==e?void 0:e.status,statusText:null==e?void 0:e.statusText,data:null==e?void 0:e.data}}),(function(e){var n;o.default.isCancel(e)||(t._cancelDuplicatedRequest&&t._pendingRequests.clear(),t._whiteListCancelTokens=[],t._cancelTokens=[]);var i=null!==(n=e.response)&&void 0!==n?n:e;return Promise.reject(i)}))},e.prototype._addPendingRequest=function(t){var e=this,n=[t.method,t.url,JSON.stringify(t.params),JSON.stringify(t.data)].join("&");t.cancelToken=new o.default.CancelToken((function(i){e._pendingRequests.has(n)||(e._pendingRequests.set(n,i),t.cancelRequest=i)}))},e.prototype._removePendingRequest=function(t){var e=[t.method,t.url,JSON.stringify(t.params),JSON.stringify(t.data)].join("&");this._pendingRequests.has(e)&&(this._pendingRequests.get(e)(e),this._pendingRequests.delete(e))},e.prototype.request=function(t,e,n,i){return void 0===n&&(n={}),void 0===i&&(i=!1),u(this,void 0,void 0,(function(){var r,u,c,l=this;return a(this,(function(a){return r=s(s({},n),{url:e,method:t}),this._cancelDuplicatedRequest&&!i||(u=o.default.CancelToken.source(),c=u.token,i?this._whiteListCancelTokens.push(u):this._cancelTokens.push(u),r.cancelToken=c,r.cancelRequest=u.cancel),[2,this.instance.request(r).then((function(t){return t.data})).catch((function(t){var e;return null===(e=l._errorHandler)||void 0===e?void 0:e.call(l,t)})).finally((function(){var t;null===(t=l._requestFinally)||void 0===t||t.call(l)}))]}))}))},e.prototype.get=function(e,n,i,o){return void 0===n&&(n={}),void 0===i&&(i={}),void 0===o&&(o=!1),u(this,void 0,void 0,(function(){return a(this,(function(r){return[2,this.request(t.XHttpMethod.GET,e,s(s({},i),{params:n}),o)]}))}))},e.prototype.post=function(e,n,i,o){return void 0===n&&(n={}),void 0===i&&(i={}),void 0===o&&(o=!1),u(this,void 0,void 0,(function(){return a(this,(function(r){return[2,this.request(t.XHttpMethod.POST,e,s(s({},i),{data:n}),o)]}))}))},e.prototype.put=function(e,n,i,o){return void 0===n&&(n={}),void 0===i&&(i={}),void 0===o&&(o=!1),u(this,void 0,void 0,(function(){return a(this,(function(r){return[2,this.request(t.XHttpMethod.PUT,e,s(s({},i),{data:n}),o)]}))}))},e.prototype.patch=function(e,n,i,o){return void 0===n&&(n={}),void 0===i&&(i={}),void 0===o&&(o=!1),u(this,void 0,void 0,(function(){return a(this,(function(r){return[2,this.request(t.XHttpMethod.PATCH,e,s(s({},i),{data:n}),o)]}))}))},e.prototype.delete=function(e,n,i,o){return void 0===n&&(n={}),void 0===i&&(i={}),void 0===o&&(o=!1),u(this,void 0,void 0,(function(){return a(this,(function(r){return[2,this.request(t.XHttpMethod.DELETE,e,s(s({},i),{data:n}),o)]}))}))},e.prototype.postForm=function(e,n,i,o,r,c){return void 0===n&&(n={}),void 0===i&&(i=!1),void 0===o&&(o=!1),void 0===r&&(r={}),void 0===c&&(c=!1),u(this,void 0,void 0,(function(){var u;return a(this,(function(a){return u=new FormData,Object.keys(n).forEach((function(t){if(Array.isArray(n[t]))for(var e in n[t])i?u.append(o?"".concat(t,"[]"):"".concat(t,"[").concat(e,"]"),n[t][e]):u.append(t,n[t][e]);else u.append(t,"object"==f.typeof(n[t])?JSON.stringify(n[t]):n[t])})),[2,this.request(t.XHttpMethod.POST,e,s({data:u,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8;"}},r),c)]}))}))},e.prototype.postFile=function(e,n,i,o,r,c,l){return void 0===i&&(i="file"),void 0===o&&(o=!1),void 0===r&&(r=!1),void 0===c&&(c={}),void 0===l&&(l=!1),u(this,void 0,void 0,(function(){var u;return a(this,(function(a){return u=new FormData,Array.isArray(n)?n.forEach((function(t,e){o?u.append(r?"".concat(i,"[]"):"".concat(i,"[").concat(e,"]"),t):u.append(i,t)})):u.append(i,n),[2,this.request(t.XHttpMethod.POST,e,s({data:u,headers:{"Content-Type":"multipart/form-data"}},c),l)]}))}))},e.prototype.cancelRequest=function(t){var e,n;if(this._cancelDuplicatedRequest){try{for(var i=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(this._pendingRequests),o=i.next();!o.done;o=i.next()){var r=c(o.value,2),s=r[0];(0,r[1])(t?"".concat(t,": ").concat(s):s)}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}this._pendingRequests.clear()}else this._cancelTokens.forEach((function(e){null==e||e.cancel(t)})),this._cancelTokens=[];return this},e.prototype.cancelWhiteListRequest=function(t){return this._whiteListCancelTokens.forEach((function(e){null==e||e.cancel(t)})),this._whiteListCancelTokens=[],this},e.prototype.getCancelToken=function(){return o.default.CancelToken.source()},e.prototype.getBaseURL=function(){return this.instance.defaults.baseURL},e.prototype.setBaseURL=function(t){return this.instance.defaults.baseURL=t,this},e.prototype.getHeaders=function(){return this.instance.defaults.headers},e.prototype.setHeaders=function(t){return this.instance.defaults.headers=t,this},e.prototype.getHeader=function(t){return this.instance.defaults.headers.common[t]},e.prototype.setHeader=function(t,e){return e?this.instance.defaults.headers.common[t]=e:delete this.instance.defaults.headers.common[t],this},e.prototype.setRequestTimeout=function(t){return this.instance.defaults.timeout=t,this},e.prototype.getAuthToken=function(){var t=this.getHeader("Authorization");return null==t?null:t},e.prototype.setAuthToken=function(t){return this.setHeader("Authorization",t),this},e.prototype.isCancel=function(t){return o.default.isCancel(t)},e.prototype.getInstance=function(){return this.instance},e.prototype.create=function(t,n){return void 0===n&&(n={}),new e(t,n)},e}(),h=new p;return t.Axios=d,t.CODE_MSG={200:"服务器成功返回请求的数据。",201:"新建或修改数据成功。",202:"一个请求已经进入后台排队（异步任务）。",204:"删除数据成功。",301:"资源永久移动，请求的资源已被永久的移动到新 URI，返回信息会包括新的 URI，浏览器会自动定向到新 URI。",302:"资源临时移动，只是临时被移动，客户端可继续使用原有 URI。",303:"查看其它地址，与 301 类似，使用 GET 和 POST 请求查看。",304:"资源未修改，所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源。",400:"发出的请求有错误，服务器没有进行新建或修改数据的操作。",401:"用户没有权限（令牌、用户名、密码错误）。",403:"用户得到授权，但是访问是被禁止的。",404:"发出的请求针对的是不存在的记录，服务器没有进行操作。",406:"请求的格式不可得。",410:"请求的资源被永久删除，且不会再得到的。",422:"当创建一个对象时，发生一个验证错误。",500:"服务器发生错误，请检查服务器。",502:"网关错误。",503:"服务不可用，服务器暂时过载或维护。",504:"网关超时。"},t.XHttp=h,t.XHttpClass=p,t.XHttpUtils=f,t.default=h,Object.defineProperty(t,"__esModule",{value:!0}),t}({},axios,axiosRetry);