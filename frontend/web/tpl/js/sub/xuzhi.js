function getUrlParam(e) {
	var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), u = window.location.search.substr(1).match(t);
	return null != u ? unescape(u[2]) : null
}

var newid = getUrlParam("newid"), vue1 = new Vue({
	el: "#xuzhi", data: {title: "", imgurl: ""}, created: function () {
		getdata("GetNotice", "get", {userid: localStorage.getItem("userid"), type: newid}, !0, function (e) {
			1 == e.success ? vue1.imgurl = e.body : mui.toast(e.msg)
		}, function (e) {
		})
	}, mounted: function () {
		mui.init({swipeBack: !1});
		mui.plusReady(function () {
			plus.webview.currentWebview()
		})
	}
});