window.addEventListener("sx", function (t) {
	getmarketdata("GetMyMac", "get", {userid: localStorage.getItem("userid"), state: "0"}, !0, function (t) {
		1 == t.success && (vue1.ing = t.body.list, vue1.ingnum = t.body.list.length, vue1.sumPower = t.body.total[0].sumPower, vue1.profitDay = t.body.total[0].profitDay)
	}, function (t) {
	})
}), window.addEventListener("updateVrc", function (t) {
	getmarketdata("GetMyMac", "get", {userid: localStorage.getItem("userid"), state: "0"}, !0, function (t) {
		1 == t.success && (vue1.ing = t.body.list, vue1.ingnum = t.body.list.length, vue1.sumPower = t.body.total[0].sumPower, vue1.profitDay = t.body.total[0].profitDay)
	}, function (t) {
	})
});
var vue1 = new Vue({
	el: "#kuangji",
	data: {
		end: [],
		ing: [],
		ingnum: 0,
		endnum: 0,
		sumPower: 0,
		profitDay: 0,
		myid: null == localStorage.getItem("myid") ? "" : localStorage.getItem("myid")
	},
	created: function () {
		getmarketdata("GetMyMac", "get", {userid: localStorage.getItem("userid"), state: "0"}, !0, function (t) {
			1 == t.success && (vue1.ing = t.body.list, vue1.ingnum = t.body.list.length, vue1.sumPower = t.body.total[0].sumPower, vue1.profitDay = t.body.total[0].profitDay)
		}, function (t) {
		})
	},
	methods: {
		pulldownRefreshs: function (t) {
			mui.toast("已刷新"), getmarketdata("GetMyMac", "get", {
				userid: localStorage.getItem("userid"),
				state: "0"
			}, !0, function (t) {
				1 == t.success && (vue1.ing = t.body.list, vue1.ingnum = t.body.list.length, vue1.sumPower = t.body.total[0].sumPower, vue1.profitDay = t.body.total[0].profitDay)
			}, function (t) {
			})
		}
	},
	mounted: function () {
		mui.init({swipeBack: !1});
		mui.plusReady(function () {
			plus.webview.currentWebview();
			var t = null;
			mui.back = function () {
				t ? (new Date).getTime() - t < 2e3 && ("true" == localStorage.getItem("isrem") ? plus.runtime.quit() : (localStorage.clear(), plus.storage.clear(), plus.runtime.quit())) : (t = (new Date).getTime(), mui.toast("再按一次退出系统!"), setTimeout(function () {
					t = null
				}, 2e3))
			}
		}), mui.ready(function () {
			mui(".mui-scroll-wrapper").scroll({
				bounce: !0,
				indicators: !0,
				deceleration: mui.os.ios ? .003 : 9e-4
			}), mui(".tapbox").on("tap", "li", function () {
				var t = this.getAttribute("data-index");
				"show1" == t ? getmarketdata("GetMyMac", "get", {
					userid: localStorage.getItem("userid"),
					state: "0"
				}, !0, function (t) {
					1 == t.success && (vue1.ing = t.body.list, vue1.ingnum = t.body.list.length, vue1.sumPower = t.body.total[0].sumPower, vue1.profitDay = t.body.total[0].profitDay)
				}, function (t) {
				}) : getmarketdata("GetMyMac", "get", {
					userid: localStorage.getItem("userid"),
					state: "1"
				}, !0, function (t) {
					1 == t.success && (vue1.end = t.body.list, vue1.endnum = t.body.list.length, vue1.sumPower = t.body.total[0].sumPower, vue1.profitDay = t.body.total[0].profitDay)
				}, function (t) {
				});
				var e = $("#" + t);
				$(".tapbox li").removeClass("tapactive"), this.classList.add("tapactive"), $(".showbox li").removeClass("showactive"), e.addClass("showactive")
			}), mui("#kuangji").on("tap", ".shuaxin", function () {
				$(".shuaxin span").css({
					"-webkit-transform": "rotate(360deg)",
					"-moz-transform": "rotate(360deg)",
					"-o-transform": "rotate(360deg)",
					"-ms-transform": "rotate(360deg)"
				}), vue1.pulldownRefreshs(), getmarketdata("GetMyMac", "get", {
					userid: localStorage.getItem("userid"),
					state: "0"
				}, !0, function (t) {
					1 == t.success && (vue1.ing = t.body.list, vue1.ingnum = t.body.list.length, vue1.sumPower = t.body.total[0].sumPower, vue1.profitDay = t.body.total[0].profitDay)
				}, function (t) {
				})
			})
		})
	}
});