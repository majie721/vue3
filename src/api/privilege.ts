import request from "@/utils/request";
import type { AxiosRequestConfig } from "axios";



const privilege = {
    //用户菜单
    async userMenus():Promise<Request.Result<System.MenuItem[]>>{
        return await request.get({
            path:'/v4/user_menus',          
        })
    },
    //用户菜单
    async menuList(params:System.MenuParam):Promise<Request.Result<System.MenuListPaginate>>{
        return await request.post({
            path:'/v4/menu_list',
            params         
        })
    },

    
}
export default privilege