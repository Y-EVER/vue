import axios from 'axios'

const ax = axios.create({
	baseURL: 'http://192.168.1.152', //后台数据接口
	timeout: 120000,
	method: 'post',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
	},
	// 请求预处理函数 可以把你传的param进行处理
	transformRequest: [
		data => {
			// data 就是你post请求传的值
			// 一下主要是吧数据拼接成 类似get格式
			let params = ''
			for(var index in data) {
				params += index + '=' + data[index] + '&'
			}
			return params
		}
	]
})

// 登录接口
// export function login(username,password){
//     //  /login == http://localhost:3000/login
//     return ax.post('/login',{username,password})
// }
export function login(account,password,imgCode) {
	//  /login == http://localhost:3000/login
	return ax.post('staff_c/staffLogin', {
		account: account,
		password: password,
		imgCode: imgCode
	})
}
export function staff_c(tableData){
	return ax.post('staff_c/dishManagement',{
		tableData
	})
}