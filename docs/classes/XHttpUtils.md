[js-xhttp - v1.1.5](../README.md) / XHttpUtils

# Class: XHttpUtils

## Table of contents

### Constructors

- [constructor](XHttpUtils.md#constructor)

### Properties

- [data2Arr](XHttpUtils.md#data2arr)
- [data2Obj](XHttpUtils.md#data2obj)
- [instance](XHttpUtils.md#instance)

### Methods

- [arraySet](XHttpUtils.md#arrayset)
- [base64Decode](XHttpUtils.md#base64decode)
- [base64Encode](XHttpUtils.md#base64encode)
- [deepClone](XHttpUtils.md#deepclone)
- [empty](XHttpUtils.md#empty)
- [formatBytes](XHttpUtils.md#formatbytes)
- [formatDate](XHttpUtils.md#formatdate)
- [formatFormData](XHttpUtils.md#formatformdata)
- [get1Var](XHttpUtils.md#get1var)
- [getInstance](XHttpUtils.md#getinstance)
- [getRandColor](XHttpUtils.md#getrandcolor)
- [getRandNum](XHttpUtils.md#getrandnum)
- [getRandStr](XHttpUtils.md#getrandstr)
- [getUId](XHttpUtils.md#getuid)
- [getV](XHttpUtils.md#getv)
- [html2str](XHttpUtils.md#html2str)
- [mergeObj](XHttpUtils.md#mergeobj)
- [qsParse](XHttpUtils.md#qsparse)
- [qsStringify](XHttpUtils.md#qsstringify)
- [sleep](XHttpUtils.md#sleep)
- [str2html](XHttpUtils.md#str2html)
- [str2unicode](XHttpUtils.md#str2unicode)
- [trim](XHttpUtils.md#trim)
- [typeof](XHttpUtils.md#typeof)
- [unicode2str](XHttpUtils.md#unicode2str)

## Constructors

### constructor

• `Private` **new XHttpUtils**()

## Properties

### data2Arr

▪ `Static` **data2Arr**: (`obj`: { [key: string]: `any`;  }[], `key`: `string`) => `any`[]

#### Type declaration

▸ (`obj`, `key`): `any`[]

数组对象转数组值

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | { [key: string]: `any`;  }[] |
| `key` | `string` |

##### Returns

`any`[]

___

### data2Obj

▪ `Static` **data2Obj**: (`arr`: { [key: string]: `any`;  }[], `key`: `string`, `vKey?`: `string`) => { [key: string]: `any`;  }

#### Type declaration

▸ (`arr`, `key`, `vKey?`): `Object`

数组对象转对象，按照指定的 key 分组。

##### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | { [key: string]: `any`;  }[] |
| `key` | `string` |
| `vKey?` | `string` |

##### Returns

`Object`

___

### instance

▪ `Static` `Private` **instance**: [`XHttpUtils`](XHttpUtils.md)

## Methods

### arraySet

▸ `Static` **arraySet**(`arr`): `undefined` \| ``null`` \| `string` \| `Iterable`<`any`\>

数组去重

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `undefined` \| ``null`` \| `string` \| `Iterable`<`any`\> |

#### Returns

`undefined` \| ``null`` \| `string` \| `Iterable`<`any`\>

___

### base64Decode

▸ `Static` **base64Decode**(`str`): `string`

base64 解码

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

___

### base64Encode

▸ `Static` **base64Encode**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

___

### deepClone

▸ `Static` **deepClone**(`data`): `any`

深拷贝

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`any`

___

### empty

▸ `Static` **empty**(`obj`): `boolean`

判断值是否为空

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`boolean`

___

### formatBytes

▸ `Static` **formatBytes**(`bytes`, `precision?`): `string`

文件大小格式化

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bytes` | `number` | `undefined` |
| `precision` | `number` | `2` |

#### Returns

`string`

___

### formatDate

▸ `Static` **formatDate**(`date`, `fmt?`, `weeks?`): `string`

时间格式化

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `date` | `Date` | `undefined` |
| `fmt` | `string` | `"yyyy-mm-dd hh:ii:ss"` |
| `weeks?` | `any`[] | `undefined` |

#### Returns

`string`

___

### formatFormData

▸ `Static` **formatFormData**(`obj`): `FormData`

对象转 FormData

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`FormData`

___

### get1Var

▸ `Static` **get1Var**(`data`): `any`

获取对象/数组第一个值

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`any`

___

### getInstance

▸ `Static` **getInstance**(): [`XHttpUtils`](XHttpUtils.md)

获取 XHttpUtils 单例

#### Returns

[`XHttpUtils`](XHttpUtils.md)

___

### getRandColor

▸ `Static` **getRandColor**(): `string`

获取随机颜色

#### Returns

`string`

___

### getRandNum

▸ `Static` **getRandNum**(`min?`, `max?`): `number`

获取随机数字

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `min` | `number` | `0` |
| `max` | `number` | `10` |

#### Returns

`number`

___

### getRandStr

▸ `Static` **getRandStr**(`pow?`): `string`

获取随机数字字符串

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pow` | `number` | `100000000` |

#### Returns

`string`

___

### getUId

▸ `Static` **getUId**(`pow?`, `radix?`): `string`

获取简单的唯一 ID

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pow` | `number` | `10000` |
| `radix` | `undefined` \| `number` | `36` |

#### Returns

`string`

___

### getV

▸ `Static` **getV**(`defaultResult`, ...`args`): `any`

获取多级对象值

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultResult` | `any` |
| `...args` | `any` |

#### Returns

`any`

___

### html2str

▸ `Static` **html2str**(`value`): ``null`` \| `string`

实体字符转字符串

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

``null`` \| `string`

___

### mergeObj

▸ `Static` **mergeObj**(`oldObj`, `newObj`, `keys?`, `noOld?`): `Object`

合并对象

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `oldObj` | `Object` | `undefined` |
| `newObj` | `Object` | `undefined` |
| `keys?` | `string` \| `string`[] | `undefined` |
| `noOld` | `boolean` | `false` |

#### Returns

`Object`

___

### qsParse

▸ `Static` **qsParse**(`url?`, `key?`): `any`

获取 query string 参数

#### Parameters

| Name | Type |
| :------ | :------ |
| `url?` | `string` |
| `key?` | `string` |

#### Returns

`any`

___

### qsStringify

▸ `Static` **qsStringify**(`obj`, `arr2str?`): `string`

对象转 querystring

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `any` | `undefined` |
| `arr2str` | `boolean` | `false` |

#### Returns

`string`

___

### sleep

▸ `Static` **sleep**(`milliseconds`): `Promise`<`void`\>

睡眠

#### Parameters

| Name | Type |
| :------ | :------ |
| `milliseconds` | `undefined` \| `number` |

#### Returns

`Promise`<`void`\>

___

### str2html

▸ `Static` **str2html**(`value`): `string`

字符串转实体字符

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

___

### str2unicode

▸ `Static` **str2unicode**(`value`): `string`

字符转 unicode

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

___

### trim

▸ `Static` **trim**(`str`, `type?`): `string`

去除字符串空格

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `str` | `string` | `undefined` |
| `type` | `string` \| `number` | `0` |

#### Returns

`string`

___

### typeof

▸ `Static` **typeof**(`obj`): `string`

获取变量类型

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`string`

___

### unicode2str

▸ `Static` **unicode2str**(`value`): `string`

unicode转字符

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`
