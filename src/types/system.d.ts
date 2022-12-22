declare namespace System{
    /** 菜单数据 */
    export interface MenuItem {
        id:number,
        pid:number,
        name:string,
        path:string,
        icon?:string,
        children?:MenuItem[]
    }

    /** PaneItem */
    export interface PaneItem {
        path:string,
        fullPath:string,
        hash:string,
        params:any,
        query:any,
        name:string
    }
}