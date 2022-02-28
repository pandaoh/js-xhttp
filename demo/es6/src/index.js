import XHttpDefault, { XHttp, XHttpMethod, XHttpUtils, Axios } from '../../../lib/index.js';

console.log({
  XHttpGet: XHttp.get,
  XHttpDefault,
  XHttpMethod,
  XHttpUtils,
  Axios,
  XHttp,
  NewXHttpTimeout: XHttpDefault.create({ timeout: 10 }).getInstance().defaults.timeout,
  XHttpDefaultGet: XHttpDefault.get
});
