(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios'), require('axios-retry')) :
  typeof define === 'function' && define.amd ? define(['exports', 'axios', 'axios-retry'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.xhttp = {}, global.axios, global.axiosRetry));
})(this, (function (exports, axios, axiosRetry) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
  var axiosRetry__default = /*#__PURE__*/_interopDefaultLegacy(axiosRetry);

  /******************************************************************************
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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

  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  var Axios = axios__default["default"];
  exports.XHttpMethod = void 0;
  (function (XHttpMethod) {
      XHttpMethod["GET"] = "GET";
      XHttpMethod["POST"] = "POST";
      XHttpMethod["PUT"] = "PUT";
      XHttpMethod["DELETE"] = "DELETE";
      XHttpMethod["PATCH"] = "PATCH";
      XHttpMethod["OPTIONS"] = "OPTIONS";
      XHttpMethod["get"] = "GET";
      XHttpMethod["post"] = "POST";
      XHttpMethod["put"] = "PUT";
      XHttpMethod["delete"] = "DELETE";
      XHttpMethod["patch"] = "PATCH";
      XHttpMethod["options"] = "OPTIONS";
  })(exports.XHttpMethod || (exports.XHttpMethod = {}));
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
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
          this.timeout = 30000;
          this._cancelTokens = [];
          this._whiteListCancelTokens = [];
          this._cancelDuplicatedRequest = (_a = options === null || options === void 0 ? void 0 : options.cancelDuplicatedRequest) !== null && _a !== void 0 ? _a : true;
          if (this._cancelDuplicatedRequest) {
              this._pendingRequests = new Map();
          }
          this._rejectErrorPromise = (_b = options === null || options === void 0 ? void 0 : options.rejectErrorPromise) !== null && _b !== void 0 ? _b : true;
          this._retryConfig = (_c = options === null || options === void 0 ? void 0 : options.retryConfig) !== null && _c !== void 0 ? _c : null;
          this._requestHandler = (_d = options === null || options === void 0 ? void 0 : options.requestHandler) !== null && _d !== void 0 ? _d : undefined;
          this._responseHandler = (_e = options === null || options === void 0 ? void 0 : options.responseHandler) !== null && _e !== void 0 ? _e : undefined;
          this._errorHandler = (_f = options === null || options === void 0 ? void 0 : options.errorHandler) !== null && _f !== void 0 ? _f : undefined;
          this._requestFinally = (_g = options === null || options === void 0 ? void 0 : options.requestFinally) !== null && _g !== void 0 ? _g : undefined;
          this._setRequestHeaders = (_h = options === null || options === void 0 ? void 0 : options.setRequestHeaders) !== null && _h !== void 0 ? _h : undefined;
          this._formatResultAdaptor = (_j = options === null || options === void 0 ? void 0 : options.formatResultAdaptor) !== null && _j !== void 0 ? _j : undefined;
          this._defaultAxiosConfig = __assign({ timeout: (_k = options === null || options === void 0 ? void 0 : options.timeout) !== null && _k !== void 0 ? _k : this.timeout, validateStatus: function (status) {
                  return true;
              } }, axiosConfig);
          this.instance = axios__default["default"].create(this._defaultAxiosConfig);
          this._initAxiosRetry();
          this._initInterceptors();
          return this;
      }
      XHttpClass.prototype._initAxiosRetry = function () {
          var _this = this;
          if (this._retryConfig) {
              axiosRetry__default["default"](this.instance, {
                  retries: this._retryConfig.retry,
                  retryDelay: function (retryCount) {
                      return retryCount * _this._retryConfig.delay;
                  },
                  shouldResetTimeout: true,
                  retryCondition: function (error) {
                      var _a, _b, _c;
                      if (((_a = error.message) === null || _a === void 0 ? void 0 : _a.includes('not-retry')) ||
                          axios__default["default"].isCancel(error) ||
                          ((_b = error.message) === null || _b === void 0 ? void 0 : _b.includes('custom-error'))) {
                          return false;
                      }
                      if (axiosRetry__default["default"].isNetworkOrIdempotentRequestError(error)) {
                          return true;
                      }
                      if (!error.code) {
                          return true;
                      }
                      if (['ECONNRESET', 'ETIMEDOUT'].includes(error.code)) {
                          return true;
                      }
                      if (error.code == 'ECONNABORTED' && ((_c = error.message) === null || _c === void 0 ? void 0 : _c.includes('timeout'))) {
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
              if (_this._cancelTokens.length > 100) {
                  _this._cancelTokens = [];
              }
              if (_this._whiteListCancelTokens.length > 100) {
                  _this._whiteListCancelTokens = [];
              }
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
                  _this._removePendingRequest(response.config);
              }
              (_b = _this._responseHandler) === null || _b === void 0 ? void 0 : _b.call(_this, response);
              return {
                  status: response === null || response === void 0 ? void 0 : response.status,
                  statusText: response === null || response === void 0 ? void 0 : response.statusText,
                  data: response === null || response === void 0 ? void 0 : response.data
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
      XHttpClass.prototype._addPendingRequest = function (config) {
          var _this = this;
          var url = [config.method, config.url, JSON.stringify(config.params), JSON.stringify(config.data)].join('&');
          config.cancelToken = new axios__default["default"].CancelToken(function (cancel) {
              if (!_this._pendingRequests.has(url)) {
                  _this._pendingRequests.set(url, cancel);
                  config.cancelRequest = cancel;
              }
          });
      };
      XHttpClass.prototype._removePendingRequest = function (config) {
          var url = [
              config.method,
              config.url,
              JSON.stringify(XHttpUtils.typeof(config.params) == 'string' ? JSON.parse(config.params) : config.params),
              JSON.stringify(XHttpUtils.typeof(config.data) == 'string' ? JSON.parse(config.data) : config.data)
          ].join('&');
          if (this._pendingRequests.has(url)) {
              var cancel = this._pendingRequests.get(url);
              cancel(url);
              this._pendingRequests.delete(url);
          }
      };
      XHttpClass.prototype.request = function (method, url, config, isWhiteList) {
          var _a, _b, _c;
          if (config === void 0) { config = {}; }
          if (isWhiteList === void 0) { isWhiteList = false; }
          return __awaiter(this, void 0, void 0, function () {
              var requestConfig, cancelTokenSource, cancelToken;
              var _this = this;
              return __generator(this, function (_d) {
                  requestConfig = __assign({ url: url, method: method }, config);
                  requestConfig.rejectErrorPromise = (_a = requestConfig.rejectErrorPromise) !== null && _a !== void 0 ? _a : this._rejectErrorPromise;
                  requestConfig.formatResultAdaptor = (_b = requestConfig.formatResultAdaptor) !== null && _b !== void 0 ? _b : this._formatResultAdaptor;
                  requestConfig.isWhiteList = (_c = isWhiteList !== null && isWhiteList !== void 0 ? isWhiteList : config.isWhiteList) !== null && _c !== void 0 ? _c : false;
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
                      requestConfig.cancelRequest = cancelTokenSource.cancel;
                  }
                  return [2, this.instance
                          .request(requestConfig)
                          .then(function (res) {
                          var _a;
                          if (requestConfig.formatResultAdaptor) {
                              return (_a = requestConfig.formatResultAdaptor) === null || _a === void 0 ? void 0 : _a.call(_this, res.data);
                          }
                          return res.data;
                      })
                          .catch(function (error) {
                          var _a;
                          return (_a = _this._errorHandler) === null || _a === void 0 ? void 0 : _a.call(_this, error, requestConfig);
                      })
                          .finally(function () {
                          var _a;
                          (_a = _this._requestFinally) === null || _a === void 0 ? void 0 : _a.call(_this, requestConfig);
                      })];
              });
          });
      };
      XHttpClass.prototype.axiosRequest = function (urlOrConfig, config) {
          return __awaiter(this, void 0, void 0, function () {
              var url, finalConfig, isWhiteList;
              return __generator(this, function (_a) {
                  isWhiteList = false;
                  if (typeof urlOrConfig === 'string') {
                      url = urlOrConfig;
                      finalConfig = config || {};
                  }
                  else {
                      url = urlOrConfig.url || '';
                      finalConfig = urlOrConfig;
                      isWhiteList = urlOrConfig.isWhiteList || false;
                  }
                  return [2, this.request((finalConfig === null || finalConfig === void 0 ? void 0 : finalConfig.method) || 'GET', url, finalConfig, isWhiteList)];
              });
          });
      };
      XHttpClass.prototype.allInRequest = function (config) {
          if (config === void 0) { config = {}; }
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  return [2, this.request((config === null || config === void 0 ? void 0 : config.method) || 'GET', (config === null || config === void 0 ? void 0 : config.url) || '', config || {}, (config === null || config === void 0 ? void 0 : config.isWhiteList) || false)];
              });
          });
      };
      XHttpClass.prototype.get = function (url, params, config, isWhiteList) {
          if (params === void 0) { params = {}; }
          if (config === void 0) { config = {}; }
          if (isWhiteList === void 0) { isWhiteList = false; }
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  return [2, this.request(exports.XHttpMethod.GET, url, __assign(__assign({}, config), { params: params }), isWhiteList)];
              });
          });
      };
      XHttpClass.prototype.post = function (url, data, config, isWhiteList) {
          if (data === void 0) { data = {}; }
          if (config === void 0) { config = {}; }
          if (isWhiteList === void 0) { isWhiteList = false; }
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  return [2, this.request(exports.XHttpMethod.POST, url, __assign(__assign({}, config), { data: data }), isWhiteList)];
              });
          });
      };
      XHttpClass.prototype.put = function (url, data, config, isWhiteList) {
          if (data === void 0) { data = {}; }
          if (config === void 0) { config = {}; }
          if (isWhiteList === void 0) { isWhiteList = false; }
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  return [2, this.request(exports.XHttpMethod.PUT, url, __assign(__assign({}, config), { data: data }), isWhiteList)];
              });
          });
      };
      XHttpClass.prototype.patch = function (url, data, config, isWhiteList) {
          if (data === void 0) { data = {}; }
          if (config === void 0) { config = {}; }
          if (isWhiteList === void 0) { isWhiteList = false; }
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  return [2, this.request(exports.XHttpMethod.PATCH, url, __assign(__assign({}, config), { data: data }), isWhiteList)];
              });
          });
      };
      XHttpClass.prototype.delete = function (url, data, config, isWhiteList) {
          if (data === void 0) { data = {}; }
          if (config === void 0) { config = {}; }
          if (isWhiteList === void 0) { isWhiteList = false; }
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  return [2, this.request(exports.XHttpMethod.DELETE, url, __assign(__assign({}, config), { data: data }), isWhiteList)];
              });
          });
      };
      XHttpClass.prototype.postForm = function (url, data, hasBrackets, hasIndex, config, isWhiteList) {
          if (data === void 0) { data = {}; }
          if (hasBrackets === void 0) { hasBrackets = false; }
          if (hasIndex === void 0) { hasIndex = false; }
          if (config === void 0) { config = {}; }
          if (isWhiteList === void 0) { isWhiteList = false; }
          return __awaiter(this, void 0, void 0, function () {
              var formData;
              return __generator(this, function (_a) {
                  formData = new FormData();
                  Object.keys(data).forEach(function (key) {
                      if (Array.isArray(data[key])) {
                          for (var arrIndex in data[key]) {
                              hasBrackets
                                  ? formData.append(hasIndex ? "".concat(key, "[]") : "".concat(key, "[").concat(arrIndex, "]"), data[key][arrIndex])
                                  : formData.append(key, data[key][arrIndex]);
                          }
                      }
                      else {
                          formData.append(key, XHttpUtils.typeof(data[key]) == 'object' ? JSON.stringify(data[key]) : data[key]);
                      }
                  });
                  return [2, this.request(exports.XHttpMethod.POST, url, __assign({ data: formData, headers: {
                              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;'
                          } }, config), isWhiteList)];
              });
          });
      };
      XHttpClass.prototype.postFile = function (url, files, name, hasBrackets, hasIndex, config, isWhiteList) {
          if (name === void 0) { name = 'file'; }
          if (hasBrackets === void 0) { hasBrackets = false; }
          if (hasIndex === void 0) { hasIndex = false; }
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
                  return [2, this.request(exports.XHttpMethod.POST, url, __assign({ data: formData, headers: {
                              'Content-Type': 'multipart/form-data'
                          } }, config), isWhiteList)];
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
              this._cancelTokens = [];
          }
          return this;
      };
      XHttpClass.prototype.cancelWhiteListRequest = function (message) {
          this._whiteListCancelTokens.forEach(function (cancelTokenSource) {
              cancelTokenSource === null || cancelTokenSource === void 0 ? void 0 : cancelTokenSource.cancel(message);
          });
          this._whiteListCancelTokens = [];
          return this;
      };
      XHttpClass.prototype.getCancelToken = function () {
          return axios__default["default"].CancelToken.source();
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
          return axios__default["default"].isCancel(error);
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
  var CODE_MSG = {
      200: '服务器成功返回请求的数据。',
      201: '新建或修改数据成功。',
      202: '一个请求已经进入后台排队（异步任务）。',
      204: '删除数据成功。',
      301: '资源永久移动，请求的资源已被永久的移动到新 URI，返回信息会包括新的 URI，浏览器会自动定向到新 URI。',
      302: '资源临时移动，只是临时被移动，客户端可继续使用原有 URI。',
      303: '查看其它地址，与 301 类似，使用 GET 和 POST 请求查看。',
      304: '资源未修改，所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源。',
      400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
      401: '用户没有权限（令牌、用户名、密码错误）。',
      403: '用户得到授权，但是访问是被禁止的。',
      404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
      406: '请求的格式不可得。',
      410: '请求的资源被永久删除，且不会再得到的。',
      422: '当创建一个对象时，发生一个验证错误。',
      500: '服务器发生错误，请检查服务器。',
      502: '网关错误。',
      503: '服务不可用，服务器暂时过载或维护。',
      504: '网关超时。'
  };
  var XHttp = new XHttpClass();

  exports.Axios = Axios;
  exports.CODE_MSG = CODE_MSG;
  exports.XHttp = XHttp;
  exports.XHttpClass = XHttpClass;
  exports.XHttpUtils = XHttpUtils;
  exports["default"] = XHttp;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
