var currentWebview, subWebview, temp, pageno1 = 1;
window.addEventListener("sx", function (e) {
	location.reload()
});
var vue1 = new Vue({
	el: "#message", data: {list: [], count: 0}, methods: {
		geturl: function (e) {
			return "messinfo.html?newid=" + e
		}, look: function (e, t, n, i, u) {
			0 != i && (this.list[u].isRead = 0), mui.fire(template, "updateHeader", {
				title: e,
				href: t + "?newid=" + n,
				id: n
			}), subWebview.getURL() == t + "?newid=" + n ? subWebview.show() : (subWebview.loadURL(t + "?newid=" + n), subWebview.addEventListener("loaded", function () {
				setTimeout(function () {
					subWebview.show()
				}, 50)
			})), template.show("slide-in-right", 150)
		},
		// getnewpage: function (e) {
		// 	getdata("GetNews", "get", {userid: localStorage.getItem("userid"), pageno: e}, !0, function (e) {
		// 		1 == e.success && $.each(e.body.paging, function (e, t) {
		// 			vue1.list.push(t)
		// 		})
		// 	}, function (e) {
		// 	})
		// }
	}, created: function () {
		// getdata("GetNews", "get", {userid: localStorage.getItem("userid"), pageno: 1}, !0, function (e) {
		// 	1 == e.success && (vue1.list = e.body.paging, vue1.count = e.body.pageCount)
		// }, function (e) {
		// })
	}, mounted: function () {
		mui("#gg").pullRefresh({
			up: {
				height: 50,
				auto: !1,
				contentrefresh: "正在加载...",
				contentnomore: "没有更多数据了",
				callback: function () {
					setTimeout(function () {
						mui("#gg").pullRefresh().endPullupToRefresh(vue1.count <= ++pageno1), vue1.getnewpage(pageno1)
					}, 150)
				}
			}
		}), mui.plusReady(function () {
			currentWebview = plus.webview.currentWebview(), template = plus.webview.getWebviewById("template_second"), subWebview = plus.webview.getWebviewById("sub_template_second"), mui(".messagebox li").on("tap", "a", function () {
			})
		})
	}
});