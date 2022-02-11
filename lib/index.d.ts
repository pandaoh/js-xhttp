import { AxiosInstance, AxiosRequestConfig } from 'axios';
export declare const Axios: import("axios").AxiosStatic;
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
export declare enum XHttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
    OPTIONS = "OPTIONS"
}
export declare class XHttp {
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
    request(method: XHttpMethod, url: string, config?: AxiosRequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    get(url: string, params?: any, config?: AxiosRequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    post(url: string, data?: any, config?: AxiosRequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    put(url: string, data?: any, config?: AxiosRequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    patch(url: string, data?: any, config?: AxiosRequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    delete(url: string, data?: any, config?: AxiosRequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    postForm(url: string, data?: any, config?: AxiosRequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    postFile(url: string, file: File, name?: string, config?: AxiosRequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    cancelRequest(message: string): XHttp;
    cancelWhiteListRequest(message: string): XHttp;
    getCancelToken(): any;
    getBaseURL(): string | undefined;
    setBaseURL(url?: string): XHttp;
    getHeaders(): any;
    setHeaders(headers: any): XHttp;
    getHeader(key: string): any;
    setHeader(key: string, val?: string): XHttp;
    setRequestTimeout(timeout: number): XHttp;
    getAuthToken(): any;
    setAuthToken(token: string): XHttp;
    getInstance(): AxiosInstance;
}
export declare class XHttpUtils {
    private static instance;
    private constructor();
    static getInstance(): XHttpUtils;
    static typeof(obj: any): string;
    static empty(obj: any): boolean;
    static qsStringify(obj: any): string;
    static qsParse(url?: string, key?: string): any;
    static objByData: (arr: {
        [key: string]: any;
    }[], key: string, vKey?: string | undefined) => {
        [key: string]: any;
    };
    static arrByData: (obj: {
        [key: string]: any;
    }[], key: string) => any[];
    static getV(defaultResult: any, ...args: any): any;
    static getFirstVar(data: any): any;
    static sleep(milliseconds: number | undefined): Promise<void>;
    static uniqueArray(arr: string | Iterable<any> | null | undefined): string | Iterable<any> | null | undefined;
    static deepClone(data: any): any;
    static mergeObj(oldObj: {
        [key: string]: any;
    }, newObj: {
        [key: string]: any;
    }, keys?: string | string[], hasOld?: boolean): {
        [key: string]: any;
    };
    static getRandNum(min?: number, max?: number): number;
    static getRandColor(): string;
    static str2html(value: string): string;
    static html2str(value: string): string | null;
    static unicode2str(value: string): string;
    static str2unicode(value: string): string;
    static trim(str: string, type?: number | string): string;
    static formatFormData(obj: any): FormData;
    static formatBytes(bytes: number, precision?: number): string;
    static formatDate(date: Date, fmt?: string): string;
    static base64Encode(str: string): string;
    static base64Decode(str: string): string;
}
export {};
//# sourceMappingURL=index.d.ts.map