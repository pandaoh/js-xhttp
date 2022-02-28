!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("axios"),require("axios-retry")):"function"==typeof define&&define.amd?define(["exports","axios","axios-retry"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).xhttp={},t.axios,t.axiosRetry)}(this,(function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=r(e),i=r(n),u=function(){return u=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},u.apply(this,arguments)};function a(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{s(r.next(t))}catch(t){i(t)}}function a(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}s((r=r.apply(t,e||[])).next())}))}function s(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function c(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}var l,d=o.default;t.XHttpMethod=void 0,(l=t.XHttpMethod||(t.XHttpMethod={})).GET="GET",l.POST="POST",l.PUT="PUT",l.DELETE="DELETE",l.PATCH="PATCH",l.OPTIONS="OPTIONS";var f=function(){function t(){}return t.getInstance=function(){return this.instance||(this.instance=new t),this.instance},t.typeof=function(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()},t.empty=function(t){return"boolean"!=typeof t&&("null"===t||("undefined"===t||(!t&&0!==t||(!(!Array.isArray(t)||0!==t.length)||"[object Object]"===Object.prototype.toString.call(t)&&0===Object.keys(t).length))))},t.qsStringify=function(t,e){var n=this;void 0===e&&(e=!1);var r=[],o=function(o){var u=t[o];if(Array.isArray(u))return u=u.filter(Boolean).map((function(t){return"string"===n.typeof(t)?t:JSON.stringify(t)})),e?r.push("".concat(o,"=").concat(u.join(","))):u.forEach((function(t){r.push("".concat(o,"=").concat(t))})),"continue";var a="string"===i.typeof(u)?u:JSON.stringify(u),s="".concat(o,"=").concat(a);r.push(s)},i=this;for(var u in t)o(u);return r.join("&")},t.qsParse=function(t,e){var n=null!=t?t:window.location.pathname;t=null!=t?t:window.location.search;var r=n.substring(n.lastIndexOf("/")+1),o={"/":null!=r?r:void 0},i=0===t.indexOf("?")?t.substring(1):t;if(0!==i.length)for(var u=i.split("&"),a=0;a<u.length;a++){var s=u[a].split("="),c=decodeURIComponent(s[0]),l=decodeURIComponent(s[1]);o[c]?(!Array.isArray(o[c])&&(o[c]=Array(o[c])),o[c].push(l)):o[c]=l}return e?null==o?void 0:o[e]:o},t.getV=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.length>=2?e.reduce((function(e,n){return e&&e.hasOwnProperty(n)?e[n]:t})):t},t.get1Var=function(t){if("object"!==this.typeof(t)&&!Array.isArray(t))return t;for(var e in t){return t[e]}},t.sleep=function(t){return new Promise((function(e){return setTimeout(e,t)}))},t.arraySet=function(t){return Array.isArray(t)?1==t.length?t:function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}([],c(new Set(t)),!1):t},t.deepClone=function(t){if("object"!==this.typeof(t)||!Array.isArray(t))return t;var e=Array.isArray(t)?[]:{};for(var n in t)e[n]=this.deepClone(t[n]);return e},t.mergeObj=function(t,e,n,r){for(var o in void 0===r&&(r=!1),e)"object"===this.typeof(e[o])&&this.typeof("object"===t[o])?t[o]=this.mergeObj(t[o],e[o],n):Object.keys(t).includes(o)&&!(null==n?void 0:n.includes(o))||(t[o]=e[o]);if(r)for(var i in t)void 0===e[i]&&delete t[i];return t},t.getRandNum=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=10),Math.floor(t+Math.random()*(e-t+1))},t.getRandColor=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).slice(-6)},t.getRandStr=function(t){return void 0===t&&(t=1e8),(Math.random()*t).toFixed()},t.getUId=function(t,e){return void 0===t&&(t=1e4),void 0===e&&(e=36),0===t?"".concat(this.formatDate(new Date,"Sssiihhddmmyyyy")):Number("".concat(this.getRandStr(t)).concat(Date.now())).toString(e)},t.str2html=function(t){var e=document.createElement("div");return e.textContent=t,e.innerHTML},t.html2str=function(t){var e=document.createElement("div");return e.innerHTML=t,e.textContent},t.unicode2str=function(t){return escape(t).toLocaleLowerCase().replace(/%u/gi,"\\u")},t.str2unicode=function(t){return unescape(t.replace(/\\u/gi,"%u"))},t.trim=function(t,e){switch(void 0===e&&(e=0),e){case 0:case"ba":return t.trim();case 1:case"b":return t.replace(/^[\s]*/,"");case 2:case"a":return t.replace(/[\s]*$/g,"");case 3:case"all":return t.replace(/\s/g,"");case 4:case"pro":return t.replace(/(^\s*)|(\s*$)|\s(?=\s)/g,"");default:return t}},t.formatFormData=function(t){var e=new FormData;for(var n in t)e.append(n,t[n]);return e},t.formatBytes=function(t,e){var n;void 0===e&&(e=2);var r=["B","KB","MB","GB","TB"],o=Math.floor((t?Math.log(t):0)/Math.log(1024));o=Math.min(o,r.length-1);var i=null!==(n=null==r?void 0:r[o])&&void 0!==n?n:r[0];return(t/=1<<10*o).toFixed(e)+" "+i},t.formatDate=function(t,e,n){void 0===e&&(e="yyyy-mm-dd hh:ii:ss"),n=null!=n?n:[7,1,2,3,4,5,6];var r={"m+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"i+":t.getMinutes(),"s+":t.getSeconds(),Q:Math.floor((t.getMonth()+3)/3),S:"".concat(t.getMilliseconds()).padStart(3,"0"),W:n[t.getDay()]};for(var o in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,"".concat(t.getFullYear()).substr(4-RegExp.$1.length))),r)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?r[o]:"00".concat(r[o]).substr("".concat(r[o]).length)));return e},t.base64Encode=function(t){return Buffer.from(t,"utf-8").toString("base64")},t.base64Decode=function(t){return Buffer.from(t,"base64").toString("utf8")},t.data2Obj=function(t,e,n){var r={};return Array.isArray(t)?(t.forEach((function(t){r[t[e]]=n?t[n]:t})),r):r},t.data2Arr=function(t,e){var n,r=[];if(0===t.length)return r;for(var o in t)(null===(n=t[o])||void 0===n?void 0:n[e])&&r.push(t[o][e]);return r},t}(),h=new(function(){function e(t,e){var n,r,i,a,s,c,l,d;return void 0===e&&(e={}),this.timeout=3e4,this._cancelTokens=[],this._whiteListCancelTokens=[],this._cancelDuplicatedRequest=null===(n=null==t?void 0:t.cancelDuplicatedRequest)||void 0===n||n,this._cancelDuplicatedRequest&&(this._pendingRequests=new Map),this._retryConfig=null!==(r=null==t?void 0:t.retryConfig)&&void 0!==r?r:null,this._requestHandler=null!==(i=null==t?void 0:t.requestHandler)&&void 0!==i?i:void 0,this._responseHandler=null!==(a=null==t?void 0:t.responseHandler)&&void 0!==a?a:void 0,this._errorHandler=null!==(s=null==t?void 0:t.errorHandler)&&void 0!==s?s:void 0,this._requestFinally=null!==(c=null==t?void 0:t.requestFinally)&&void 0!==c?c:void 0,this._setRequestHeaders=null!==(l=null==t?void 0:t.setRequestHeaders)&&void 0!==l?l:void 0,this._defaultAxiosConfig=u({timeout:null!==(d=null==t?void 0:t.timeout)&&void 0!==d?d:this.timeout,validateStatus:function(t){return!0}},e),this.instance=o.default.create(this._defaultAxiosConfig),this._initAxiosRetry(),this._initInterceptors(),this}return e.prototype._initAxiosRetry=function(){var t=this;this._retryConfig&&i.default(this.instance,{retries:this._retryConfig.retry,retryDelay:function(e){return e*t._retryConfig.delay},shouldResetTimeout:!0,retryCondition:function(t){var e;return!!i.default.isNetworkOrIdempotentRequestError(t)||(!t.code||(!!["ECONNRESET","ETIMEDOUT"].includes(t.code)||!("ECONNABORTED"!=t.code||!(null===(e=t.message)||void 0===e?void 0:e.includes("timeout")))))}})},e.prototype._initInterceptors=function(){var t=this;this.instance.interceptors.request.use((function(e){var n;if(t._cancelDuplicatedRequest&&!e.cancelToken&&(t._removePendingRequest(e),t._addPendingRequest(e)),"object"===f.typeof(e)&&null!=t._setRequestHeaders&&(e=t._setRequestHeaders.call(t,e),"object"!==f.typeof(e)))throw new Error("XHttp Error: [setRequestHeaders] must be a function, and return a complete object value(RequestConfig) without missing original attributes!");return null===(n=t._requestHandler)||void 0===n||n.call(t,e),e}),(function(e){return o.default.isCancel(e)||(t._cancelDuplicatedRequest&&t._pendingRequests.clear(),t._whiteListCancelTokens=[],t._cancelTokens=[]),Promise.reject(e)})),this.instance.interceptors.response.use((function(e){var n,r;return t._cancelDuplicatedRequest&&!(null===(n=e.config)||void 0===n?void 0:n.cancelToken)&&t._removePendingRequest(e),null===(r=t._responseHandler)||void 0===r||r.call(t,e),{status:null==e?void 0:e.status,statusText:null==e?void 0:e.statusText,data:null==e?void 0:e.data}}),(function(e){var n;o.default.isCancel(e)||(t._cancelDuplicatedRequest&&t._pendingRequests.clear(),t._whiteListCancelTokens=[],t._cancelTokens=[]);var r=null!==(n=e.response)&&void 0!==n?n:e;return Promise.reject(r)}))},e.prototype._addPendingRequest=function(t){var e=this,n=[t.method,t.url,JSON.stringify(t.params),JSON.stringify(t.data)].join("&");t.cancelToken=new o.default.CancelToken((function(t){e._pendingRequests.has(n)||e._pendingRequests.set(n,t)}))},e.prototype._removePendingRequest=function(t){var e=[t.method,t.url,JSON.stringify(t.params),JSON.stringify(t.data)].join("&");this._pendingRequests.has(e)&&(this._pendingRequests.get(e)(e),this._pendingRequests.delete(e))},e.prototype.request=function(t,e,n,r){return void 0===n&&(n={}),void 0===r&&(r=!1),a(this,void 0,void 0,(function(){var i,a,c,l=this;return s(this,(function(s){return i=u(u({},n),{url:e,method:t}),this._cancelDuplicatedRequest&&!r||(a=o.default.CancelToken.source(),c=a.token,r?this._whiteListCancelTokens.push(a):this._cancelTokens.push(a),i.cancelToken=c),[2,this.instance.request(i).then((function(t){return t})).catch((function(t){var e;return null===(e=l._errorHandler)||void 0===e||e.call(l,t),t})).finally((function(){var t;null===(t=l._requestFinally)||void 0===t||t.call(l)}))]}))}))},e.prototype.get=function(e,n,r,o){return void 0===n&&(n={}),void 0===r&&(r={}),void 0===o&&(o=!1),a(this,void 0,void 0,(function(){return s(this,(function(i){return[2,this.request(t.XHttpMethod.GET,e,u(u({},r),{params:n}),o)]}))}))},e.prototype.post=function(e,n,r,o){return void 0===n&&(n={}),void 0===r&&(r={}),void 0===o&&(o=!1),a(this,void 0,void 0,(function(){return s(this,(function(i){return[2,this.request(t.XHttpMethod.POST,e,u(u({},r),{data:n}),o)]}))}))},e.prototype.put=function(e,n,r,o){return void 0===n&&(n={}),void 0===r&&(r={}),void 0===o&&(o=!1),a(this,void 0,void 0,(function(){return s(this,(function(i){return[2,this.request(t.XHttpMethod.PUT,e,u(u({},r),{data:n}),o)]}))}))},e.prototype.patch=function(e,n,r,o){return void 0===n&&(n={}),void 0===r&&(r={}),void 0===o&&(o=!1),a(this,void 0,void 0,(function(){return s(this,(function(i){return[2,this.request(t.XHttpMethod.PATCH,e,u(u({},r),{data:n}),o)]}))}))},e.prototype.delete=function(e,n,r,o){return void 0===n&&(n={}),void 0===r&&(r={}),void 0===o&&(o=!1),a(this,void 0,void 0,(function(){return s(this,(function(i){return[2,this.request(t.XHttpMethod.DELETE,e,u(u({},r),{data:n}),o)]}))}))},e.prototype.postForm=function(e,n,r,o){return void 0===n&&(n={}),void 0===r&&(r={}),void 0===o&&(o=!1),a(this,void 0,void 0,(function(){var i;return s(this,(function(a){return i=new FormData,Object.keys(n).forEach((function(t){i.append(t,n[t])})),[2,this.request(t.XHttpMethod.POST,e,u(u({},r),{data:i,headers:{"Content-Type":"multipart/form-data;charset=UTF-8;"}}),o)]}))}))},e.prototype.postFile=function(e,n,r,o,i){return void 0===r&&(r="file"),void 0===o&&(o={}),void 0===i&&(i=!1),a(this,void 0,void 0,(function(){var a;return s(this,(function(s){return(a=new FormData).append(r,n),[2,this.request(t.XHttpMethod.POST,e,u(u({},o),{data:a,headers:{"Content-Type":"application/x-www-form-urlencoded"}}),i)]}))}))},e.prototype.cancelRequest=function(t){var e,n;if(this._cancelDuplicatedRequest){try{for(var r=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(this._pendingRequests),o=r.next();!o.done;o=r.next()){var i=c(o.value,2),u=i[0];(0,i[1])(t?"".concat(t,": ").concat(u):u)}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}this._pendingRequests.clear()}else this._cancelTokens.forEach((function(e){null==e||e.cancel(t)}));return this},e.prototype.cancelWhiteListRequest=function(t){return this._whiteListCancelTokens.forEach((function(e){null==e||e.cancel(t)})),this},e.prototype.getCancelToken=function(){return o.default.CancelToken.source()},e.prototype.getBaseURL=function(){return this.instance.defaults.baseURL},e.prototype.setBaseURL=function(t){return this.instance.defaults.baseURL=t,this},e.prototype.getHeaders=function(){return this.instance.defaults.headers},e.prototype.setHeaders=function(t){return this.instance.defaults.headers=t,this},e.prototype.getHeader=function(t){return this.instance.defaults.headers.common[t]},e.prototype.setHeader=function(t,e){return e?this.instance.defaults.headers.common[t]=e:delete this.instance.defaults.headers.common[t],this},e.prototype.setRequestTimeout=function(t){return this.instance.defaults.timeout=t,this},e.prototype.getAuthToken=function(){var t=this.getHeader("Authorization");return null==t?null:t},e.prototype.setAuthToken=function(t){return this.setHeader("Authorization",t),this},e.prototype.getInstance=function(){return this.instance},e.prototype.create=function(t,n){return void 0===n&&(n={}),new e(t,n)},e}());t.Axios=d,t.XHttp=h,t.XHttpUtils=f,t.default=h,Object.defineProperty(t,"__esModule",{value:!0})}));
