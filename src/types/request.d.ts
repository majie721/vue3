declare namespace Request{
    export interface RequestParam<T> {
        path: string,
        params?: any,
        data?: T
    }
    
    //响应结果
   export interface Result<T> {
        code: number;
        message: string;
        data?: T;
    }
}