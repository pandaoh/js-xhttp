import t from"axios";import e from"axios-retry";
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
***************************************************************************** */var n=function(){return n=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},n.apply(this,arguments)};function i(t,e,n,i){return new(n||(n=Promise))((function(r,o){function u(t){try{a(i.next(t))}catch(t){o(t)}}function s(t){try{a(i.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((i=i.apply(t,e||[])).next())}))}function r(t,e){var n,i,r,o,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,i=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(r=u.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){u.label=o[1];break}if(6===o[0]&&u.label<r[1]){u.label=r[1],r=o;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(o);break}r[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(t,u)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function o(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,r,o=n.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(i=o.next()).done;)u.push(i.value)}catch(t){r={error:t}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return u}var u,s=t;!function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.DELETE="DELETE",t.PATCH="PATCH",t.OPTIONS="OPTIONS"}(u||(u={}));var a=function(){function t(){}return t.getInstance=function(){return this.instance||(this.instance=new t),this.instance},t.typeof=function(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()},t}(),c=new(function(){function s(e,i){var r,o,u,s,a,c,l,d;return void 0===i&&(i={}),this.timeout=3e4,this._cancelTokens=[],this._whiteListCancelTokens=[],this._cancelDuplicatedRequest=null===(r=null==e?void 0:e.cancelDuplicatedRequest)||void 0===r||r,this._cancelDuplicatedRequest&&(this._pendingRequests=new Map),this._retryConfig=null!==(o=null==e?void 0:e.retryConfig)&&void 0!==o?o:null,this._requestHandler=null!==(u=null==e?void 0:e.requestHandler)&&void 0!==u?u:void 0,this._responseHandler=null!==(s=null==e?void 0:e.responseHandler)&&void 0!==s?s:void 0,this._errorHandler=null!==(a=null==e?void 0:e.errorHandler)&&void 0!==a?a:void 0,this._requestFinally=null!==(c=null==e?void 0:e.requestFinally)&&void 0!==c?c:void 0,this._setRequestHeaders=null!==(l=null==e?void 0:e.setRequestHeaders)&&void 0!==l?l:void 0,this._defaultAxiosConfig=n({timeout:null!==(d=null==e?void 0:e.timeout)&&void 0!==d?d:this.timeout,validateStatus:function(t){return!0}},i),this.instance=t.create(this._defaultAxiosConfig),this._initAxiosRetry(),this._initInterceptors(),this}return s.prototype._initAxiosRetry=function(){var t=this;this._retryConfig&&e(this.instance,{retries:this._retryConfig.retry,retryDelay:function(e){return e*t._retryConfig.delay},shouldResetTimeout:!0,retryCondition:function(t){var n;return!!e.isNetworkOrIdempotentRequestError(t)||(!t.code||(!!["ECONNRESET","ETIMEDOUT"].includes(t.code)||!("ECONNABORTED"!=t.code||!(null===(n=t.message)||void 0===n?void 0:n.includes("timeout")))))}})},s.prototype._initInterceptors=function(){var e=this;this.instance.interceptors.request.use((function(t){var n;if(e._cancelDuplicatedRequest&&!t.cancelToken&&(e._removePendingRequest(t),e._addPendingRequest(t)),"object"===a.typeof(t)&&null!=e._setRequestHeaders&&(t=e._setRequestHeaders.call(e,t),"object"!==a.typeof(t)))throw new Error("XHttp Error: [setRequestHeaders] must be a function, and return a complete object value(RequestConfig) without missing original attributes!");if(!1!==(null===(n=e._requestHandler)||void 0===n?void 0:n.call(e,t)))return t;null==t||t.cancelRequest()}),(function(n){return t.isCancel(n)||(e._cancelDuplicatedRequest&&e._pendingRequests.clear(),e._whiteListCancelTokens=[],e._cancelTokens=[]),Promise.reject(n)})),this.instance.interceptors.response.use((function(t){var n,i,r;if(e._cancelDuplicatedRequest&&!(null===(n=t.config)||void 0===n?void 0:n.cancelToken)&&e._removePendingRequest(t),!1!==(null===(i=e._responseHandler)||void 0===i?void 0:i.call(e,t)))return{status:null==t?void 0:t.status,statusText:null==t?void 0:t.statusText,data:null==t?void 0:t.data};null===(r=t.config)||void 0===r||r.cancelRequest()}),(function(n){var i;t.isCancel(n)||(e._cancelDuplicatedRequest&&e._pendingRequests.clear(),e._whiteListCancelTokens=[],e._cancelTokens=[]);var r=null!==(i=n.response)&&void 0!==i?i:n;return Promise.reject(r)}))},s.prototype._addPendingRequest=function(e){var n=this,i=[e.method,e.url,JSON.stringify(e.params),JSON.stringify(e.data)].join("&");e.cancelToken=new t.CancelToken((function(t){n._pendingRequests.has(i)||(n._pendingRequests.set(i,t),e.cancelRequest=t)}))},s.prototype._removePendingRequest=function(t){var e=[t.method,t.url,JSON.stringify(t.params),JSON.stringify(t.data)].join("&");this._pendingRequests.has(e)&&(this._pendingRequests.get(e)(e),this._pendingRequests.delete(e))},s.prototype.request=function(e,o,u,s){return void 0===u&&(u={}),void 0===s&&(s=!1),i(this,void 0,void 0,(function(){var i,a,c,l=this;return r(this,(function(r){return i=n(n({},u),{url:o,method:e}),this._cancelDuplicatedRequest&&!s||(a=t.CancelToken.source(),c=a.token,s?this._whiteListCancelTokens.push(a):this._cancelTokens.push(a),i.cancelToken=c,i.cancelRequest=a.cancel),[2,this.instance.request(i).then((function(t){return t.data})).catch((function(t){var e;return null===(e=l._errorHandler)||void 0===e||e.call(l,t),t})).finally((function(){var t;null===(t=l._requestFinally)||void 0===t||t.call(l)}))]}))}))},s.prototype.get=function(t,e,o,s){return void 0===e&&(e={}),void 0===o&&(o={}),void 0===s&&(s=!1),i(this,void 0,void 0,(function(){return r(this,(function(i){return[2,this.request(u.GET,t,n(n({},o),{params:e}),s)]}))}))},s.prototype.post=function(t,e,o,s){return void 0===e&&(e={}),void 0===o&&(o={}),void 0===s&&(s=!1),i(this,void 0,void 0,(function(){return r(this,(function(i){return[2,this.request(u.POST,t,n(n({},o),{data:e}),s)]}))}))},s.prototype.put=function(t,e,o,s){return void 0===e&&(e={}),void 0===o&&(o={}),void 0===s&&(s=!1),i(this,void 0,void 0,(function(){return r(this,(function(i){return[2,this.request(u.PUT,t,n(n({},o),{data:e}),s)]}))}))},s.prototype.patch=function(t,e,o,s){return void 0===e&&(e={}),void 0===o&&(o={}),void 0===s&&(s=!1),i(this,void 0,void 0,(function(){return r(this,(function(i){return[2,this.request(u.PATCH,t,n(n({},o),{data:e}),s)]}))}))},s.prototype.delete=function(t,e,o,s){return void 0===e&&(e={}),void 0===o&&(o={}),void 0===s&&(s=!1),i(this,void 0,void 0,(function(){return r(this,(function(i){return[2,this.request(u.DELETE,t,n(n({},o),{data:e}),s)]}))}))},s.prototype.postForm=function(t,e,o,s){return void 0===e&&(e={}),void 0===o&&(o={}),void 0===s&&(s=!1),i(this,void 0,void 0,(function(){var i;return r(this,(function(r){return i=new FormData,Object.keys(e).forEach((function(t){i.append(t,"object"==a.typeof(e[t])?JSON.stringify(e[t]):e[t])})),[2,this.request(u.POST,t,n(n({},o),{data:i,headers:{"Content-Type":"multipart/form-data;charset=UTF-8;"}}),s)]}))}))},s.prototype.postFile=function(t,e,o,s,a,c,l){return void 0===o&&(o="file"),void 0===s&&(s=!1),void 0===a&&(a=!1),void 0===c&&(c={}),void 0===l&&(l=!1),i(this,void 0,void 0,(function(){var i;return r(this,(function(r){return i=new FormData,Array.isArray(e)?e.forEach((function(t,e){a?i.append(s?"".concat(o,"[]"):"".concat(o,"[").concat(e,"]"),t):i.append(o,t)})):i.append(o,e),[2,this.request(u.POST,t,n(n({},c),{data:i,headers:{"Content-Type":"application/x-www-form-urlencoded"}}),l)]}))}))},s.prototype.cancelRequest=function(t){var e,n;if(this._cancelDuplicatedRequest){try{for(var i=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(this._pendingRequests),r=i.next();!r.done;r=i.next()){var u=o(r.value,2),s=u[0];(0,u[1])(t?"".concat(t,": ").concat(s):s)}}catch(t){e={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}this._pendingRequests.clear()}else this._cancelTokens.forEach((function(e){null==e||e.cancel(t)}));return this},s.prototype.cancelWhiteListRequest=function(t){return this._whiteListCancelTokens.forEach((function(e){null==e||e.cancel(t)})),this},s.prototype.getCancelToken=function(){return t.CancelToken.source()},s.prototype.getBaseURL=function(){return this.instance.defaults.baseURL},s.prototype.setBaseURL=function(t){return this.instance.defaults.baseURL=t,this},s.prototype.getHeaders=function(){return this.instance.defaults.headers},s.prototype.setHeaders=function(t){return this.instance.defaults.headers=t,this},s.prototype.getHeader=function(t){return this.instance.defaults.headers.common[t]},s.prototype.setHeader=function(t,e){return e?this.instance.defaults.headers.common[t]=e:delete this.instance.defaults.headers.common[t],this},s.prototype.setRequestTimeout=function(t){return this.instance.defaults.timeout=t,this},s.prototype.getAuthToken=function(){var t=this.getHeader("Authorization");return null==t?null:t},s.prototype.setAuthToken=function(t){return this.setHeader("Authorization",t),this},s.prototype.isCancel=function(e){return t.isCancel(e)},s.prototype.getInstance=function(){return this.instance},s.prototype.create=function(t,e){return void 0===e&&(e={}),new s(t,e)},s}());export{s as Axios,c as XHttp,u as XHttpMethod,a as XHttpUtils,c as default};
