declare namespace System{
    export interface MenuItem {
        id:number,
        pid:number,
        name:string,
        path:string,
        icon?:string,
        children?:MenuItem[]
    }
}