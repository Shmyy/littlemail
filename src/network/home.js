import {request} from "./request";

export function getHomemultidata(){
    return request({
        url: '/Home/multidata'
    })
}