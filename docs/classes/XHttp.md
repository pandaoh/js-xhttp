[js-xhttp - v1.1.2](../README.md) / XHttp

# Class: XHttp

## Table of contents

### Constructors

- [constructor](XHttp.md#constructor)

### Properties

- [\_cancelDuplicatedRequest](XHttp.md#_cancelduplicatedrequest)
- [\_cancelTokens](XHttp.md#_canceltokens)
- [\_defaultAxiosConfig](XHttp.md#_defaultaxiosconfig)
- [\_errorHandler](XHttp.md#_errorhandler)
- [\_pendingRequests](XHttp.md#_pendingrequests)
- [\_requestFinally](XHttp.md#_requestfinally)
- [\_requestHandler](XHttp.md#_requesthandler)
- [\_responseHandler](XHttp.md#_responsehandler)
- [\_retryConfig](XHttp.md#_retryconfig)
- [\_setRequestHeaders](XHttp.md#_setrequestheaders)
- [\_whiteListCancelTokens](XHttp.md#_whitelistcanceltokens)
- [instance](XHttp.md#instance)
- [timeout](XHttp.md#timeout)

### Methods

- [\_addPendingRequest](XHttp.md#_addpendingrequest)
- [\_initAxiosRetry](XHttp.md#_initaxiosretry)
- [\_initInterceptors](XHttp.md#_initinterceptors)
- [\_removePendingRequest](XHttp.md#_removependingrequest)
- [cancelRequest](XHttp.md#cancelrequest)
- [cancelWhiteListRequest](XHttp.md#cancelwhitelistrequest)
- [delete](XHttp.md#delete)
- [get](XHttp.md#get)
- [getAuthToken](XHttp.md#getauthtoken)
- [getBaseURL](XHttp.md#getbaseurl)
- [getCancelToken](XHttp.md#getcanceltoken)
- [getHeader](XHttp.md#getheader)
- [getHeaders](XHttp.md#getheaders)
- [getInstance](XHttp.md#getinstance)
- [patch](XHttp.md#patch)
- [post](XHttp.md#post)
- [postFile](XHttp.md#postfile)
- [postForm](XHttp.md#postform)
- [put](XHttp.md#put)
- [request](XHttp.md#request)
- [setAuthToken](XHttp.md#setauthtoken)
- [setBaseURL](XHttp.md#setbaseurl)
- [setHeader](XHttp.md#setheader)
- [setHeaders](XHttp.md#setheaders)
- [setRequestTimeout](XHttp.md#setrequesttimeout)

## Constructors

### constructor

• **new XHttp**(`options?`, `axiosConfig?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `XHttpOptions` |
| `axiosConfig` | `AxiosRequestConfig`<`any`\> |

## Properties

### \_cancelDuplicatedRequest

• `Private` **\_cancelDuplicatedRequest**: `boolean`

___

### \_cancelTokens

• `Private` **\_cancelTokens**: `any`[] = `[]`

___

### \_defaultAxiosConfig

• `Private` **\_defaultAxiosConfig**: `undefined` \| `AxiosRequestConfig`<`any`\>

___

### \_errorHandler

• `Private` **\_errorHandler**: `undefined` \| `HandlerFunction`<`any`\>

___

### \_pendingRequests

• `Private` **\_pendingRequests**: `any`

___

### \_requestFinally

• `Private` **\_requestFinally**: `undefined` \| `Function`

___

### \_requestHandler

• `Private` **\_requestHandler**: `undefined` \| `HandlerFunction`<`any`\>

___

### \_responseHandler

• `Private` **\_responseHandler**: `undefined` \| `HandlerFunction`<`any`\>

___

### \_retryConfig

• `Private` **\_retryConfig**: `any`

___

### \_setRequestHeaders

• `Private` **\_setRequestHeaders**: `undefined` \| `HandlerFunction`<`object`\>

___

### \_whiteListCancelTokens

• `Private` **\_whiteListCancelTokens**: `any`[] = `[]`

___

### instance

• **instance**: `AxiosInstance`

___

### timeout

• **timeout**: `number` = `30000`

## Methods

### \_addPendingRequest

▸ `Private` **_addPendingRequest**(`config`): `void`

添加请求到 pending Map 中

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |

#### Returns

`void`

___

### \_initAxiosRetry

▸ `Private` **_initAxiosRetry**(): `void`

初始化 axios-retry

#### Returns

`void`

___

### \_initInterceptors

▸ `Private` **_initInterceptors**(): `void`

初始化拦截器

#### Returns

`void`

___

### \_removePendingRequest

▸ `Private` **_removePendingRequest**(`config`): `void`

取消重复的等待状态请求

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |

#### Returns

`void`

___

### cancelRequest

▸ **cancelRequest**(`message`): [`XHttp`](XHttp.md)

取消所有普通请求

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`XHttp`](XHttp.md)

___

### cancelWhiteListRequest

▸ **cancelWhiteListRequest**(`message`): [`XHttp`](XHttp.md)

取消所有白名单请求

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`XHttp`](XHttp.md)

___

### delete

▸ **delete**(`url`, `data?`, `config?`, `isWhiteList?`): `Promise`<`Response`<`any`\>\>

delete

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `data` | `any` | `{}` |
| `config` | `AxiosRequestConfig`<`any`\> | `{}` |
| `isWhiteList` | `boolean` | `false` |

#### Returns

`Promise`<`Response`<`any`\>\>

___

### get

▸ **get**(`url`, `params?`, `config?`, `isWhiteList?`): `Promise`<`Response`<`any`\>\>

post

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `params` | `any` | `{}` |
| `config` | `AxiosRequestConfig`<`any`\> | `{}` |
| `isWhiteList` | `boolean` | `false` |

#### Returns

`Promise`<`Response`<`any`\>\>

___

### getAuthToken

▸ **getAuthToken**(): `any`

获取 token

#### Returns

`any`

___

### getBaseURL

▸ **getBaseURL**(): `undefined` \| `string`

获取 baseURL

#### Returns

`undefined` \| `string`

___

### getCancelToken

▸ **getCancelToken**(): `any`

获取一个 CancelToken

#### Returns

`any`

___

### getHeader

▸ **getHeader**(`key`): `any`

获取请求头某个值

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`any`

___

### getHeaders

▸ **getHeaders**(): `any`

获取请求头

#### Returns

`any`

___

### getInstance

▸ **getInstance**(): `AxiosInstance`

获取 XHttp 实例

**`memberof`** XHttp

#### Returns

`AxiosInstance`

{AxiosInstance}

___

### patch

▸ **patch**(`url`, `data?`, `config?`, `isWhiteList?`): `Promise`<`Response`<`any`\>\>

patch

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `data` | `any` | `{}` |
| `config` | `AxiosRequestConfig`<`any`\> | `{}` |
| `isWhiteList` | `boolean` | `false` |

#### Returns

`Promise`<`Response`<`any`\>\>

___

### post

▸ **post**(`url`, `data?`, `config?`, `isWhiteList?`): `Promise`<`Response`<`any`\>\>

post

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `data` | `any` | `{}` |
| `config` | `AxiosRequestConfig`<`any`\> | `{}` |
| `isWhiteList` | `boolean` | `false` |

#### Returns

`Promise`<`Response`<`any`\>\>

___

### postFile

▸ **postFile**(`url`, `file`, `name?`, `config?`, `isWhiteList?`): `Promise`<`Response`<`any`\>\>

上传文件

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `file` | `File` | `undefined` |
| `name` | `string` | `'file'` |
| `config` | `AxiosRequestConfig`<`any`\> | `{}` |
| `isWhiteList` | `boolean` | `false` |

#### Returns

`Promise`<`Response`<`any`\>\>

___

### postForm

▸ **postForm**(`url`, `data?`, `config?`, `isWhiteList?`): `Promise`<`Response`<`any`\>\>

上传表单

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `data` | `any` | `{}` |
| `config` | `AxiosRequestConfig`<`any`\> | `{}` |
| `isWhiteList` | `boolean` | `false` |

#### Returns

`Promise`<`Response`<`any`\>\>

___

### put

▸ **put**(`url`, `data?`, `config?`, `isWhiteList?`): `Promise`<`Response`<`any`\>\>

put

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `data` | `any` | `{}` |
| `config` | `AxiosRequestConfig`<`any`\> | `{}` |
| `isWhiteList` | `boolean` | `false` |

#### Returns

`Promise`<`Response`<`any`\>\>

___

### request

▸ **request**(`method`, `url`, `config?`, `isWhiteList?`): `Promise`<`Response`<`any`\>\>

request

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `method` | [`XHttpMethod`](../enums/XHttpMethod.md) | `undefined` |
| `url` | `string` | `undefined` |
| `config` | `AxiosRequestConfig`<`any`\> | `{}` |
| `isWhiteList` | `boolean` | `false` |

#### Returns

`Promise`<`Response`<`any`\>\>

___

### setAuthToken

▸ **setAuthToken**(`token`): [`XHttp`](XHttp.md)

设置 token

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

[`XHttp`](XHttp.md)

___

### setBaseURL

▸ **setBaseURL**(`url?`): [`XHttp`](XHttp.md)

设置 baseURL

#### Parameters

| Name | Type |
| :------ | :------ |
| `url?` | `string` |

#### Returns

[`XHttp`](XHttp.md)

___

### setHeader

▸ **setHeader**(`key`, `val?`): [`XHttp`](XHttp.md)

设置请求头某个值

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `val?` | `string` |

#### Returns

[`XHttp`](XHttp.md)

___

### setHeaders

▸ **setHeaders**(`headers`): [`XHttp`](XHttp.md)

设置请求头

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | `any` |

#### Returns

[`XHttp`](XHttp.md)

___

### setRequestTimeout

▸ **setRequestTimeout**(`timeout`): [`XHttp`](XHttp.md)

设置请求默认超时时间

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |

#### Returns

[`XHttp`](XHttp.md)
