var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://emojipedia-us.s3.amazonaws.com/source/skype/289/cherries_1f352.png");
        document.title = '👀跑哪里去了~';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "https://emojipedia-us.s3.amazonaws.com/source/skype/289/cherries_1f352.png");
        document.title = '🐖抓到你啦~'
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});