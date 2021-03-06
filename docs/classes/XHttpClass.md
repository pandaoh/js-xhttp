[js-xhttp - v1.4.9](../README.md) / XHttpClass

# Class: XHttpClass

XHttp Class

## Table of contents

### Constructors

- [constructor](XHttpClass.md#constructor)

### Properties

- [\_cancelDuplicatedRequest](XHttpClass.md#_cancelduplicatedrequest)
- [\_cancelTokens](XHttpClass.md#_canceltokens)
- [\_defaultAxiosConfig](XHttpClass.md#_defaultaxiosconfig)
- [\_errorHandler](XHttpClass.md#_errorhandler)
- [\_pendingRequests](XHttpClass.md#_pendingrequests)
- [\_requestFinally](XHttpClass.md#_requestfinally)
- [\_requestHandler](XHttpClass.md#_requesthandler)
- [\_responseHandler](XHttpClass.md#_responsehandler)
- [\_retryConfig](XHttpClass.md#_retryconfig)
- [\_setRequestHeaders](XHttpClass.md#_setrequestheaders)
- [\_whiteListCancelTokens](XHttpClass.md#_whitelistcanceltokens)
- [instance](XHttpClass.md#instance)
- [timeout](XHttpClass.md#timeout)

### Methods

- [\_addPendingRequest](XHttpClass.md#_addpendingrequest)
- [\_initAxiosRetry](XHttpClass.md#_initaxiosretry)
- [\_initInterceptors](XHttpClass.md#_initinterceptors)
- [\_removePendingRequest](XHttpClass.md#_removependingrequest)
- [cancelRequest](XHttpClass.md#cancelrequest)
- [cancelWhiteListRequest](XHttpClass.md#cancelwhitelistrequest)
- [create](XHttpClass.md#create)
- [delete](XHttpClass.md#delete)
- [get](XHttpClass.md#get)
- [getAuthToken](XHttpClass.md#getauthtoken)
- [getBaseURL](XHttpClass.md#getbaseurl)
- [getCancelToken](XHttpClass.md#getcanceltoken)
- [getHeader](XHttpClass.md#getheader)
- [getHeaders](XHttpClass.md#getheaders)
- [getInstance](XHttpClass.md#getinstance)
- [isCancel](XHttpClass.md#iscancel)
- [patch](XHttpClass.md#patch)
- [post](XHttpClass.md#post)
- [postFile](XHttpClass.md#postfile)
- [postForm](XHttpClass.md#postform)
- [put](XHttpClass.md#put)
- [request](XHttpClass.md#request)
- [setAuthToken](XHttpClass.md#setauthtoken)
- [setBaseURL](XHttpClass.md#setbaseurl)
- [setHeader](XHttpClass.md#setheader)
- [setHeaders](XHttpClass.md#setheaders)
- [setRequestTimeout](XHttpClass.md#setrequesttimeout)

## Constructors

### constructor

??? **new XHttpClass**(`options?`, `axiosConfig?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `XHttpOptions` |
| `axiosConfig` | `AxiosRequestConfig`<`any`\> |

## Properties

### \_cancelDuplicatedRequest

??? `Private` **\_cancelDuplicatedRequest**: `boolean`

___

### \_cancelTokens

??? `Private` **\_cancelTokens**: `any`[] = `[]`

___

### \_defaultAxiosConfig

??? `Private` **\_defaultAxiosConfig**: `undefined` \| `AxiosRequestConfig`<`any`\>

___

### \_errorHandler

??? `Private` **\_errorHandler**: `undefined` \| `HandlerFunction`<`any`\>

___

### \_pendingRequests

??? `Private` **\_pendingRequests**: `any`

___

### \_requestFinally

??? `Private` **\_requestFinally**: `undefined` \| `Function`

___

### \_requestHandler

??? `Private` **\_requestHandler**: `undefined` \| `HandlerFunction`<`any`\>

___

### \_responseHandler

??? `Private` **\_responseHandler**: `undefined` \| `HandlerFunction`<`any`\>

___

### \_retryConfig

??? `Private` **\_retryConfig**: `any`

___

### \_setRequestHeaders

??? `Private` **\_setRequestHeaders**: `undefined` \| `HandlerFunction`<`object`\>

___

### \_whiteListCancelTokens

??? `Private` **\_whiteListCancelTokens**: `any`[] = `[]`

___

### instance

??? **instance**: `AxiosInstance`

___

### timeout

??? **timeout**: `number` = `30000`

## Methods

### \_addPendingRequest

??? `Private` **_addPendingRequest**(`config`): `void`

??????????????? pending Map ???

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |

#### Returns

`void`

___

### \_initAxiosRetry

??? `Private` **_initAxiosRetry**(): `void`

????????? axios-retry

#### Returns

`void`

___

### \_initInterceptors

??? `Private` **_initInterceptors**(): `void`

??????????????????

#### Returns

`void`

___

### \_removePendingRequest

??? `Private` **_removePendingRequest**(`config`): `void`

?????????????????????????????????

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |

#### Returns

`void`

___

### cancelRequest

??? **cancelRequest**(`message`): [`XHttpClass`](XHttpClass.md)

????????????????????????

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`XHttpClass`](XHttpClass.md)

___

### cancelWhiteListRequest

??? **cancelWhiteListRequest**(`message`): [`XHttpClass`](XHttpClass.md)

???????????????????????????

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`XHttpClass`](XHttpClass.md)

___

### create

??? **create**(`options?`, `axiosConfig?`): [`XHttpClass`](XHttpClass.md)

?????? XHttp ??????

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `XHttpOptions` | XHttp ?????? |
| `axiosConfig` | `AxiosRequestConfig`<`any`\> | Axios ?????? |

#### Returns

[`XHttpClass`](XHttpClass.md)

___

### delete

??? **delete**(`url`, `data?`, `config?`, `isWhiteList?`): `Promise`<`Response`<`any`\>\>

delete

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` |  |
| `data` | `any` | `{}` |  |
| `config` | `AxiosRequestConfig`<`any`\> | `{}` |  |
| `isWhiteList` | `boolean` | `false` | default[false] |

#### Returns

`Promise`<`Response`<`any`\>\>

___

### get

??? **get**(`url`, `params?`, `config?`, `isWhiteList?`): `Promise`<`Response`<`any`\>\>

get

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` |  |
| `params` | `any` | `{}` |  |
| `config` | `AxiosRequestConfig`<`any`\> | `{}` |  |
| `isWhiteList` | `boolean` | `false` | default[false] |

#### Returns

`Promise`<`Response`<`any`\>\>

___

### getAuthToken

??? **getAuthToken**(): `any`

?????? token

#### Returns

`any`

___

### getBaseURL

??? **getBaseURL**(): `undefined` \| `string`

?????? baseURL

#### Returns

`undefined` \| `string`

___

### getCancelToken

??? **getCancelToken**(): `any`

???????????? CancelToken

#### Returns

`any`

___

### getHeader

??? **getHeader**(`key`): `any`

????????????????????????

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`any`

___

### getHeaders

??? **getHeaders**(): `any`

???????????????

#### Returns

`any`

___

### getInstance

??? **getInstance**(): `AxiosInstance`

?????? XHttp ??????

**`memberof`** XHttp

#### Returns

`AxiosInstance`

{AxiosInstance}

___

### isCancel

??? **isCancel**(`error`): `boolean`

?????????????????????????????????

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`boolean`

___

### patch

??? **patch**(`url`, `data?`, `config?`, `isWhiteList?`): `Promise`<`Response`<`any`\>\>

patch

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` |  |
| `data` | `any` | `{}` |  |
| `config` | `AxiosRequestConfig`<`any`\> | `{}` |  |
| `isWhiteList` | `boolean` | `false` | default[false] |

#### Returns

`Promise`<`Response`<`any`\>\>

___

### post

??? **post**(`url`, `data?`, `config?`, `isWhiteList?`): `Promise`<`Response`<`any`\>\>

post

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` |  |
| `data` | `any` | `{}` |  |
| `config` | `AxiosRequestConfig`<`any`\> | `{}` |  |
| `isWhiteList` | `boolean` | `false` | default[false] |

#### Returns

`Promise`<`Response`<`any`\>\>

___

### postFile

??? **postFile**(`url`, `files`, `name?`, `hasBrackets?`, `hasIndex?`, `config?`, `isWhiteList?`): `Promise`<`Response`<`any`\>\>

????????????

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` |  |
| `files` | `File` \| `File`[] | `undefined` | - |
| `name` | `string` | `'file'` | default['file'] |
| `hasBrackets` | `boolean` | `false` | default[false] |
| `hasIndex` | `boolean` | `false` | default[false] |
| `config` | `AxiosRequestConfig`<`any`\> | `{}` | default[{}] |
| `isWhiteList` | `boolean` | `false` | default[false] |

#### Returns

`Promise`<`Response`<`any`\>\>

___

### postForm

??? **postForm**(`url`, `data?`, `hasBrackets?`, `hasIndex?`, `config?`, `isWhiteList?`): `Promise`<`Response`<`any`\>\>

????????????

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` |  |
| `data` | `any` | `{}` |  |
| `hasBrackets` | `boolean` | `false` | default[false] |
| `hasIndex` | `boolean` | `false` | default[false] |
| `config` | `AxiosRequestConfig`<`any`\> | `{}` | default[{}] |
| `isWhiteList` | `boolean` | `false` | default[false] |

#### Returns

`Promise`<`Response`<`any`\>\>

___

### put

??? **put**(`url`, `data?`, `config?`, `isWhiteList?`): `Promise`<`Response`<`any`\>\>

put

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` |  |
| `data` | `any` | `{}` |  |
| `config` | `AxiosRequestConfig`<`any`\> | `{}` |  |
| `isWhiteList` | `boolean` | `false` | default[false] |

#### Returns

`Promise`<`Response`<`any`\>\>

___

### request

??? **request**(`method`, `url`, `config?`, `isWhiteList?`): `Promise`<`Response`<`any`\>\>

request

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `method` | [`XHttpMethod`](../enums/XHttpMethod.md) \| `Method` | `undefined` |  |
| `url` | `string` | `undefined` |  |
| `config` | `AxiosRequestConfig`<`any`\> | `{}` |  |
| `isWhiteList` | `boolean` | `false` | default[false] |

#### Returns

`Promise`<`Response`<`any`\>\>

___

### setAuthToken

??? **setAuthToken**(`token`): [`XHttpClass`](XHttpClass.md)

?????? token

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

[`XHttpClass`](XHttpClass.md)

___

### setBaseURL

??? **setBaseURL**(`url?`): [`XHttpClass`](XHttpClass.md)

?????? baseURL

#### Parameters

| Name | Type |
| :------ | :------ |
| `url?` | `string` |

#### Returns

[`XHttpClass`](XHttpClass.md)

___

### setHeader

??? **setHeader**(`key`, `val?`): [`XHttpClass`](XHttpClass.md)

????????????????????????

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `val?` | `string` |

#### Returns

[`XHttpClass`](XHttpClass.md)

___

### setHeaders

??? **setHeaders**(`headers`): [`XHttpClass`](XHttpClass.md)

???????????????

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | `any` |

#### Returns

[`XHttpClass`](XHttpClass.md)

___

### setRequestTimeout

??? **setRequestTimeout**(`timeout`): [`XHttpClass`](XHttpClass.md)

??????????????????????????????

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |

#### Returns

[`XHttpClass`](XHttpClass.md)
