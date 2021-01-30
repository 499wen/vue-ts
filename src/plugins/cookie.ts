// 设置cookie
export function setCookie(name: string, value: string, Days: number)
{
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    Days  
    ?   document.cookie = name + "="+ escape (value) + "; path=/; expires=" + exp.toGMTString()
    :   document.cookie = name + "="+ escape (value) + "; path=/;"
    
    return Days ? exp.getTime() + Days*24*60*60*1000 : ''
}

//读取cookies
export function getCookie(name: string)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]);
    else
        return null;
}

//删除cookies
export function delCookie(name: string)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}