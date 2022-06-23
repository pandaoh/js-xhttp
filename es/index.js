import e from"axios";import t from"axios-retry";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var n=function(){return n=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};function i(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function u(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}a((i=i.apply(e,t||[])).next())}))}function o(e,t){var n,i,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function u(r){return function(u){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(e){r=[6,e],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,u])}}}function r(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,o,r=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(e){o={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}var s,u=e;!function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.DELETE="DELETE",e.PATCH="PATCH",e.OPTIONS="OPTIONS",e.get="GET",e.post="POST",e.put="PUT",e.delete="DELETE",e.patch="PATCH",e.options="OPTIONS"}(s||(s={}));var a=function(){function e(){}return e.getInstance=function(){return this.instance||(this.instance=new e),this.instance},e.typeof=function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},e}(),c=function(){function u(t,i){var o,r,s,u,a,c,l,d;return void 0===i&&(i={}),this.timeout=3e4,this._cancelTokens=[],this._whiteListCancelTokens=[],this._cancelDuplicatedRequest=null===(o=null==t?void 0:t.cancelDuplicatedRequest)||void 0===o||o,this._cancelDuplicatedRequest&&(this._pendingRequests=new Map),this._retryConfig=null!==(r=null==t?void 0:t.retryConfig)&&void 0!==r?r:null,this._requestHandler=null!==(s=null==t?void 0:t.requestHandler)&&void 0!==s?s:void 0,this._responseHandler=null!==(u=null==t?void 0:t.responseHandler)&&void 0!==u?u:void 0,this._errorHandler=null!==(a=null==t?void 0:t.errorHandler)&&void 0!==a?a:void 0,this._requestFinally=null!==(c=null==t?void 0:t.requestFinally)&&void 0!==c?c:void 0,this._setRequestHeaders=null!==(l=null==t?void 0:t.setRequestHeaders)&&void 0!==l?l:void 0,this._defaultAxiosConfig=n({timeout:null!==(d=null==t?void 0:t.timeout)&&void 0!==d?d:this.timeout,validateStatus:function(e){return!0}},i),this.instance=e.create(this._defaultAxiosConfig),this._initAxiosRetry(),this._initInterceptors(),this}return u.prototype._initAxiosRetry=function(){var n=this;this._retryConfig&&t(this.instance,{retries:this._retryConfig.retry,retryDelay:function(e){return e*n._retryConfig.delay},shouldResetTimeout:!0,retryCondition:function(n){var i,o,r;return!((null===(i=n.message)||void 0===i?void 0:i.includes("not-retry"))||e.isCancel(n)||(null===(o=n.message)||void 0===o?void 0:o.includes("custom-error")))&&(!!t.isNetworkOrIdempotentRequestError(n)||(!n.code||(!!["ECONNRESET","ETIMEDOUT"].includes(n.code)||!("ECONNABORTED"!=n.code||!(null===(r=n.message)||void 0===r?void 0:r.includes("timeout"))))))}})},u.prototype._initInterceptors=function(){var t=this;this.instance.interceptors.request.use((function(e){var n;if(t._cancelTokens.length>100&&(t._cancelTokens=[]),t._whiteListCancelTokens.length>100&&(t._whiteListCancelTokens=[]),t._cancelDuplicatedRequest&&!e.cancelToken&&(t._removePendingRequest(e),t._addPendingRequest(e)),"object"===a.typeof(e)&&null!=t._setRequestHeaders&&(e=t._setRequestHeaders.call(t,e),"object"!==a.typeof(e)))throw new Error("XHttp Error: [setRequestHeaders] must be a function, and return a complete object value(RequestConfig) without missing original attributes!");return null===(n=t._requestHandler)||void 0===n||n.call(t,e),e}),(function(n){return e.isCancel(n)||(t._cancelDuplicatedRequest&&t._pendingRequests.clear(),t._whiteListCancelTokens=[],t._cancelTokens=[]),Promise.reject(n)})),this.instance.interceptors.response.use((function(e){var n,i;return t._cancelDuplicatedRequest&&!(null===(n=e.config)||void 0===n?void 0:n.cancelToken)&&t._removePendingRequest(e),null===(i=t._responseHandler)||void 0===i||i.call(t,e),{status:null==e?void 0:e.status,statusText:null==e?void 0:e.statusText,data:null==e?void 0:e.data}}),(function(n){var i;e.isCancel(n)||(t._cancelDuplicatedRequest&&t._pendingRequests.clear(),t._whiteListCancelTokens=[],t._cancelTokens=[]);var o=null!==(i=n.response)&&void 0!==i?i:n;return Promise.reject(o)}))},u.prototype._addPendingRequest=function(t){var n=this,i=[t.method,t.url,JSON.stringify(t.params),JSON.stringify(t.data)].join("&");t.cancelToken=new e.CancelToken((function(e){n._pendingRequests.has(i)||(n._pendingRequests.set(i,e),t.cancelRequest=e)}))},u.prototype._removePendingRequest=function(e){var t=[e.method,e.url,JSON.stringify(e.params),JSON.stringify(e.data)].join("&");this._pendingRequests.has(t)&&(this._pendingRequests.get(t)(t),this._pendingRequests.delete(t))},u.prototype.request=function(t,r,s,u){return void 0===s&&(s={}),void 0===u&&(u=!1),i(this,void 0,void 0,(function(){var i,a,c,l=this;return o(this,(function(o){return i=n(n({},s),{url:r,method:t}),this._cancelDuplicatedRequest&&!u||(a=e.CancelToken.source(),c=a.token,u?this._whiteListCancelTokens.push(a):this._cancelTokens.push(a),i.cancelToken=c,i.cancelRequest=a.cancel),[2,this.instance.request(i).then((function(e){return e.data})).catch((function(e){var t;return null===(t=l._errorHandler)||void 0===t?void 0:t.call(l,e)})).finally((function(){var e;null===(e=l._requestFinally)||void 0===e||e.call(l)}))]}))}))},u.prototype.get=function(e,t,r,u){return void 0===t&&(t={}),void 0===r&&(r={}),void 0===u&&(u=!1),i(this,void 0,void 0,(function(){return o(this,(function(i){return[2,this.request(s.GET,e,n(n({},r),{params:t}),u)]}))}))},u.prototype.post=function(e,t,r,u){return void 0===t&&(t={}),void 0===r&&(r={}),void 0===u&&(u=!1),i(this,void 0,void 0,(function(){return o(this,(function(i){return[2,this.request(s.POST,e,n(n({},r),{data:t}),u)]}))}))},u.prototype.put=function(e,t,r,u){return void 0===t&&(t={}),void 0===r&&(r={}),void 0===u&&(u=!1),i(this,void 0,void 0,(function(){return o(this,(function(i){return[2,this.request(s.PUT,e,n(n({},r),{data:t}),u)]}))}))},u.prototype.patch=function(e,t,r,u){return void 0===t&&(t={}),void 0===r&&(r={}),void 0===u&&(u=!1),i(this,void 0,void 0,(function(){return o(this,(function(i){return[2,this.request(s.PATCH,e,n(n({},r),{data:t}),u)]}))}))},u.prototype.delete=function(e,t,r,u){return void 0===t&&(t={}),void 0===r&&(r={}),void 0===u&&(u=!1),i(this,void 0,void 0,(function(){return o(this,(function(i){return[2,this.request(s.DELETE,e,n(n({},r),{data:t}),u)]}))}))},u.prototype.postForm=function(e,t,r,u,c,l){return void 0===t&&(t={}),void 0===r&&(r=!1),void 0===u&&(u=!1),void 0===c&&(c={}),void 0===l&&(l=!1),i(this,void 0,void 0,(function(){var i;return o(this,(function(o){return i=new FormData,Object.keys(t).forEach((function(e){if(Array.isArray(t[e]))for(var n in t[e])r?i.append(u?"".concat(e,"[]"):"".concat(e,"[").concat(n,"]"),t[e][n]):i.append(e,t[e][n]);else i.append(e,"object"==a.typeof(t[e])?JSON.stringify(t[e]):t[e])})),[2,this.request(s.POST,e,n({data:i,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8;"}},c),l)]}))}))},u.prototype.postFile=function(e,t,r,u,a,c,l){return void 0===r&&(r="file"),void 0===u&&(u=!1),void 0===a&&(a=!1),void 0===c&&(c={}),void 0===l&&(l=!1),i(this,void 0,void 0,(function(){var i;return o(this,(function(o){return i=new FormData,Array.isArray(t)?t.forEach((function(e,t){u?i.append(a?"".concat(r,"[]"):"".concat(r,"[").concat(t,"]"),e):i.append(r,e)})):i.append(r,t),[2,this.request(s.POST,e,n({data:i,headers:{"Content-Type":"multipart/form-data"}},c),l)]}))}))},u.prototype.cancelRequest=function(e){var t,n;if(this._cancelDuplicatedRequest){try{for(var i=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(this._pendingRequests),o=i.next();!o.done;o=i.next()){var s=r(o.value,2),u=s[0];(0,s[1])(e?"".concat(e,": ").concat(u):u)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this._pendingRequests.clear()}else this._cancelTokens.forEach((function(t){null==t||t.cancel(e)})),this._cancelTokens=[];return this},u.prototype.cancelWhiteListRequest=function(e){return this._whiteListCancelTokens.forEach((function(t){null==t||t.cancel(e)})),this._whiteListCancelTokens=[],this},u.prototype.getCancelToken=function(){return e.CancelToken.source()},u.prototype.getBaseURL=function(){return this.instance.defaults.baseURL},u.prototype.setBaseURL=function(e){return this.instance.defaults.baseURL=e,this},u.prototype.getHeaders=function(){return this.instance.defaults.headers},u.prototype.setHeaders=function(e){return this.instance.defaults.headers=e,this},u.prototype.getHeader=function(e){return this.instance.defaults.headers.common[e]},u.prototype.setHeader=function(e,t){return t?this.instance.defaults.headers.common[e]=t:delete this.instance.defaults.headers.common[e],this},u.prototype.setRequestTimeout=function(e){return this.instance.defaults.timeout=e,this},u.prototype.getAuthToken=function(){var e=this.getHeader("Authorization");return null==e?null:e},u.prototype.setAuthToken=function(e){return this.setHeader("Authorization",e),this},u.prototype.isCancel=function(t){return e.isCancel(t)},u.prototype.getInstance=function(){return this.instance},u.prototype.create=function(e,t){return void 0===t&&(t={}),new u(e,t)},u}(),l={200:"服务器成功返回请求的数据。",201:"新建或修改数据成功。",202:"一个请求已经进入后台排队（异步任务）。",204:"删除数据成功。",301:"资源永久移动，请求的资源已被永久的移动到新 URI，返回信息会包括新的 URI，浏览器会自动定向到新 URI。",302:"资源临时移动，只是临时被移动，客户端可继续使用原有 URI。",303:"查看其它地址，与 301 类似，使用 GET 和 POST 请求查看。",304:"资源未修改，所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源。",400:"发出的请求有错误，服务器没有进行新建或修改数据的操作。",401:"用户没有权限（令牌、用户名、密码错误）。",403:"用户得到授权，但是访问是被禁止的。",404:"发出的请求针对的是不存在的记录，服务器没有进行操作。",406:"请求的格式不可得。",410:"请求的资源被永久删除，且不会再得到的。",422:"当创建一个对象时，发生一个验证错误。",500:"服务器发生错误，请检查服务器。",502:"网关错误。",503:"服务不可用，服务器暂时过载或维护。",504:"网关超时。"},d=new c;export{u as Axios,l as CODE_MSG,d as XHttp,c as XHttpClass,s as XHttpMethod,a as XHttpUtils,d as default};
