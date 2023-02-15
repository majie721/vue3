import request from "@/utils/request";
import type { AxiosRequestConfig } from "axios";



const demo = {
    
    async get1(){
        return await request.get({
            path:'/get1',          
        })
    },

    async get2(params:any){
        return await request.get({
            path:'/get2', 
            params:params         
        })
    },
    async get3(params:any,config:AxiosRequestConfig){
        return await request.get({
            path:'/get3', 
            params       
        },config)
    },
    async post1(data:any,params:any){
        return await request.post({
            path:'/post1',
            data        
        })
    },

    async post2(data:any,params:any){
        return await request.post({
            path:'/post2', 
            params,
            data
        })
    },
    async post3(data:any,params:any,config:AxiosRequestConfig){
        return await request.post({
            path:'/post3', 
            params,
            data        
        },config)
    },
}
export default demo