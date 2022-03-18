import { AxiosInstance, AxiosRequestConfig, Method as AxiosMethod } from 'axios';
declare const Axios: import("axios").AxiosStatic;
interface Header {
    Origin?: string;
    Referer?: string;
    Cookie?: string | object;
    Connection?: string;
    'User-Agent'?: string;
    'Content-Type'?: string;
    'Authorization'?: string;
    [propName: string]: any;
}
interface Response<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: Header;
    config: AxiosRequestConfig;
    request?: any;
}
interface RetryConfig {
    retry: number;
    delay: number;
}
interface HandlerFunction<T = any> {
    (data: T): T;
}
interface XHttpOptions {
    retryConfig?: RetryConfig;
    timeout?: number;
    cancelDuplicatedRequest?: boolean;
    requestHandler?: HandlerFunction;
    responseHandler?: HandlerFunction;
    errorHandler?: HandlerFunction;
    requestFinally?: () => void;
    setRequestHeaders?: HandlerFunction<object>;
}
declare enum XHttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
    OPTIONS = "OPTIONS"
}
declare class XHttpUtils {
    private static instance;
    private constructor();
    static getInstance(): XHttpUtils;
    static typeof(obj: any): string;
    static empty(obj: any): boolean;
    static qsStringify(obj: any, options: {
        arr2str?: boolean;
        hasIndex?: boolean;
        urlEncode?: boolean;
        hasBrackets: boolean;
    }): string;
    static qsParse(url?: string, key?: string): any;
    static data2Obj: (arr: {
        [key: string]: any;
    }[], key: string, vKey?: string | undefined) => {
        [key: string]: any;
    };
    static data2Arr: (obj: {
        [key: string]: any;
    }[], key: string) => any[];
    static getV(defaultResult: any, ...args: any): any;
    static get1Var(data: any): any;
    static sleep(milliseconds: number | undefined): Promise<void>;
    static arraySet(arr: string | Iterable<any> | null | undefined): string | Iterable<any> | null | undefined;
    static deepClone(data: any): any;
    static mergeObj(oldObj: {
        [key: string]: any;
    }, newObj: {
        [key: string]: any;
    }, keys?: string | string[], noOld?: boolean): {
        [key: string]: any;
    };
    static getRandNum(min?: number, max?: number): number;
    static getRandColor(): string;
    static getRandStr(pow?: number): string;
    static getUId(pow?: number, radix?: number | undefined): string;
    static str2html(value: string): string;
    static html2str(value: string): string | null;
    static unicode2str(value: string): string;
    static str2unicode(value: string): string;
    static trim(str: string, type?: number | string): string;
    static formatFormData(obj: any): FormData;
    static formatBytes(bytes: number, precision?: number): string;
    static formatDate(date: Date, fmt?: string, weeks?: any[]): string;
    static base64Encode(str: string): string;
    static base64Decode(str: string): string;
}
declare class XHttpClass {
    instance: AxiosInstance;
    timeout: number;
    private _retryConfig;
    private _requestHandler;
    private _responseHandler;
    private _errorHandler;
    private _requestFinally;
    private _setRequestHeaders;
    private _pendingRequests;
    private _cancelDuplicatedRequest;
    private _cancelTokens;
    private _whiteListCancelTokens;
    private _defaultAxiosConfig;
    constructor(options?: XHttpOptions, axiosConfig?: AxiosRequestConfig<any>);
    private _initAxiosRetry;
    private _initInterceptors;
    private _addPendingRequest;
    private _removePendingRequest;
    request(method: XHttpMethod | AxiosMethod, url: string, config?: AxiosRequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    get(url: string, params?: any, config?: AxiosRequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    post(url: string, data?: any, config?: AxiosRequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    put(url: string, data?: any, config?: AxiosRequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    patch(url: string, data?: any, config?: AxiosRequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    delete(url: string, data?: any, config?: AxiosRequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    postForm(url: string, data?: any, config?: AxiosRequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    postFile(url: string, files: File | File[], name?: string, hasIndex?: boolean, hasBrackets?: boolean, config?: AxiosRequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    cancelRequest(message: string): XHttpClass;
    cancelWhiteListRequest(message: string): XHttpClass;
    getCancelToken(): any;
    getBaseURL(): string | undefined;
    setBaseURL(url?: string): XHttpClass;
    getHeaders(): any;
    setHeaders(headers: any): XHttpClass;
    getHeader(key: string): any;
    setHeader(key: string, val?: string): XHttpClass;
    setRequestTimeout(timeout: number): XHttpClass;
    getAuthToken(): any;
    setAuthToken(token: string): XHttpClass;
    getInstance(): AxiosInstance;
    create(options?: XHttpOptions, axiosConfig?: AxiosRequestConfig<any>): XHttpClass;
}
declare const XHttp: XHttpClass;
export { XHttp, XHttpMethod, XHttpUtils, Axios };
export default XHttp;
//# sourceMappingURL=index.d.ts.map