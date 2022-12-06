 var OriginTitle = document.title;
 var titleTime;
 var titleTime2;
 var titleTime3;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://emojipedia-us.s3.amazonaws.com/source/skype/289/cherries_1f352.png");
         document.title = "Waiting...";
         clearTimeout(titleTime);
         clearTimeout(titleTime2);
         clearTimeout(titleTime3);
     }
     else {
         document.title = "Welcome";
         titleTime = setTimeout(function () {
             document.title = "Back";
             titleTime2 = setTimeout(function () {
                 document.title = "Welcome Back !";
                 titleTime3 = setTimeout(function () {
                     document.title = OriginTitle;
                 }, 800);
             }, 500);
         }, 500);
     }
 });