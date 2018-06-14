<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title><?= WEB_TITLE ?> | 推广二维码</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <link href="/tpl/css/mui.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/tpl//css/own.css">
    <link rel="stylesheet" href="/tpl//css/public.css">
    <link rel="stylesheet" href="/tpl//css/real_name.css">

</head>
<body>
<header class="mui-bar mui-bar-nav own-main-background-color">
    <span onClick="javascript :history.go(-1);" class="back mui-icon mui-icon-left-nav mui-pull-left"></span>
    <h1 class="mui-title">推广二维码</h1>
</header>
<div class="mui-content" id="ethpurse">
    <div style="padding:.2rem" v-if="showbtn">
        <div class="show" style="padding:.5rem .4rem">
            <div class="myinfo">
                <p style="border-bottom:none;" v-text="address">
                    <img src="<?= $img ?>" alt="">
                </p>
            </div>

            <div class="myinfo">
                <p style="border-bottom:none;" v-text="address">
                    长按下方链接复制
                </p>
            </div>
            <input type="text" id="url" readonly value="<?= $url ?>" >
            <button class="copy" data-clipboard-target="#url" style="padding: .1rem 1rem;display: block;margin:.5rem auto;color: #fff">复制链接</button>
        </div>
    </div>
</div>
<script src="/tpl//js/mui.min.js"></script>
<script src="/tpl//js/libs/jquery.min.js" charset="utf-8"></script>
<script src="/tpl//js/libs/vue.min.js" charset="utf-8"></script>
<script src="/tpl/js/libs/clipboard.min.js" charset="utf-8"></script>
<script src="/tpl//js/function.js" charset="utf-8"></script>
<script>
    var clipboard = new Clipboard('.copy');
    clipboard.on('success', function(e) {
        mui.alert('复制成功!')
        e.clearSelection();
    });
    clipboard.on('error', function(e) {
        mui.alert('复制成功!')
        e.clearSelection();
    });

</script>
</body>
</html>