function getUrlParam(e) {
	var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), n = window.location.search.substr(1).match(t);
	return null != n ? unescape(n[2]) : null
}

var template = null, subWebview = null, newid = getUrlParam("newid"), vue1 = new Vue({
	el: "#messageinfo", data: {title: "", contents: ""},
	created: function () {
		// getdata("GetNewsOne", "get", {userid: localStorage.getItem("userid"), newid: newid}, !0, function (e) {
		// 	1 == e.success && (vue1.title = e.body.title, vue1.contents = e.body.contents)
		// }, function (e) {
		// })
	}, mounted: function () {
		mui.init({swipeBack: !1});
		var e;
		mui.plusReady(function () {
			e = plus.webview.currentWebview(), template = plus.webview.getWebviewById("template"), subWebview = plus.webview.getWebviewById("sub_template_three"), mui.fire(subWebview, "sx")
		})
	}
});