import { AxiosInstance, AxiosRequestConfig, Method as AxiosMethod } from 'axios';
declare const Axios: import("axios").AxiosStatic;
interface Header {
    Origin?: string;
    Referer?: string;
    Cookie?: string | object;
    Connection?: string;
    'User-Agent'?: string;
    'Content-Type'?: string;
    Authorization?: string;
    [propName: string]: any;
}
interface Response<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: Header;
    config: RequestConfig;
    request?: any;
}
interface AxiosRetryConfig {
    retry: number;
    delay: number;
}
interface HandlerFunction<T = any> {
    (data: T): T;
}
interface ErrorHandlerFunction<T = any> {
    (data: T, requestConfig: RequestConfig): T;
}
interface XHttpOptions {
    retryConfig?: AxiosRetryConfig;
    timeout?: number;
    cancelDuplicatedRequest?: boolean;
    rejectErrorPromise?: boolean;
    requestHandler?: HandlerFunction;
    responseHandler?: HandlerFunction;
    errorHandler?: ErrorHandlerFunction;
    requestFinally?: (requestConfig: RequestConfig) => void;
    setRequestHeaders?: HandlerFunction<object>;
}
declare enum XHttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
    OPTIONS = "OPTIONS",
    get = "GET",
    post = "POST",
    put = "PUT",
    delete = "DELETE",
    patch = "PATCH",
    options = "OPTIONS"
}
interface RequestConfig extends AxiosRequestConfig {
    rejectErrorPromise?: boolean;
    [key: string]: any;
}
declare class XHttpUtils {
    private static instance;
    private constructor();
    static getInstance(): XHttpUtils;
    static typeof(obj: any): string;
}
export declare class XHttpClass {
    instance: AxiosInstance;
    timeout: number;
    private _rejectErrorPromise;
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
    request(method: XHttpMethod | AxiosMethod, url: string, config?: RequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    axiosRequest(url: string, config?: RequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    get(url: string, params?: any, config?: RequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    post(url: string, data?: any, config?: RequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    put(url: string, data?: any, config?: RequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    patch(url: string, data?: any, config?: RequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    delete(url: string, data?: any, config?: RequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    postForm(url: string, data?: any, hasBrackets?: boolean, hasIndex?: boolean, config?: RequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
    postFile(url: string, files: File | File[], name?: string, hasBrackets?: boolean, hasIndex?: boolean, config?: RequestConfig, isWhiteList?: boolean): Promise<Response<any>>;
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
    isCancel(error: any): boolean;
    getInstance(): AxiosInstance;
    create(options?: XHttpOptions, axiosConfig?: AxiosRequestConfig<any>): XHttpClass;
}
declare const CODE_MSG: {
    [status: number]: string;
};
declare const XHttp: XHttpClass;
export { XHttp, XHttpMethod, XHttpUtils, Axios, CODE_MSG, RequestConfig, XHttpOptions, ErrorHandlerFunction, HandlerFunction, AxiosRetryConfig, Response, Header, AxiosRequestConfig };
export default XHttp;
//# sourceMappingURL=index.d.ts.map