var flag=!0,times=60,checktel=/^1[3|4|7|5|8]\d{9}$/,checkcode=/^[a-z|A-Z|0-9]{4}$/,checkpass=/^[0-9]{6}$/;$("#tel").val(localStorage.getItem("cardtel")),$("#newpass").blur(function(){var t=$(this).val();""==t||1==checkpass.test(t)||mui.toast("格式错误")}),$("#yzcode").blur(function(){var t=$(this).val();""==t||1==checkcode.test(t)||mui.toast("格式错误")}),$("#tel").blur(function(){var t=$(this).val();""==t||1==checktel.test(t)||mui.toast("格式错误")}),$("#cfpass").blur(function(){var t=$(this).val();""==t||t!=$("#newpass").val()&&mui.toast("两次输入不一致")}),mui.plusReady(function(){""==localStorage.getItem("cardtel")&&(mui.toast("先补全预留手机号才能修改"),mui.back()),mui(".yzbox").on("tap",".send",function(){var t=$("#tel").val();if(""!=t&&1==flag&&checktel.test(t)){flag=!1,plus.nativeUI.showWaiting("处理中..."),getdata("Send","get",{tel:t,zone:"86",type:2},!0,function(t){t.success,plus.nativeUI.closeWaiting(),plus.nativeUI.toast(t.msg)},function(t){plus.nativeUI.closeWaiting(),function(){var t=plus.nativeUI.showWaiting("处理中，请等待...\n5");t.onclose=function(){clearInterval(a)};var e=5,a=setInterval(function(){e--,t.setTitle("处理中，请等待...\n"+e),e<=0&&(t.close(),clearInterval(a))},1e3)}()});var e=setInterval(function(){times--,$(".send").text(times+"秒后再发送"),times<0&&(clearInterval(e),$(".send").text("获取验证码"),flag=!0,times=60)},1e3)}else plus.nativeUI.toast("手机号输入有误")}),mui("#forgetpaypass").on("tap",".post",function(){var t=$("#newpass").val(),e=$("#cfpass").val(),a=$("#tel").val(),s=$("#yzcode").val();if(!(""!=t&&""!=e&&""!=s&&t==e&&checktel.test(a)&&checkcode.test(s)&&checkpass.test(t)&&checkpass.test(e)))return""==s?void plus.nativeUI.toast("请输入验证码"):""==a?void plus.nativeUI.toast("请输入手机号"):t!=e?void plus.nativeUI.toast("两次密码输入不一致"):""==t?void plus.nativeUI.toast("请输入密码"):0==checktel.test(a)?void plus.nativeUI.toast("手机号格式错误"):0==checkcode.test(s)?void plus.nativeUI.toast("验证码格式错误"):0==checkpass.test(t)?void plus.nativeUI.toast("密码格式错误，6位纯数字"):0==checkpass.test(e)?void plus.nativeUI.toast("密码格式错误，6位纯数字"):void plus.nativeUI.toast("输入有误");plus.nativeUI.showWaiting("处理中..."),getdata("UpdatePayPassbyTel","get",{paypass:t,userid:localStorage.getItem("userid"),tel:a,code:s},!0,function(t){1==t.success?(plus.nativeUI.closeWaiting(),plus.nativeUI.toast(t.msg),$("#newpass").val(""),$("#cfpass").val(""),$("#yzcode").val(""),mui.back()):(plus.nativeUI.closeWaiting(),plus.nativeUI.toast(t.msg))},function(t){plus.nativeUI.closeWaiting(),plus.nativeUI.toast("服务器错误"),mui.back()})})});