<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <link href="/tpl/css/mui.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/tpl/css/own.css">
    <link rel="stylesheet" href="/tpl/css/public.css">
    <link rel="stylesheet" href="/tpl/css/guonei.css">
    <meta name="token" content="<?= \Yii::$app->getRequest()->getCsrfToken() ?>"/>
    <style>
        .chart {
            height: 200px;
            margin: 0;
            padding: 0
        }

        * {
            touch-action: none;
        }

        .succ {
            margin: 0 .1rem;
        }

        button {
            width: 1.3rem;
        }
    </style>
    <script>
        var now_price = "<?= $now_price ?>";
    </script>
</head>
<body>
<header class="mui-bar mui-bar-nav own-main-background-color" style="position: static;">
    <a href="<?= \yii\helpers\Url::to(['shopping/index']) ?>" class="back mui-icon mui-icon-left-nav mui-pull-left"></a>
    <h1 class="mui-title">进阶挂单</h1>
</header>
<div class="mui-content" id="guonei">
    <div class="messagebox"><p class="xuxianbox" style="line-height:.4rem;text-align:center">
            算力≥5用户可进行10-200<?= MONEY_NAME ?>议价交易！</p>
    </div>
    <div class="guoneibox" style="position:relative">
        <ul class="guoneinum">
            <li><i style="font-size:.24rem;font-style:normal">当前价：</i> <span><?= $now_price ?></span> <i
                        style="font-size:.24rem;font-style:normal">元RMB</i></li>
        </ul>
        <div class="mui-input-row setnumbox"><span>减价</span>
            <div class="setnum">
                <div class="reduce" v-on:tap="reducenum">-</div>
                <!--
                <input type="number" name="price" id="price" :value="total" v-model.number="total" v-on:blur="limitzero"
                       v-on:input="limitsmall">-->
                <input type="number" name="price" id="price" :value="total" v-model.number="total" v-on:blur=""
                       v-on:input="">
                <div class="add" v-on:tap="addnum">+</div>
            </div>
            <span>加价</span></div>
        <div class="mui-input-row mui-input-range field-contain">
            <div>
                <input type="range" id="field-range" step="10" value="10" min="10" max="200" v-model="range">
            </div>
            <div style="margin-top:.3rem;text-align:center">
                <input type="number" id="field-range-input" v-model.number="range" @blur="checkNumber(range)"
                       @input="limitbig(range)" placeholder="请输入10的倍数">
            </div>
        </div>
        <div class="guoneitotal"><p>买入<span v-text="range"></span><?= $money_name ?>，出价<span
                        v-text="total"></span>元，总价<span v-text="totalprice"></span>元</p>
            <button type="button" class="guabuy" id="guabuy">挂买单</button>
            <div class="xuzhi" style="margin-top:.15rem">
                <!--<a href="<?= \yii\helpers\Url::to('shopping/xuzhi') ?>" data-title="进阶挂单交易须知"><span
                        class="iconfont">&#xe67f;</span> <span>进阶挂单交易须知</span></a>--></div>
        </div>
        <ul class="tapbox2">
            <li class="my-nav tapactive" data-index="show3"><span>买家看板<i></i></span></li>
            <li class="my-nav" data-index="show4"><span>交易信箱<i></i></span></li>
        </ul>
        <ul class="showbox2">
            <li id="show3" class="show showactive">
                <div class="mui-scroll-wrapper scw" id="scroll3">
                    <div class="mui-scroll ms">
                        <ul class="messagebox" href="#topPopover" id="allOrder">

                        </ul>
                    </div>
                </div>
            </li>
            <li id="show4" class="show">
                <div class="mui-scroll-wrapper scw" id="scroll4">
                    <div class="mui-scroll ms">
                        <ul class="messagebox" href="#topPopover">
                            <?php $this->beginContent('@app/views/tpl1/order/handle.php', [
                                'message' => $message,
                                'ownId' => $ownId,
                                'money_name' => $money_name
                            ]); ?>
                            <?php $this->endContent(); ?>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div id="popover" class="mui-popover mui-popover-bottom">
        <div class="account" id="account">
            <div class="toptitle"><p v-show="tradeinfo.state==-1">卖家资料</p>
                <p v-show="tradeinfo.state==1">买家资料</p>
                <div class="iconfont closebtn" v-on:tap="closeinfo">&#xe65d;</div>
            </div>
            <ul class="conlist">
                <li><span>开户名</span> <input type="text" name="" id="accountName" :value="tradeinfo.accountName"
                                            class="accountinput" readonly>
                    <button type="button" class="copy" data-clipboard-target="#accountName">复制</button>
                </li>
                <li><span>开户行</span> <input type="text" name="" id="openingBank" :value="tradeinfo.openingBank"
                                            class="accountinput" readonly>
                    <button type="button" class="copy" data-clipboard-target="#openingBank">复制</button>
                </li>
                <li><span>账号</span> <input type="text" name="" id="cardNumber" :value="tradeinfo.cardNumber"
                                           class="accountinput" readonly>
                    <button type="button" class="copy" data-clipboard-target="#cardNumber">复制</button>
                </li>
                <li><span>微信</span> <input type="text" name="" id="weixin" :value="tradeinfo.weixin"
                                           class="accountinput" readonly>
                    <button type="button" class="copy" data-clipboard-target="#weixin">复制</button>
                </li>
                <li><span>支付宝</span> <input type="text" name="" id="alipay" :value="tradeinfo.alipay"
                                            class="accountinput" readonly>
                    <button type="button" class="copy" data-clipboard-target="#alipay">复制</button>
                </li>
                <li><span>手机号</span> <input type="text" name="" id="tel" :value="tradeinfo.tel" class="accountinput"
                                            readonly>
                    <button type="button" class="copy" data-clipboard-target="#tel">复制</button>
                </li>
                <li><p>请严格按照以上资料进行打款交易，请勿相信中介！非平台公布资料交易，后果自负！</p></li>
            </ul>
        </div>
    </div>
    <!--<div class="shuaxin"><span class="iconfont" style="font-size:.4rem">&#xe611;</span></div>-->
</div>
<script src="/tpl/js/libs/jquery.min.js" charset="utf-8"></script>
<script src="/tpl/js/mui.min.js"></script>
<script src="/tpl/js/libs/clipboard.min.js" charset="utf-8"></script>
<script src="/tpl/js/libs/vue.min.js" charset="utf-8"></script>
<script src="/tpl/js/sub/guonei.js" charset="utf-8"></script>
<script src="/tpl/js/function.js" charset="utf-8"></script>
<script charset="UTF-8">
    var clipboard = new Clipboard('.copy');
    clipboard.on('success', function (e) {
        mui.alert('复制成功!')
        e.clearSelection();
    });
    clipboard.on('error', function (e) {
        mui.alert('复制成功!')
        e.clearSelection();
    });
    //导航切换
    $(".my-nav").click(function () {
        $(this).addClass("tapactive").siblings().removeClass("tapactive");
        $(".show").hide().eq($(this).index()).show();
    })
    $(function () {
        var min = "<?= $min ?>";
        var max = "<?= $max ?>";
        var numMin = "<?= $numbers['min'] ?>";
        var numMax = "<?= $numbers['max'] ?>";
        var moneyName = "<?= $money_name ?>";
        var url = "<?= \yii\helpers\Url::to(['order/buy-order']) ?>";
        var token = "<?= \Yii::$app->getRequest()->getCsrfToken() ?>";
        var type =
            $("#guabuy").click(function () {
                var price = $("#price").val();
                if (price < parseFloat(min)) {
                    mui.alert('最小单价不能低于' + min + '元')
                    return false;
                }
                if (max > 0 && price > parseFloat(max)) {
                    mui.alert('最高单价不能高于' + max + '元')
                    return false;
                }
                var number = $("#field-range-input").val();
                if (!(parseFloat(numMin) <= number && number <= parseFloat(numMax))) {
                    mui.alert('只能买入' + numMin + '-' + numMax + '' + moneyName)
                    return false;
                }
                $(this).html('处理中...');
                $(this).attr('disabled', true);
                var $this = $(this);
                $.post(url, {price: price, number: number, type: 2, '_csrf-frontend': token}, function (response) {
                    if (response.code == 0) {
                        $this.html('挂买单');
                        $this.attr('disabled', false);
                        mui.alert(response.message);
                    } else {
                        mui.alert(response.message, function () {
                            window.location.reload()
                        })
                    }
                }, 'json')
            })
    })
    var page = 1;
    var pagesize = 20;
    var url = "<?= \yii\helpers\Url::to(['order/list', 'type' => 2]) ?>";
    mui.init({
        pullRefresh: {
            container: "#scroll3",//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
            up: {
                height: 50,//可选.默认50.触发上拉加载拖动距离
                auto: true,//可选,默认false.自动上拉加载一次
                contentrefresh: "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
                contentnomore: '没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
                callback: function () {
                    var e = this;
                    $.get(url, {page: page, pagesize: pagesize}, function (response) {
                        if (response.length == 0) {
                            e.endPullupToRefresh(true);
                        } else {
                            var context = "";
                            for (var i = 0; i < response.length; i++) {
                                context += '<li><div class="code"><div class="codeleft"><div class="circle"></div>' +
                                    '<p>单号：' + response[i].orderNumber + '</p></div><div class="time">' + response[i].time + '</div>' +
                                    '</div><div class="info">用户' + response[i].mobile + '（ID：' + response[i].memberId + '）买入' + response[i].number + '，单价' + response[i].price + '元。</div>' +
                                    '<div class="btnbox"> <button onclick="SaleOrder(this)" data-url="' + response[i].saleUrl + '" data-id="' + response[i].orderId + '" class="heta" type="button">卖给ta </button></div></li>'
                            }
                            $("#allOrder").append(context);
                            page++;
                            e.endPullupToRefresh(false);
                        }
                    }, 'json')
                }
            }
        }
    });

    function confirmOrder(e) {
        var orderId = $(e).attr('data-id');
        var btnArray = ['取消', '确定'];
        var url = "<?= \yii\helpers\Url::to(['order/confirm']) ?>";
        var token = $("meta[name=token]").attr('content');
        mui.confirm("你确定你要已打款并上传打款截图吗?", '', btnArray, function (e) {
            if (e.index == 1) {
                $.post(url, {orderId: orderId, '_csrf-frontend': token}, function (data) {
                    mui.alert(data.message, function () {
                        window.location.reload();
                    })
                }, 'json')
            }
        })
    }

    function saleOrder(e) {
        var orderId = $(e).attr('data-id');
        var btnArray = ['取消', '确定'];
        var url = "<?= \yii\helpers\Url::to(['order/receive']) ?>";
        var token = $("meta[name=token]").attr('content');
        mui.confirm("你确定你已收款吗？", '', btnArray, function (e) {
            if (e.index == 1) {
                $.post(url, {orderId: orderId, '_csrf-frontend': token}, function (data) {
                    mui.alert(data.message, function () {
                        window.location.reload();
                    })
                }, 'json')
            }
        })
    }

    function cancelOrder(e) {
        var orderId = $(e).attr('data-id');
        var btnArray = ['取消', '确定'];
        var url = "<?= \yii\helpers\Url::to(['order/cancel']) ?>";
        var token = $("meta[name=token]").attr('content');
        mui.confirm("你确定你要取消此交易？", '', btnArray, function (e) {
            if (e.index == 1) {
                $.post(url, {orderId: orderId, '_csrf-frontend': token}, function (data) {
                    mui.alert(data.message, function () {
                        window.location.reload();
                    })
                }, 'json')
            }
        })
    }
</script>
</body>
</html>