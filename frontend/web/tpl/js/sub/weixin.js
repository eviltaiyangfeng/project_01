var tagWeb=null,template=null,subWebview=null;mui.plusReady(function(){mui.init(),tagWeb=plus.webview.getWebviewById("barItem/kuangshi.html"),template=plus.webview.getWebviewById("template_second"),subWebview=plus.webview.getWebviewById("sub_template_second"),mui("#weixin").on("tap",".post",function(){var e=$("#newpass").val();if(""==e)return plus.nativeUI.closeWaiting(),void plus.nativeUI.toast("输入有误");plus.nativeUI.showWaiting("正在处理..."),getdata("CheckWX","get",{userid:localStorage.getItem("userid"),weixin:e},!0,function(e){1==e.success?(plus.nativeUI.closeWaiting(),plus.nativeUI.toast(e.msg),$("#newpass").val(""),mui.back(),mui.fire(plus.webview.getWebviewById("template_three"),"sxdata"),mui.fire(plus.webview.getWebviewById("barItem/mine.html"),"passAlready"),mui.fire(tagWeb,"passAlready")):(plus.nativeUI.closeWaiting(),plus.nativeUI.toast(e.msg))},function(e){plus.nativeUI.closeWaiting(),mui.back(),$("#newpass").val("")})})});