// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://emojipedia-us.s3.amazonaws.com/source/skype/289/cherries_1f352.png");
        document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "https://emojipedia-us.s3.amazonaws.com/source/skype/289/cherries_1f352.png");
        document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
            $('[rel="icon"]').attr('href', "https://emojipedia-us.s3.amazonaws.com/source/skype/289/cherries_1f352.png");
        }, 2000);
    }
});