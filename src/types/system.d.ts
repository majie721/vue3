declare namespace System{
    export interface MenuItem {
        name:string,
        icon:string,
        path:string,
        children:MenuItem[]
    }
}