<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title><?= WEB_TITLE ?> | 设置微信</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <link href="/tpl/css/mui.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/tpl//css/own.css">
    <link rel="stylesheet" href="/tpl//css/public.css">
    <link rel="stylesheet" href="/tpl//css/fixpass.css">

</head>
<body>
<header class="mui-bar mui-bar-nav own-main-background-color">
    <span onclick="javascript :history.go(-1);" class="back mui-icon mui-icon-left-nav mui-pull-left"></span>
    <h1 class="mui-title">微信</h1>
</header>
<div class="mui-content" id="weixin">
    <div class="input" style="margin-bottom:1rem"><label for="">微信号</label><input type="text" name="newpass"
                                                                                  id="newpass" placeholder="请输入您的微信号"
                                                                                  value="<?= $data['weixin'] ?>">
    </div>
    <button type="button" class="post">提交</button>
</div>
<script src="/tpl//js/mui.min.js"></script>
<script src="/tpl//js/libs/jquery.min.js" charset="utf-8"></script>
<script src="/tpl//js/libs/ajax.js" charset="utf-8"></script>
<script src="/tpl//js/sub/weixin.js" charset="utf-8"></script>
<script src="/tpl//js/function.js" charset="utf-8"></script>
<script>
    var url = "<?= \yii\helpers\Url::to(['weixin']) ?>";
    var token = "<?= \Yii::$app->getRequest()->getCsrfToken() ?>";
    $('.post').click(function () {
        var d = $('#newpass').val();
        $.post(url, {d: d, '_csrf-frontend': token}, function (data) {
            alert(data.message);
        }, 'json');
    });
</script>
</body>
</html>