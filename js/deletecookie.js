//通过cookie的Name获取value值
function getCookie(name) {
    let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null;
}
//刪除cookie
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);//获取当前时间
    var cval = getCookie(name); //获取value
    if (cval != null) //重设cookie，设置过期时间为当前时间，就可以实现删除cookie
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
}


