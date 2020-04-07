const mobile = /^1([3578][0-9]|4[57])[0-9]{8}$/;
const standardChar = /^[\w@.]*$/;


export default {
    ENUM:["one","two"],      //类似的可枚举验证值
    isMobile:function(rule,value,callback){
        if(value && mobile.test(value)){
            callback()
            //空值的降级方案
        }else if(!value){
            callback(" ")
            return
        } else {
            callback("您输入的格式有误，请检查！")
            return
        }
    },
    isStandardChar:function(rule,value,callback){
        if(value && standardChar.test(value)){
            callback()
        } else {
            callback()
            return
        }
    }
}