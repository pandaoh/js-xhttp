import axios from 'axios';
import axiosRetry from 'axios-retry';

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

var Axios = axios;
var XHttpMethod;
(function (XHttpMethod) {
    XHttpMethod["GET"] = "GET";
    XHttpMethod["POST"] = "POST";
    XHttpMethod["PUT"] = "PUT";
    XHttpMethod["DELETE"] = "DELETE";
    XHttpMethod["PATCH"] = "PATCH";
    XHttpMethod["OPTIONS"] = "OPTIONS";
})(XHttpMethod || (XHttpMethod = {}));
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
    return XHttpUtils;
}());
var XHttpClass = (function () {
    function XHttpClass(options, axiosConfig) {
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
        this.instance = axios.create(this._defaultAxiosConfig);
        this._initAxiosRetry();
        this._initInterceptors();
        return this;
    }
    XHttpClass.prototype._initAxiosRetry = function () {
        var _this = this;
        if (this._retryConfig) {
            axiosRetry(this.instance, {
                retries: this._retryConfig.retry,
                retryDelay: function (retryCount) {
                    return retryCount * _this._retryConfig.delay;
                },
                shouldResetTimeout: true,
                retryCondition: function (error) {
                    var _a;
                    if (axiosRetry.isNetworkOrIdempotentRequestError(error)) {
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
                }
            });
        }
    };
    XHttpClass.prototype._initInterceptors = function () {
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
            if (((_a = _this._requestHandler) === null || _a === void 0 ? void 0 : _a.call(_this, config)) === false) {
                config === null || config === void 0 ? void 0 : config.cancelRequest();
                return;
            }
            return config;
        }, function (error) {
            if (!axios.isCancel(error)) {
                if (_this._cancelDuplicatedRequest) {
                    _this._pendingRequests.clear();
                }
                _this._whiteListCancelTokens = [];
                _this._cancelTokens = [];
            }
            return Promise.reject(error);
        });
        this.instance.interceptors.response.use(function (response) {
            var _a, _b, _c;
            if (_this._cancelDuplicatedRequest && !((_a = response.config) === null || _a === void 0 ? void 0 : _a.cancelToken)) {
                _this._removePendingRequest(response);
            }
            if (((_b = _this._responseHandler) === null || _b === void 0 ? void 0 : _b.call(_this, response)) === false) {
                (_c = response.config) === null || _c === void 0 ? void 0 : _c.cancelRequest();
                return;
            }
            return {
                status: response === null || response === void 0 ? void 0 : response.status,
                statusText: response === null || response === void 0 ? void 0 : response.statusText,
                data: response === null || response === void 0 ? void 0 : response.data
            };
        }, function (error) {
            var _a;
            if (!axios.isCancel(error)) {
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
    XHttpClass.prototype._addPendingRequest = function (config) {
        var _this = this;
        var url = [config.method, config.url, JSON.stringify(config.params), JSON.stringify(config.data)].join('&');
        config.cancelToken = new axios.CancelToken(function (cancel) {
            if (!_this._pendingRequests.has(url)) {
                _this._pendingRequests.set(url, cancel);
                config.cancelRequest = cancel;
            }
        });
    };
    XHttpClass.prototype._removePendingRequest = function (config) {
        var url = [config.method, config.url, JSON.stringify(config.params), JSON.stringify(config.data)].join('&');
        if (this._pendingRequests.has(url)) {
            var cancel = this._pendingRequests.get(url);
            cancel(url);
            this._pendingRequests.delete(url);
        }
    };
    XHttpClass.prototype.request = function (method, url, config, isWhiteList) {
        if (config === void 0) { config = {}; }
        if (isWhiteList === void 0) { isWhiteList = false; }
        return __awaiter(this, void 0, void 0, function () {
            var requestConfig, cancelTokenSource, cancelToken;
            var _this = this;
            return __generator(this, function (_a) {
                requestConfig = __assign(__assign({}, config), { url: url, method: method });
                if (!this._cancelDuplicatedRequest || isWhiteList) {
                    cancelTokenSource = axios.CancelToken.source();
                    cancelToken = cancelTokenSource.token;
                    if (isWhiteList) {
                        this._whiteListCancelTokens.push(cancelTokenSource);
                    }
                    else {
                        this._cancelTokens.push(cancelTokenSource);
                    }
                    requestConfig.cancelToken = cancelToken;
                    requestConfig.cancelRequest = cancelTokenSource.cancel;
                }
                return [2, this.instance
                        .request(requestConfig)
                        .then(function (res) {
                        return res.data;
                    })
                        .catch(function (error) {
                        var _a;
                        (_a = _this._errorHandler) === null || _a === void 0 ? void 0 : _a.call(_this, error);
                        return error;
                    })
                        .finally(function () {
                        var _a;
                        (_a = _this._requestFinally) === null || _a === void 0 ? void 0 : _a.call(_this);
                    })];
            });
        });
    };
    XHttpClass.prototype.get = function (url, params, config, isWhiteList) {
        if (params === void 0) { params = {}; }
        if (config === void 0) { config = {}; }
        if (isWhiteList === void 0) { isWhiteList = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.request(XHttpMethod.GET, url, __assign(__assign({}, config), { params: params }), isWhiteList)];
            });
        });
    };
    XHttpClass.prototype.post = function (url, data, config, isWhiteList) {
        if (data === void 0) { data = {}; }
        if (config === void 0) { config = {}; }
        if (isWhiteList === void 0) { isWhiteList = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.request(XHttpMethod.POST, url, __assign(__assign({}, config), { data: data }), isWhiteList)];
            });
        });
    };
    XHttpClass.prototype.put = function (url, data, config, isWhiteList) {
        if (data === void 0) { data = {}; }
        if (config === void 0) { config = {}; }
        if (isWhiteList === void 0) { isWhiteList = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.request(XHttpMethod.PUT, url, __assign(__assign({}, config), { data: data }), isWhiteList)];
            });
        });
    };
    XHttpClass.prototype.patch = function (url, data, config, isWhiteList) {
        if (data === void 0) { data = {}; }
        if (config === void 0) { config = {}; }
        if (isWhiteList === void 0) { isWhiteList = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.request(XHttpMethod.PATCH, url, __assign(__assign({}, config), { data: data }), isWhiteList)];
            });
        });
    };
    XHttpClass.prototype.delete = function (url, data, config, isWhiteList) {
        if (data === void 0) { data = {}; }
        if (config === void 0) { config = {}; }
        if (isWhiteList === void 0) { isWhiteList = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.request(XHttpMethod.DELETE, url, __assign(__assign({}, config), { data: data }), isWhiteList)];
            });
        });
    };
    XHttpClass.prototype.postForm = function (url, data, config, isWhiteList) {
        if (data === void 0) { data = {}; }
        if (config === void 0) { config = {}; }
        if (isWhiteList === void 0) { isWhiteList = false; }
        return __awaiter(this, void 0, void 0, function () {
            var formData;
            return __generator(this, function (_a) {
                formData = new FormData();
                Object.keys(data).forEach(function (key) {
                    formData.append(key, XHttpUtils.typeof(data[key]) == 'object' ? JSON.stringify(data[key]) : data[key]);
                });
                return [2, this.request(XHttpMethod.POST, url, __assign(__assign({}, config), { data: formData, headers: {
                            'Content-Type': 'multipart/form-data;charset=UTF-8;'
                        } }), isWhiteList)];
            });
        });
    };
    XHttpClass.prototype.postFile = function (url, files, name, hasIndex, hasBrackets, config, isWhiteList) {
        if (name === void 0) { name = 'file'; }
        if (hasIndex === void 0) { hasIndex = false; }
        if (hasBrackets === void 0) { hasBrackets = false; }
        if (config === void 0) { config = {}; }
        if (isWhiteList === void 0) { isWhiteList = false; }
        return __awaiter(this, void 0, void 0, function () {
            var formData;
            return __generator(this, function (_a) {
                formData = new FormData();
                if (Array.isArray(files)) {
                    files.forEach(function (file, fileIndex) {
                        hasBrackets
                            ? formData.append(hasIndex ? "".concat(name, "[]") : "".concat(name, "[").concat(fileIndex, "]"), file)
                            : formData.append(name, file);
                    });
                }
                else {
                    formData.append(name, files);
                }
                return [2, this.request(XHttpMethod.POST, url, __assign(__assign({}, config), { data: formData, headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        } }), isWhiteList)];
            });
        });
    };
    XHttpClass.prototype.cancelRequest = function (message) {
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
    XHttpClass.prototype.cancelWhiteListRequest = function (message) {
        this._whiteListCancelTokens.forEach(function (cancelTokenSource) {
            cancelTokenSource === null || cancelTokenSource === void 0 ? void 0 : cancelTokenSource.cancel(message);
        });
        return this;
    };
    XHttpClass.prototype.getCancelToken = function () {
        return axios.CancelToken.source();
    };
    XHttpClass.prototype.getBaseURL = function () {
        return this.instance.defaults.baseURL;
    };
    XHttpClass.prototype.setBaseURL = function (url) {
        this.instance.defaults.baseURL = url;
        return this;
    };
    XHttpClass.prototype.getHeaders = function () {
        return this.instance.defaults.headers;
    };
    XHttpClass.prototype.setHeaders = function (headers) {
        this.instance.defaults.headers = headers;
        return this;
    };
    XHttpClass.prototype.getHeader = function (key) {
        return this.instance.defaults.headers.common[key];
    };
    XHttpClass.prototype.setHeader = function (key, val) {
        if (val) {
            this.instance.defaults.headers.common[key] = val;
        }
        else {
            delete this.instance.defaults.headers.common[key];
        }
        return this;
    };
    XHttpClass.prototype.setRequestTimeout = function (timeout) {
        this.instance.defaults.timeout = timeout;
        return this;
    };
    XHttpClass.prototype.getAuthToken = function () {
        var token = this.getHeader('Authorization');
        if (null == token) {
            return null;
        }
        return token;
    };
    XHttpClass.prototype.setAuthToken = function (token) {
        this.setHeader('Authorization', token);
        return this;
    };
    XHttpClass.prototype.isCancel = function (error) {
        return axios.isCancel(error);
    };
    XHttpClass.prototype.getInstance = function () {
        return this.instance;
    };
    XHttpClass.prototype.create = function (options, axiosConfig) {
        if (axiosConfig === void 0) { axiosConfig = {}; }
        return new XHttpClass(options, axiosConfig);
    };
    return XHttpClass;
}());
var XHttp = new XHttpClass();

export { Axios, XHttp, XHttpMethod, XHttpUtils, XHttp as default };
