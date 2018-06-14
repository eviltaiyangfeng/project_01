<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title><?= WEB_TITLE ?> | 银行卡+实名认证</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <link href="/tpl/css/mui.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/tpl/css/own.css">
    <link rel="stylesheet" href="/tpl/css/public.css">
    <link rel="stylesheet" href="/tpl/css/real_name.css">

</head>
<body>
<header class="mui-bar mui-bar-nav own-main-background-color">
    <span onclick="javascript :history.go(-1);" class="back mui-icon mui-icon-left-nav mui-pull-left"></span>
    <h1 class="mui-title">银行卡+实名认证</h1>
</header>
<div class="mui-content" id="realname">
    <div class="shuru" v-if="accountName==''"><p class="tishi">请绑定持卡人本人的银行卡</p>
        <div class="input"><label for="username">真实姓名</label><input type="text" name="username" id="username"
                                                                    placeholder="请输入真实姓名" value="<?= $data['name'] ?>"></div>
        <div class="input"><label for="idcard">身份证号</label><input type="text" name="idcard" id="idcard"
                                                                  placeholder="请输入身份证号" value="<?= $data['id_card'] ?>"></div>
        <div class="input"><label for="cardnumber">银行卡号</label><input type="text" name="cardnumber" id="cardnumber"
                                                                      placeholder="请输入银行卡号" value="<?= $data['bank_card'] ?>"></div>
        <div class="input"><label for="cardnumber">开户行</label><input type="text" name="cardnumbername"
                                                                     id="cardnumbername"
                                                                     placeholder="请输入开户行" value="<?= $data['bank_name'] ?>"></div>
        <p class="tishi">银行预留手机号验证</p>
        <div class="input"><label for="banktel">预留手机</label><input type="text" name="banktel" id="banktel"
                                                                   placeholder="请输入银行预留手机号" value="<?= $data['bank_mobile'] ?>"></div>

        <?php if($data['auth'] == 1) { ?>
        <div class="yzbox">
            <div class="input"><label for="yzcode">验证码</label><input type="text" name="yzcode" id="yzcode"
                                                                     placeholder="验证码"></div>
            <button class="send" type="button">发送短信</button>
        </div>

        <button type="button" class="post" v-show="showbtn">提交</button>
        <?php } ?>
        <br>
        <p class="tishi">*请务必提交本人信息进行认证，盗用他人信息认证导致封号，责任自负。</p>
        <p class="tishi">*填写信息后请耐心等待，系统会自动认证信息。</p>
    </div>
</div>
<script src="/tpl/js/mui.min.js"></script>
<script src="/tpl/js/libs/jquery.min.js" charset="utf-8"></script>
<script src="/tpl/js/function.js" charset="utf-8"></script>
<?php if($data['auth'] == 1) { ?>
<script>
    var send_url = "<?= \yii\helpers\Url::to(['public/send-code-by-bank']) ?>";
    var post_url = "<?= \yii\helpers\Url::to(['update-message']) ?>";
    var token = "<?= \Yii::$app->getRequest()->getCsrfToken() ?>";
    $('.send').click(function () {
        var phone = $('#banktel').val();
        $.post(send_url, {
            phone: phone,
            '_csrf-frontend': token
        }, function (data) {
            alert(data.message);
        }, 'json');
    });

    $('.post').click(function () {
        var banktel = $('#banktel').val();
        var verify_code = $('#yzcode').val();
        var username = $('#username').val();
        var idcard = $('#idcard').val();
        var cardnumber = $('#cardnumber').val();
        var cardnumbername = $('#cardnumbername').val();
		$(".post").text("正在提交...");
		$(".post").attr('disabled',true);
        $.post(post_url, {
            phone: banktel,
            '_csrf-frontend': token,
            verify_code: verify_code,
            username: username,
            cardnumber: cardnumber,
            idcard: idcard,
            cardnumbername: cardnumbername,
        }, function (data) {
			$(".post").text("提交");
			$(".post").attr('disabled',false);
            alert(data.message);
        }, 'json');
    });
</script>
<?php } ?>
</body>
</html>