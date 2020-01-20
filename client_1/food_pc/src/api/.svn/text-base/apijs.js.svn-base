import axios from 'axios'

const ax = axios.create({
    baseURL:'http://192.168.1.162',//后台数据接口
    timeout: 120000 ,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

// 登录接口
// export function login(username,password){
//     //  /login == http://localhost:3000/login
//     return ax.post('/login',{username,password})
// }
export function login(username,password){
    //  /login == http://localhost:3000/login
    return ax.post('/public_c/clientLogin',{username,password})
}