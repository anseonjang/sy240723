$(function () {
   
    // 개별메뉴
    $(".mainmenu>li").mouseenter(function(){
        $(this).find(".submenu").stop().slideDown(300);
    });
    $(".mainmenu>li").mouseleave(function(){
        $(this).find(".submenu").stop().slideUp(300);
    });
    
     // fade in out slide
     var x = 0;
     setInterval(function () {
         var next = (x + 1) % 3;
         $(".slideList").find("div").eq(x).fadeOut();
         $(".slideList").find("div").eq(next).fadeIn();
         x = next;
     },3000);
 

    // layer popup
    $(".layerPopup").on("click", function(){
        $(".popup").fadeIn();
    });
    $(".close").on("click", function(){
        $(".popup").fadeOut();
    });

});