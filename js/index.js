function getErrorText(text){
	document.getElementById('error_txt').innerHTML = text;
	document.getElementById('error_notice').style.display = 'block';
	setTimeout(function(){
		$("#error_notice").css('display','none');
	},1000)	
};
function getImgText(obj){
	if(!(/^1\d{10}$/.test($('#user_phonenum').val()))){
		//手机格式不通过
		getErrorText('手机格式不正确');
	}else{
		obj.css('display','block');
	}
};
function _IsIOS(){
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/iPhone\sOS/i) == "iphone os") {
        return true;
    } else {
        return false;
    }
}
//微信
function is_weixin(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		return true;
 	} else {
		return false;
	}
};
//安卓机
function _IsAndroid(){
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/Android/i) == "android") {
        return true;
    } else {
        return false;
    }
}