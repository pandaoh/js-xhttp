(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios'), require('axios-retry')) :
    typeof define === 'function' && define.amd ? define(['exports', 'axios', 'axios-retry'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.xhttp = {}, global.axios, global.axiosRetry));
})(this, (function (exports, axios, axiosRetry) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
    var axiosRetry__default = /*#__PURE__*/_interopDefaultLegacy(axiosRetry);

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
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    var Axios = axios__default["default"];
    exports.XHttpMethod = void 0;
    (function (XHttpMethod) {
        XHttpMethod["GET"] = "GET";
        XHttpMethod["POST"] = "POST";
        XHttpMethod["PUT"] = "PUT";
        XHttpMethod["DELETE"] = "DELETE";
        XHttpMethod["PATCH"] = "PATCH";
        XHttpMethod["OPTIONS"] = "OPTIONS";
    })(exports.XHttpMethod || (exports.XHttpMethod = {}));
    var XHttp = (function () {
        function XHttp(options, axiosConfig) {
            if (axiosConfig === void 0) { axiosConfig = {}; }
            var _a, _b, _c, _d, _e, _f, _g, _h;
            this.timeout = 30000;
            this._cancelTokens = [];
            this._whiteListCancelTokens = [];
            this._cancelDuplicatedRequest = (_a = options === null || options === void 0 ? void 0 : options.cancelDuplicatedRequest) !== null && _a !== void 0 ? _a : true;
            if (this._cancelDuplicatedRequest) {
                this._pendingRequests = new Map();
            }
            this._retryConfig = (_b = options === null || options === void 0 ? void 0 : options.retryConfig) !== null && _b !== void 0 ? _b : null;
            this._requestHandler = (_c = options === null || options === void 0 ? void 0 : options.requestHandler) !== null && _c !== void 0 ? _c : undefined;
            this._responseHandler = (_d = options === null || options === void 0 ? void 0 : options.responseHandler) !== null && _d !== void 0 ? _d : undefined;
            this._errorHandler = (_e = options === null || options === void 0 ? void 0 : options.errorHandler) !== null && _e !== void 0 ? _e : undefined;
            this._requestFinally = (_f = options === null || options === void 0 ? void 0 : options.requestFinally) !== null && _f !== void 0 ? _f : undefined;
            this._setRequestHeaders = (_g = options === null || options === void 0 ? void 0 : options.setRequestHeaders) !== null && _g !== void 0 ? _g : undefined;
            this._defaultAxiosConfig = __assign({ timeout: (_h = options === null || options === void 0 ? void 0 : options.timeout) !== null && _h !== void 0 ? _h : this.timeout, validateStatus: function (status) {
                    return true;
                } }, axiosConfig);
            this.instance = axios__default["default"].create(this._defaultAxiosConfig);
            this._initAxiosRetry();
            this._initInterceptors();
        }
        XHttp.prototype._initAxiosRetry = function () {
            var _this = this;
            if (this._retryConfig) {
                axiosRetry__default["default"](this.instance, {
                    retries: this._retryConfig.retry,
                    retryDelay: function (retryCount) {
                        return retryCount * _this._retryConfig.delay;
                    },
                    shouldResetTimeout: true,
                    retryCondition: function (error) {
                        var _a;
                        if (axiosRetry__default["default"].isNetworkOrIdempotentRequestError(error)) {
                            return true;
                        }
                        if (!error.code) {
                            return true;
                        }
                        if (['ECONNRESET', 'ETIMEDOUT'].includes(error.code)) {
                            return true;
                        }
                        if (error.code == 'ECONNABORTED' && ((_a = error.message) === null || _a === void 0 ? void 0 : _a.includes('timeout'))) {
                            return true;
                        }
                        return false;
                    },
                });
            }
        };
        XHttp.prototype._initInterceptors = function () {
            var _this = this;
            this.instance.interceptors.request.use(function (config) {
                var _a;
                if (_this._cancelDuplicatedRequest && !config.cancelToken) {
                    _this._removePendingRequest(config);
                    _this._addPendingRequest(config);
                }
                if (XHttpUtils.typeof(config) === 'object' && _this._setRequestHeaders != undefined) {
                    config = _this._setRequestHeaders.call(_this, config);
                    if (XHttpUtils.typeof(config) !== 'object') {
                        throw new Error('XHttp Error: [setRequestHeaders] must be a function, and return a complete object value(RequestConfig) without missing original attributes!');
                    }
                }
                (_a = _this._requestHandler) === null || _a === void 0 ? void 0 : _a.call(_this, config);
                return config;
            }, function (error) {
                if (!axios__default["default"].isCancel(error)) {
                    if (_this._cancelDuplicatedRequest) {
                        _this._pendingRequests.clear();
                    }
                    _this._whiteListCancelTokens = [];
                    _this._cancelTokens = [];
                }
                return Promise.reject(error);
            });
            this.instance.interceptors.response.use(function (response) {
                var _a, _b;
                if (_this._cancelDuplicatedRequest && !((_a = response.config) === null || _a === void 0 ? void 0 : _a.cancelToken)) {
                    _this._removePendingRequest(response);
                }
                (_b = _this._responseHandler) === null || _b === void 0 ? void 0 : _b.call(_this, response);
                return {
                    status: response === null || response === void 0 ? void 0 : response.status,
                    statusText: response === null || response === void 0 ? void 0 : response.statusText,
                    data: response === null || response === void 0 ? void 0 : response.data,
                };
            }, function (error) {
                var _a;
                if (!axios__default["default"].isCancel(error)) {
                    if (_this._cancelDuplicatedRequest) {
                        _this._pendingRequests.clear();
                    }
                    _this._whiteListCancelTokens = [];
                    _this._cancelTokens = [];
                }
                var msg = (_a = error.response) !== null && _a !== void 0 ? _a : error;
                return Promise.reject(msg);
            });
        };
        XHttp.prototype._addPendingRequest = function (config) {
            var _this = this;
            var url = [
                config.method,
                config.url,
                JSON.stringify(config.params),
                JSON.stringify(config.data)
            ].join('&');
            config.cancelToken = new axios__default["default"].CancelToken(function (cancel) {
                if (!_this._pendingRequests.has(url)) {
                    _this._pendingRequests.set(url, cancel);
                }
            });
        };
        XHttp.prototype._removePendingRequest = function (config) {
            var url = [
                config.method,
                config.url,
                JSON.stringify(config.params),
                JSON.stringify(config.data)
            ].join('&');
            if (this._pendingRequests.has(url)) {
                var cancel = this._pendingRequests.get(url);
                cancel(url);
                this._pendingRequests.delete(url);
            }
        };
        XHttp.prototype.request = function (method, url, config, isWhiteList) {
            if (config === void 0) { config = {}; }
            if (isWhiteList === void 0) { isWhiteList = false; }
            return __awaiter(this, void 0, void 0, function () {
                var requestConfig, cancelTokenSource, cancelToken;
                var _this = this;
                return __generator(this, function (_a) {
                    requestConfig = __assign(__assign({}, config), { url: url, method: method });
                    if (!this._cancelDuplicatedRequest || isWhiteList) {
                        cancelTokenSource = axios__default["default"].CancelToken.source();
                        cancelToken = cancelTokenSource.token;
                        if (isWhiteList) {
                            this._whiteListCancelTokens.push(cancelTokenSource);
                        }
                        else {
                            this._cancelTokens.push(cancelTokenSource);
                        }
                        requestConfig.cancelToken = cancelToken;
                    }
                    return [2, this.instance.request(requestConfig)
                            .then(function (data) {
                            return data;
                        }).catch(function (error) {
                            var _a;
                            (_a = _this._errorHandler) === null || _a === void 0 ? void 0 : _a.call(_this, error);
                            return error;
                        }).finally(function () {
                            var _a;
                            (_a = _this._requestFinally) === null || _a === void 0 ? void 0 : _a.call(_this);
                        })];
                });
            });
        };
        XHttp.prototype.get = function (url, params, config, isWhiteList) {
            if (params === void 0) { params = {}; }
            if (config === void 0) { config = {}; }
            if (isWhiteList === void 0) { isWhiteList = false; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, this.request(exports.XHttpMethod.GET, url, __assign(__assign({}, config), { params: params }), isWhiteList)];
                });
            });
        };
        XHttp.prototype.post = function (url, data, config, isWhiteList) {
            if (data === void 0) { data = {}; }
            if (config === void 0) { config = {}; }
            if (isWhiteList === void 0) { isWhiteList = false; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, this.request(exports.XHttpMethod.POST, url, __assign(__assign({}, config), { data: data }), isWhiteList)];
                });
            });
        };
        XHttp.prototype.put = function (url, data, config, isWhiteList) {
            if (data === void 0) { data = {}; }
            if (config === void 0) { config = {}; }
            if (isWhiteList === void 0) { isWhiteList = false; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, this.request(exports.XHttpMethod.PUT, url, __assign(__assign({}, config), { data: data }), isWhiteList)];
                });
            });
        };
        XHttp.prototype.patch = function (url, data, config, isWhiteList) {
            if (data === void 0) { data = {}; }
            if (config === void 0) { config = {}; }
            if (isWhiteList === void 0) { isWhiteList = false; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, this.request(exports.XHttpMethod.PATCH, url, __assign(__assign({}, config), { data: data }), isWhiteList)];
                });
            });
        };
        XHttp.prototype.delete = function (url, data, config, isWhiteList) {
            if (data === void 0) { data = {}; }
            if (config === void 0) { config = {}; }
            if (isWhiteList === void 0) { isWhiteList = false; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, this.request(exports.XHttpMethod.DELETE, url, __assign(__assign({}, config), { data: data }), isWhiteList)];
                });
            });
        };
        XHttp.prototype.postForm = function (url, data, config, isWhiteList) {
            if (data === void 0) { data = {}; }
            if (config === void 0) { config = {}; }
            if (isWhiteList === void 0) { isWhiteList = false; }
            return __awaiter(this, void 0, void 0, function () {
                var formData;
                return __generator(this, function (_a) {
                    formData = new FormData();
                    Object.keys(data).forEach(function (key) {
                        formData.append(key, data[key]);
                    });
                    return [2, this.request(exports.XHttpMethod.POST, url, __assign(__assign({}, config), { data: formData, headers: {
                                'Content-Type': 'multipart/form-data;charset=UTF-8;',
                            } }), isWhiteList)];
                });
            });
        };
        XHttp.prototype.postFile = function (url, file, name, config, isWhiteList) {
            if (name === void 0) { name = 'file'; }
            if (config === void 0) { config = {}; }
            if (isWhiteList === void 0) { isWhiteList = false; }
            return __awaiter(this, void 0, void 0, function () {
                var formData;
                return __generator(this, function (_a) {
                    formData = new FormData();
                    formData.append(name, file);
                    return [2, this.request(exports.XHttpMethod.POST, url, __assign(__assign({}, config), { data: formData, headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                            } }), isWhiteList)];
                });
            });
        };
        XHttp.prototype.cancelRequest = function (message) {
            var e_1, _a;
            if (this._cancelDuplicatedRequest) {
                try {
                    for (var _b = __values(this._pendingRequests), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = __read(_c.value, 2), url = _d[0], cancel = _d[1];
                        cancel(message ? "".concat(message, ": ").concat(url) : url);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                this._pendingRequests.clear();
            }
            else {
                this._cancelTokens.forEach(function (cancelTokenSource) {
                    cancelTokenSource === null || cancelTokenSource === void 0 ? void 0 : cancelTokenSource.cancel(message);
                });
            }
            return this;
        };
        XHttp.prototype.cancelWhiteListRequest = function (message) {
            this._whiteListCancelTokens.forEach(function (cancelTokenSource) {
                cancelTokenSource === null || cancelTokenSource === void 0 ? void 0 : cancelTokenSource.cancel(message);
            });
            return this;
        };
        XHttp.prototype.getCancelToken = function () {
            return axios__default["default"].CancelToken.source();
        };
        XHttp.prototype.getBaseURL = function () {
            return this.instance.defaults.baseURL;
        };
        XHttp.prototype.setBaseURL = function (url) {
            this.instance.defaults.baseURL = url;
            return this;
        };
        XHttp.prototype.getHeaders = function () {
            return this.instance.defaults.headers;
        };
        XHttp.prototype.setHeaders = function (headers) {
            this.instance.defaults.headers = headers;
            return this;
        };
        XHttp.prototype.getHeader = function (key) {
            return this.instance.defaults.headers.common[key];
        };
        XHttp.prototype.setHeader = function (key, val) {
            if (val) {
                this.instance.defaults.headers.common[key] = val;
            }
            else {
                delete this.instance.defaults.headers.common[key];
            }
            return this;
        };
        XHttp.prototype.setRequestTimeout = function (timeout) {
            this.instance.defaults.timeout = timeout;
            return this;
        };
        XHttp.prototype.getAuthToken = function () {
            var token = this.getHeader('Authorization');
            if (null == token) {
                return null;
            }
            return token;
        };
        XHttp.prototype.setAuthToken = function (token) {
            this.setHeader('Authorization', token);
            return this;
        };
        XHttp.prototype.getInstance = function () {
            return this.instance;
        };
        return XHttp;
    }());
    var XHttpUtils = (function () {
        function XHttpUtils() {
        }
        XHttpUtils.getInstance = function () {
            if (!this.instance) {
                this.instance = new XHttpUtils();
            }
            return this.instance;
        };
        XHttpUtils.typeof = function (obj) {
            return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
        };
        XHttpUtils.empty = function (obj) {
            if (typeof obj === "boolean") {
                return false;
            }
            if (obj === "null") {
                return true;
            }
            if (obj === "undefined") {
                return true;
            }
            if (!obj && obj !== 0) {
                return true;
            }
            if (Array.isArray(obj) && obj.length === 0) {
                return true;
            }
            if (Object.prototype.toString.call(obj) === "[object Object]" && Object.keys(obj).length === 0) {
                return true;
            }
            return false;
        };
        XHttpUtils.qsStringify = function (obj, arr2str) {
            var _this = this;
            if (arr2str === void 0) { arr2str = false; }
            var search = [];
            var _loop_1 = function (key) {
                var val = obj[key];
                if (Array.isArray(val)) {
                    val = val.filter(Boolean).map(function (i) { return _this.typeof(i) === 'string' ? i : JSON.stringify(i); });
                    if (arr2str) {
                        search.push("".concat(key, "=").concat(val.join(',')));
                    }
                    else {
                        val.forEach(function (v) {
                            search.push("".concat(key, "=").concat(v));
                        });
                    }
                    return "continue";
                }
                var value = this_1.typeof(val) === 'string' ? val : JSON.stringify(val);
                var item = "".concat(key, "=").concat(value);
                search.push(item);
            };
            var this_1 = this;
            for (var key in obj) {
                _loop_1(key);
            }
            return search.join('&');
        };
        XHttpUtils.qsParse = function (url, key) {
            var pathname = url !== null && url !== void 0 ? url : window.location.pathname;
            url = url !== null && url !== void 0 ? url : window.location.search;
            var filename = pathname.substring(pathname.lastIndexOf('/') + 1);
            var paramMap = {
                '/': filename !== null && filename !== void 0 ? filename : undefined
            };
            var querystring = (url.indexOf('?') === 0) ? url.substring(1) : url;
            if (querystring.length !== 0) {
                var parts = querystring.split('&');
                for (var i = 0; i < parts.length; i++) {
                    var component = parts[i].split('=');
                    var paramKey = decodeURIComponent(component[0]);
                    var paramVal = decodeURIComponent(component[1]);
                    if (!paramMap[paramKey]) {
                        paramMap[paramKey] = paramVal;
                        continue;
                    }
                    !Array.isArray(paramMap[paramKey]) && (paramMap[paramKey] = Array(paramMap[paramKey]));
                    paramMap[paramKey].push(paramVal);
                }
            }
            return (key) ? paramMap === null || paramMap === void 0 ? void 0 : paramMap[key] : paramMap;
        };
        XHttpUtils.getV = function (defaultResult) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return args.length >= 2
                ? args.reduce(function (a, b) {
                    return a && a.hasOwnProperty(b) ? a[b] : defaultResult;
                })
                : defaultResult;
        };
        XHttpUtils.get1Var = function (data) {
            if (this.typeof(data) !== 'object' && !Array.isArray(data)) {
                return data;
            }
            for (var key in data) {
                var result = data[key];
                return result;
            }
        };
        XHttpUtils.sleep = function (milliseconds) {
            return new Promise(function (resolve) { return setTimeout(resolve, milliseconds); });
        };
        XHttpUtils.arraySet = function (arr) {
            if (!Array.isArray(arr)) {
                return arr;
            }
            if (arr.length == 1) {
                return arr;
            }
            return __spreadArray([], __read(new Set(arr)), false);
        };
        XHttpUtils.deepClone = function (data) {
            if (this.typeof(data) !== 'object' || !Array.isArray(data)) {
                return data;
            }
            var result = Array.isArray(data) ? [] : {};
            for (var i in data) {
                result[i] = this.deepClone(data[i]);
            }
            return result;
        };
        XHttpUtils.mergeObj = function (oldObj, newObj, keys, noOld) {
            if (noOld === void 0) { noOld = false; }
            for (var newKey in newObj) {
                if (this.typeof(newObj[newKey]) === 'object' && this.typeof((oldObj[newKey]) === 'object')) {
                    oldObj[newKey] = this.mergeObj(oldObj[newKey], newObj[newKey], keys);
                }
                else if (Object.keys(oldObj).includes(newKey) && !(keys === null || keys === void 0 ? void 0 : keys.includes(newKey))) ;
                else {
                    oldObj[newKey] = newObj[newKey];
                }
            }
            if (noOld) {
                for (var oldKey in oldObj) {
                    if (newObj[oldKey] === undefined) {
                        delete oldObj[oldKey];
                    }
                }
            }
            return oldObj;
        };
        XHttpUtils.getRandNum = function (min, max) {
            if (min === void 0) { min = 0; }
            if (max === void 0) { max = 10; }
            return Math.floor(min + Math.random() * (max - min + 1));
        };
        XHttpUtils.getRandColor = function () {
            return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
        };
        XHttpUtils.getRandStr = function (pow) {
            if (pow === void 0) { pow = 100000000; }
            return pow === 0 ? '' : (Math.random() * pow).toFixed();
        };
        XHttpUtils.getUId = function (radix, pow) {
            if (radix === void 0) { radix = 36; }
            if (pow === void 0) { pow = 100000000; }
            return Number("".concat(this.getRandStr(pow)).concat(this.formatDate(new Date(), 'Sssiihhddmmyyyy'))).toString(radix);
        };
        XHttpUtils.str2html = function (value) {
            var div = document.createElement('div');
            div.textContent = value;
            var specialChars = div.innerHTML;
            return specialChars;
        };
        XHttpUtils.html2str = function (value) {
            var div = document.createElement('div');
            div.innerHTML = value;
            var str = div.textContent;
            return str;
        };
        XHttpUtils.unicode2str = function (value) {
            return escape(value).toLocaleLowerCase().replace(/%u/gi, '\\u');
        };
        XHttpUtils.str2unicode = function (value) {
            return unescape(value.replace(/\\u/gi, '%u'));
        };
        XHttpUtils.trim = function (str, type) {
            if (type === void 0) { type = 0; }
            switch (type) {
                case 0:
                case 'ba':
                    return str = str.trim();
                case 1:
                case 'b':
                    return str = str.replace(/^[\s]*/, "");
                case 2:
                case 'a':
                    return str = str.replace(/[\s]*$/g, "");
                case 3:
                case 'all':
                    return str = str.replace(/\s/g, "");
                case 4:
                case 'pro':
                    return (str = str.replace(/(^\s*)|(\s*$)|\s(?=\s)/g, ""));
                default:
                    return str;
            }
        };
        XHttpUtils.formatFormData = function (obj) {
            var formData = new FormData();
            for (var key in obj) {
                formData.append(key, obj[key]);
            }
            return formData;
        };
        XHttpUtils.formatBytes = function (bytes, precision) {
            var _a;
            if (precision === void 0) { precision = 2; }
            var units = ['B', 'KB', 'MB', 'GB', 'TB'];
            var pow = Math.floor((bytes ? Math.log(bytes) : 0) / Math.log(1024));
            pow = Math.min(pow, units.length - 1);
            bytes /= (1 << (10 * pow));
            var unit = (_a = units === null || units === void 0 ? void 0 : units[pow]) !== null && _a !== void 0 ? _a : units[0];
            return bytes.toFixed(precision) + ' ' + unit;
        };
        XHttpUtils.formatDate = function (date, fmt, weeks) {
            if (fmt === void 0) { fmt = "yyyy-mm-dd hh:ii:ss"; }
            weeks = weeks !== null && weeks !== void 0 ? weeks : [7, 1, 2, 3, 4, 5, 6];
            var o = {
                'm+': date.getMonth() + 1,
                'd+': date.getDate(),
                'h+': date.getHours(),
                'i+': date.getMinutes(),
                's+': date.getSeconds(),
                'Q': Math.floor((date.getMonth() + 3) / 3),
                'S': "".concat(date.getMilliseconds()).padStart(3, '0'),
                'W': weeks[date.getDay()]
            };
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, "".concat(date.getFullYear()).substr(4 - RegExp.$1.length));
            }
            for (var k in o) {
                if (new RegExp('(' + k + ')').test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? o[k] : "00".concat(o[k]).substr(("".concat(o[k]).length)));
                }
            }
            return fmt;
        };
        XHttpUtils.base64Encode = function (str) {
            return Buffer.from(str, 'utf-8').toString('base64');
        };
        XHttpUtils.base64Decode = function (str) {
            return Buffer.from(str, 'base64').toString('utf8');
        };
        XHttpUtils.data2Obj = function (arr, key, vKey) {
            var obj = {};
            if (!Array.isArray(arr)) {
                return obj;
            }
            arr.forEach(function (item) {
                obj[item[key]] = vKey ? item[vKey] : item;
            });
            return obj;
        };
        XHttpUtils.data2Arr = function (obj, key) {
            var _a;
            var arr = [];
            if (obj.length === 0) {
                return arr;
            }
            for (var k in obj) {
                ((_a = obj[k]) === null || _a === void 0 ? void 0 : _a[key]) && arr.push(obj[k][key]);
            }
            return arr;
        };
        return XHttpUtils;
    }());

    exports.Axios = Axios;
    exports.XHttp = XHttp;
    exports.XHttpUtils = XHttpUtils;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
