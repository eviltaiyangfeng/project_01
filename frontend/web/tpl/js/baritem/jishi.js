function defaultWaiting(){var e=plus.nativeUI.showWaiting("处理中，请等待...\n5");e.onclose=function(){clearInterval(i)};var A=5,i=setInterval(function(){A--,e.setTitle("处理中，请等待...\n"+A),A<=0&&(e.close(),clearInterval(i))},1e3)}var currentWebview,imgarr=[],resimg=[],vue1=new Vue({el:"#jishi",data:{ds:[],img:[]},created:function(){getmarketdata("GetMac","get",{userid:localStorage.getItem("userid")},!0,function(e){1==e.success&&(vue1.ds=e.body.ds,$.each(e.body.ds,function(e,A){imgarr.push(A.photo),vue1.img.push("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTEyNjc4MjJDOTIwMTFFNzg3NTBDNURBMTVCQzBCRDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTEyNjc4MjNDOTIwMTFFNzg3NTBDNURBMTVCQzBCRDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTI2NzgyMEM5MjAxMUU3ODc1MEM1REExNUJDMEJENiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTI2NzgyMUM5MjAxMUU3ODc1MEM1REExNUJDMEJENiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlMvVLsAAAn9SURBVHja7J3LTxzJ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")}),$.each(imgarr,function(e,A){resimg.push("../img/"+A+".png")}),setTimeout(function(){vue1.img=resimg},200))},function(e){})},mounted:function(){mui.init({swipeBack:!1,pullRefresh:{container:"#jishi",down:{style:"circle",color:"#2BD009",height:"50px",range:"100px",offset:"0px",auto:!1,callback:function(){vue1.pulldownRefreshs(localStorage.getItem("userid"))}}}}),mui.plusReady(function(){currentWebview=plus.webview.currentWebview();var e=null;mui.back=function(){e?(new Date).getTime()-e<2e3&&("true"==localStorage.getItem("isrem")?plus.runtime.quit():(localStorage.clear(),plus.storage.clear(),plus.runtime.quit())):(e=(new Date).getTime(),mui.toast("再按一次退出系统!"),setTimeout(function(){e=null},2e3))}})},computed:{imgurl:function(e,A){return this.img}},methods:{pulldownRefreshs:function(e){getmarketdata("GetMac","get",{userid:localStorage.getItem("userid")},!0,function(e){1==e.success&&(vue1.ds=[],vue1.img=[],vue1.ds=e.body.ds,$.each(e.body.ds,function(e,A){imgarr.push(A.photo),vue1.img.push("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTEyNjc4MjJDOTIwMTFFNzg3NTBDNURBMTVCQzBCRDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTEyNjc4MjNDOTIwMTFFNzg3NTBDNURBMTVCQzBCRDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTI2NzgyMEM5MjAxMUU3ODc1MEM1REExNUJDMEJENiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTI2NzgyMUM5MjAxMUU3ODc1MEM1REExNUJDMEJENiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlMvVLsAAAn9SURBVHja7J3LTxzJ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")}),$.each(imgarr,function(e,A){resimg.push("../img/"+A+".png")}),setTimeout(function(){vue1.img=resimg},200),mui.toast("已刷新"))},function(e){}),mui("#jishi").pullRefresh().endPulldown()},buy:function(e,A){A.detail.gesture.preventDefault();mui.confirm("确认购买当前矿机？","购买矿机",["确认","取消"],function(A){0==A.index&&getmarketdata("BuyMac","get",{userid:localStorage.getItem("userid"),macid:e},!0,function(e){1==e.success?(plus.nativeUI.toast(e.msg),mui.fire(plus.webview.getWebviewById("barItem/kuangji.html"),"updateVrc"),mui.fire(plus.webview.getWebviewById("barItem/mine.html"),"updateVrc"),mui.fire(plus.webview.getWebviewById("barItem/kuangchi.html"),"updateVrc")):plus.nativeUI.toast(e.msg)},function(e){})})}}});