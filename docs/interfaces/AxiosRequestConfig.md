[js-xhttp - v1.5.0](../README.md) / AxiosRequestConfig

# Interface: AxiosRequestConfig<D\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `D` | `any` |

## Hierarchy

- **`AxiosRequestConfig`**

  ↳ [`RequestConfig`](RequestConfig.md)

## Table of contents

### Properties

- [adapter](AxiosRequestConfig.md#adapter)
- [auth](AxiosRequestConfig.md#auth)
- [axios-retry](AxiosRequestConfig.md#axios-retry)
- [baseURL](AxiosRequestConfig.md#baseurl)
- [cancelToken](AxiosRequestConfig.md#canceltoken)
- [data](AxiosRequestConfig.md#data)
- [decompress](AxiosRequestConfig.md#decompress)
- [headers](AxiosRequestConfig.md#headers)
- [httpAgent](AxiosRequestConfig.md#httpagent)
- [httpsAgent](AxiosRequestConfig.md#httpsagent)
- [insecureHTTPParser](AxiosRequestConfig.md#insecurehttpparser)
- [maxBodyLength](AxiosRequestConfig.md#maxbodylength)
- [maxContentLength](AxiosRequestConfig.md#maxcontentlength)
- [maxRedirects](AxiosRequestConfig.md#maxredirects)
- [method](AxiosRequestConfig.md#method)
- [params](AxiosRequestConfig.md#params)
- [proxy](AxiosRequestConfig.md#proxy)
- [responseEncoding](AxiosRequestConfig.md#responseencoding)
- [responseType](AxiosRequestConfig.md#responsetype)
- [signal](AxiosRequestConfig.md#signal)
- [socketPath](AxiosRequestConfig.md#socketpath)
- [timeout](AxiosRequestConfig.md#timeout)
- [timeoutErrorMessage](AxiosRequestConfig.md#timeouterrormessage)
- [transformRequest](AxiosRequestConfig.md#transformrequest)
- [transformResponse](AxiosRequestConfig.md#transformresponse)
- [transitional](AxiosRequestConfig.md#transitional)
- [url](AxiosRequestConfig.md#url)
- [validateStatus](AxiosRequestConfig.md#validatestatus)
- [withCredentials](AxiosRequestConfig.md#withcredentials)
- [xsrfCookieName](AxiosRequestConfig.md#xsrfcookiename)
- [xsrfHeaderName](AxiosRequestConfig.md#xsrfheadername)

### Methods

- [onDownloadProgress](AxiosRequestConfig.md#ondownloadprogress)
- [onUploadProgress](AxiosRequestConfig.md#onuploadprogress)
- [paramsSerializer](AxiosRequestConfig.md#paramsserializer)

## Properties

### adapter

• `Optional` **adapter**: `AxiosAdapter`

___

### auth

• `Optional` **auth**: `AxiosBasicCredentials`

___

### axios-retry

• `Optional` **axios-retry**: `IAxiosRetryConfig`

___

### baseURL

• `Optional` **baseURL**: `string`

___

### cancelToken

• `Optional` **cancelToken**: `CancelToken`

___

### data

• `Optional` **data**: `D`

___

### decompress

• `Optional` **decompress**: `boolean`

___

### headers

• `Optional` **headers**: `AxiosRequestHeaders`

___

### httpAgent

• `Optional` **httpAgent**: `any`

___

### httpsAgent

• `Optional` **httpsAgent**: `any`

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

___

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

___

### method

• `Optional` **method**: `Method`

___

### params

• `Optional` **params**: `any`

___

### proxy

• `Optional` **proxy**: ``false`` \| `AxiosProxyConfig`

___

### responseEncoding

• `Optional` **responseEncoding**: `string`

___

### responseType

• `Optional` **responseType**: `ResponseType`

___

### signal

• `Optional` **signal**: `AbortSignal`

___

### socketPath

• `Optional` **socketPath**: ``null`` \| `string`

___

### timeout

• `Optional` **timeout**: `number`

___

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

___

### transformRequest

• `Optional` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

___

### transformResponse

• `Optional` **transformResponse**: `AxiosResponseTransformer` \| `AxiosResponseTransformer`[]

___

### transitional

• `Optional` **transitional**: `TransitionalOptions`

___

### url

• `Optional` **url**: `string`

___

### validateStatus

• `Optional` **validateStatus**: ``null`` \| (`status`: `number`) => `boolean`

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

___

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

___

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

## Methods

### onDownloadProgress

▸ `Optional` **onDownloadProgress**(`progressEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `any` |

#### Returns

`void`

___

### onUploadProgress

▸ `Optional` **onUploadProgress**(`progressEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `any` |

#### Returns

`void`

___

### paramsSerializer

▸ `Optional` **paramsSerializer**(`params`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`string`
