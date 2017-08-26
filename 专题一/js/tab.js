$(function(){
    $("#series li").click(function(){
        $(this).addClass("on").siblings("li").removeClass("on");
        // $("#tabUL").animate({"left":-$(this).index()*1000+"px"},1000);
        $("#tabUL").css("left",-$(this).index()*1000+"px");
    });
    $(".city li").mouseover(function(){
        $(this).addClass("on").siblings("li").removeClass("on");
        $(".address ul").eq($(this).index()).addClass("active").siblings("ul").removeClass("active");
    });
});