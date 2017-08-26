/**
 * Created by Administrator on 2017/7/13.
 */
$(function(){
    //box01 UL 切换
    $(".exam01 li").click(function(){
        $(this).addClass("on").siblings("li").removeClass("on");
        $(".exam01>div").eq($(this).index()).css("display","block").siblings("div").css("display","none");
    })
    //点击图片播放视频
    $(".exam01 img").click(function(){
        $(this).css("display","none").next().css("display","block");
    })
    //表格隔行变色

    //右侧导航链接点击
    $(".fix li").click(function(){
        $(this).addClass("on").siblings("li").removeClass("on");
    })
});

