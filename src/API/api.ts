import Vue from 'vue'
const Key = '/api'
const Api = {
    /**
     * 注册
     */
    smsCheckedCode: (phone: string | number) => `${Key}/release/smsCheckedCodeForRegister?phone=${phone}`, // 获取验证码
    register: `${Key}/release/apply`, // 注册

    /**
     * 登录
     */
    loginByPhone: `${Key}/release/loginByPhone`, // 验证码 - 登录
    verificationCode: (phone: number | string) => `${Key}/release/verificationCode?phone=${phone}`, // 获取登录验证码


    /**
     * 基础设置 - 酒店管理
     */
    addHotelByCustomer: `${Key}/release/addHotelByCustomer`,  // 添加酒店
    
} 

Vue.prototype.API = Api