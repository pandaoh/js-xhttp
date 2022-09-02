[js-xhttp - v1.5.1](../README.md) / XHttpOptions

# Interface: XHttpOptions

## Table of contents

### Properties

- [cancelDuplicatedRequest](XHttpOptions.md#cancelduplicatedrequest)
- [errorHandler](XHttpOptions.md#errorhandler)
- [rejectErrorPromise](XHttpOptions.md#rejecterrorpromise)
- [requestHandler](XHttpOptions.md#requesthandler)
- [responseHandler](XHttpOptions.md#responsehandler)
- [retryConfig](XHttpOptions.md#retryconfig)
- [setRequestHeaders](XHttpOptions.md#setrequestheaders)
- [timeout](XHttpOptions.md#timeout)

### Methods

- [requestFinally](XHttpOptions.md#requestfinally)

## Properties

### cancelDuplicatedRequest

• `Optional` **cancelDuplicatedRequest**: `boolean`

___

### errorHandler

• `Optional` **errorHandler**: [`ErrorHandlerFunction`](ErrorHandlerFunction.md)<`any`\>

___

### rejectErrorPromise

• `Optional` **rejectErrorPromise**: `boolean`

___

### requestHandler

• `Optional` **requestHandler**: [`HandlerFunction`](HandlerFunction.md)<`any`\>

___

### responseHandler

• `Optional` **responseHandler**: [`HandlerFunction`](HandlerFunction.md)<`any`\>

___

### retryConfig

• `Optional` **retryConfig**: [`AxiosRetryConfig`](AxiosRetryConfig.md)

___

### setRequestHeaders

• `Optional` **setRequestHeaders**: [`HandlerFunction`](HandlerFunction.md)<`object`\>

___

### timeout

• `Optional` **timeout**: `number`

## Methods

### requestFinally

▸ `Optional` **requestFinally**(`requestConfig`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestConfig` | [`RequestConfig`](RequestConfig.md) |

#### Returns

`void`
