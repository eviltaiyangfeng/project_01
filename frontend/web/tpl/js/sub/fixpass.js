var checkpass=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;mui.plusReady(function(){mui.init(),$("#newpass").blur(function(){var s=$(this).val();""==s||1==checkpass.test(s)||plus.nativeUI.toast("至少6位，字母与数字组合")}),$("#oldpass").blur(function(){var s=$(this).val();""==s||1==checkpass.test(s)||plus.nativeUI.toast("至少6位，字母与数字组合")}),$("#cfpass").blur(function(){var s=$(this).val();""==s||s!=$("#newpass").val()&&plus.nativeUI.toast("两次输入不一致")}),mui("#fixpass").on("tap",".post",function(){var s=$("#newpass").val(),a=$("#cfpass").val(),t=$("#oldpass").val();if(""==s||""==a||""==t||s!=a)return plus.nativeUI.closeWaiting(),void plus.nativeUI.toast("输入有错误");checkpass.test(t)&&checkpass.test(s)?t!=s?(plus.nativeUI.showWaiting("正在处理..."),getdata("UpdatePassNew","get",{userid:localStorage.getItem("userid"),pass:s,oldpass:t},!0,function(s){1==s.success?(plus.nativeUI.closeWaiting(),plus.nativeUI.toast(s.msg),mui.back(),$("#newpass").val(""),$("#cfpass").val(""),$("#oldpass").val("")):(plus.nativeUI.closeWaiting(),plus.nativeUI.toast(s.msg))},function(s){plus.nativeUI.closeWaiting(),plus.nativeUI.toast("服务器错误"),mui.back(),$("#newpass").val(""),$("#cfpass").val(""),$("#oldpass").val("")})):plus.nativeUI.toast("新旧密码相同"):plus.nativeUI.toast("至少6位，字母与数字组合")})});