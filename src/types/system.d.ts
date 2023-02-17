declare namespace System{
    export interface PaginateResponse{
        current:number,
        pageSize:number,
        total:number,
        list:array,
    }

    export interface PaginateQuery{
        pageSize:number,
        page:number //页码
    }



    /** 菜单分页 */
    export interface MenuListPaginate extends PaginateResponse {
        list:MenuItem[],
    }   

    /** 菜单数据 */
    export interface MenuItem {
        id:number,
        pid:number,
        route_name:string,
        route_path:string,
        title:string,
        cache:number,
        affix:number,
        hidden:number,
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

    /** 菜单数据 */
    export interface MenuData {
        id: number;
        pid: number;
        route_name: string;
        route_path: string;
        title: string;
        icon: string;
        cache: number;
        affix: number;
        breadcrumb: number;
        hidden: number;
        remarks: string;
        sort: number;
        created_at: string;
        updated_at: string;
        deleted_at?: string;
    }

    /** 菜单数据 */
    export interface MenuParam extends PaginateQuery{
        route_path?: string;
        title?:string;
        created_at?:string[]
    }

       /** 菜单数据 */
    export interface OrderDemoParam{
        order_id?: string;
        updated_at?:string[]
    }


    type SearchItemType = "input" | "timerPicker" | 'select';
    export interface SearchItem {
        type:string
        keyName:string;
        label:string;
        placeholder?:string|Array;
        valueFormat?:string;
        format?:string;
        allowClear?:boolean;
        selectData?:selectOptions
    }

    export interface selectOptions {
        options:selectItem[],
        filter?:boolean,
        mode?:string,//'multiple' | 'tags' | 'combobox'
    }

    export interface selectItem{
        value:number|string;
        text:number|string;
    }

}