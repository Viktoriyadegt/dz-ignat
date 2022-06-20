import axios from "axios";

export type ResponseType ={
    success: boolean
}
type ResType = {
    errorText:string
    info:string
    yourBody:ResponseType
    success:boolean
    yourQuery:{}
}




export const requestApi = {
    createRequest(success: boolean) {
        return axios.post<ResType>('https://neko-cafe-back.herokuapp.com/auth/test', {success})
    }
}