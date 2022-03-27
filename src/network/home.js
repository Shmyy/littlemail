import {request} from "./request";

export function getHomemultidata(){
    return request({
        url: '/Home/multidata'
    })
}

export function getHomeGoods(type , page){
    return request({
        url:'/Home/data',
        params:{
            type,
            page
        }
    })
}