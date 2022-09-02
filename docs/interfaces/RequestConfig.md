[js-xhttp - v1.5.1](../README.md) / RequestConfig

# Interface: RequestConfig

## Hierarchy

- [`AxiosRequestConfig`](AxiosRequestConfig.md)

  ↳ **`RequestConfig`**

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [adapter](RequestConfig.md#adapter)
- [auth](RequestConfig.md#auth)
- [axios-retry](RequestConfig.md#axios-retry)
- [baseURL](RequestConfig.md#baseurl)
- [cancelToken](RequestConfig.md#canceltoken)
- [data](RequestConfig.md#data)
- [decompress](RequestConfig.md#decompress)
- [headers](RequestConfig.md#headers)
- [httpAgent](RequestConfig.md#httpagent)
- [httpsAgent](RequestConfig.md#httpsagent)
- [insecureHTTPParser](RequestConfig.md#insecurehttpparser)
- [maxBodyLength](RequestConfig.md#maxbodylength)
- [maxContentLength](RequestConfig.md#maxcontentlength)
- [maxRedirects](RequestConfig.md#maxredirects)
- [method](RequestConfig.md#method)
- [params](RequestConfig.md#params)
- [proxy](RequestConfig.md#proxy)
- [rejectErrorPromise](RequestConfig.md#rejecterrorpromise)
- [responseEncoding](RequestConfig.md#responseencoding)
- [responseType](RequestConfig.md#responsetype)
- [signal](RequestConfig.md#signal)
- [socketPath](RequestConfig.md#socketpath)
- [timeout](RequestConfig.md#timeout)
- [timeoutErrorMessage](RequestConfig.md#timeouterrormessage)
- [transformRequest](RequestConfig.md#transformrequest)
- [transformResponse](RequestConfig.md#transformresponse)
- [transitional](RequestConfig.md#transitional)
- [url](RequestConfig.md#url)
- [validateStatus](RequestConfig.md#validatestatus)
- [withCredentials](RequestConfig.md#withcredentials)
- [xsrfCookieName](RequestConfig.md#xsrfcookiename)
- [xsrfHeaderName](RequestConfig.md#xsrfheadername)

### Methods

- [onDownloadProgress](RequestConfig.md#ondownloadprogress)
- [onUploadProgress](RequestConfig.md#onuploadprogress)
- [paramsSerializer](RequestConfig.md#paramsserializer)

## Properties

### adapter

• `Optional` **adapter**: `AxiosAdapter`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[adapter](AxiosRequestConfig.md#adapter)

___

### auth

• `Optional` **auth**: `AxiosBasicCredentials`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[auth](AxiosRequestConfig.md#auth)

___

### axios-retry

• `Optional` **axios-retry**: `IAxiosRetryConfig`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[axios-retry](AxiosRequestConfig.md#axios-retry)

___

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[baseURL](AxiosRequestConfig.md#baseurl)

___

### cancelToken

• `Optional` **cancelToken**: `CancelToken`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[cancelToken](AxiosRequestConfig.md#canceltoken)

___

### data

• `Optional` **data**: `any`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[data](AxiosRequestConfig.md#data)

___

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[decompress](AxiosRequestConfig.md#decompress)

___

### headers

• `Optional` **headers**: `AxiosRequestHeaders`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[headers](AxiosRequestConfig.md#headers)

___

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[httpAgent](AxiosRequestConfig.md#httpagent)

___

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[httpsAgent](AxiosRequestConfig.md#httpsagent)

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[insecureHTTPParser](AxiosRequestConfig.md#insecurehttpparser)

___

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[maxBodyLength](AxiosRequestConfig.md#maxbodylength)

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[maxContentLength](AxiosRequestConfig.md#maxcontentlength)

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[maxRedirects](AxiosRequestConfig.md#maxredirects)

___

### method

• `Optional` **method**: `Method`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[method](AxiosRequestConfig.md#method)

___

### params

• `Optional` **params**: `any`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[params](AxiosRequestConfig.md#params)

___

### proxy

• `Optional` **proxy**: ``false`` \| `AxiosProxyConfig`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[proxy](AxiosRequestConfig.md#proxy)

___

### rejectErrorPromise

• `Optional` **rejectErrorPromise**: `boolean`

___

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[responseEncoding](AxiosRequestConfig.md#responseencoding)

___

### responseType

• `Optional` **responseType**: `ResponseType`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[responseType](AxiosRequestConfig.md#responsetype)

___

### signal

• `Optional` **signal**: `AbortSignal`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[signal](AxiosRequestConfig.md#signal)

___

### socketPath

• `Optional` **socketPath**: ``null`` \| `string`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[socketPath](AxiosRequestConfig.md#socketpath)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[timeout](AxiosRequestConfig.md#timeout)

___

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[timeoutErrorMessage](AxiosRequestConfig.md#timeouterrormessage)

___

### transformRequest

• `Optional` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[transformRequest](AxiosRequestConfig.md#transformrequest)

___

### transformResponse

• `Optional` **transformResponse**: `AxiosResponseTransformer` \| `AxiosResponseTransformer`[]

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[transformResponse](AxiosRequestConfig.md#transformresponse)

___

### transitional

• `Optional` **transitional**: `TransitionalOptions`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[transitional](AxiosRequestConfig.md#transitional)

___

### url

• `Optional` **url**: `string`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[url](AxiosRequestConfig.md#url)

___

### validateStatus

• `Optional` **validateStatus**: ``null`` \| (`status`: `number`) => `boolean`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[validateStatus](AxiosRequestConfig.md#validatestatus)

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[withCredentials](AxiosRequestConfig.md#withcredentials)

___

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[xsrfCookieName](AxiosRequestConfig.md#xsrfcookiename)

___

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[xsrfHeaderName](AxiosRequestConfig.md#xsrfheadername)

## Methods

### onDownloadProgress

▸ `Optional` **onDownloadProgress**(`progressEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `any` |

#### Returns

`void`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[onDownloadProgress](AxiosRequestConfig.md#ondownloadprogress)

___

### onUploadProgress

▸ `Optional` **onUploadProgress**(`progressEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `any` |

#### Returns

`void`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[onUploadProgress](AxiosRequestConfig.md#onuploadprogress)

___

### paramsSerializer

▸ `Optional` **paramsSerializer**(`params`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`string`

#### Inherited from

[AxiosRequestConfig](AxiosRequestConfig.md).[paramsSerializer](AxiosRequestConfig.md#paramsserializer)
