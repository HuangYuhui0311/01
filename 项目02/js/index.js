$(function(){
    //倒计时
    var timer=setInterval(function(){
        var now=new Date();
        var nowYear=now.getFullYear();
        var nowMonth=now.getMonth();
        var nowDay=now.getDate();
        var nowHour=now.getHours();
        var time1=new Date(nowYear,nowMonth,nowDay,9,59,59);
        var time2=new Date(nowYear,nowMonth,nowDay,13,59,59);
        var time3=new Date(nowYear,nowMonth,nowDay,17,59,59);
        if(now<time1){
            residue(now,time1);
        }else if(now<time2){
            residue(now,time2);
        }else if(now<time3){
            residue(now,time3);
        }
    },1000);
    function residue(now,end){
        var time=(end-now)/1000;
        var hours=Math.floor(time/3600);
        var minutes=Math.floor(time%3600/60);
        var seconds=Math.floor(time%60);
        $(".purchase-countdown p i").eq(0).html(hours);
        $(".purchase-countdown p i").eq(1).html(minutes);
        $(".purchase-countdown p i").eq(2).html(seconds);
    }

    //活动切换
    var width=$(".activities-item li").width()+18;
    var index=0;
    var picture=setInterval(function(){
        index++;
        if(index==$(".activities-item.on li").length-1){
            index=0;
        }
        $(".activities-item.on ul").css("left",-(index*width)+"px");
        console.log($(".activities-item.on ul").css("left"));
    },10000);
    $(".activities-content-left li").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".activities-item").eq($(this).index()).addClass("on").siblings().removeClass("on");
        //活动图片切换
        clearInterval(picture);
        index=0;
        picture=setInterval(function(){
            index++;
            if(index==$(".activities-item.on li").length-1){
                index=0;
            }
            $(".activities-item.on ul").css("left",-(index*width)+"px");
        },10000)
    });

    //固定导航滚动效果
    $(".fixed li").click(function(){
        var id=$(this).attr("name");
        if(id!=""){
            $("body,html").animate({"scrollTop":$(id).offset().top},1000);
        }
    });

    //简历展开效果
    $(".resume-example").animate({"height":285},2000,function(){
        $(".witch").fadeIn();
        $(".witch").animate({"right":60},1000);
    });

    //推车走进来
    car();
    function car(){
        $(".car").css("right","40px");
        $(".car").animate({"right":95},1000,function(){
            setTimeout(car,2000)
        });
    }

    //跳起来效果
    tiao();
    function tiao(){
        $(".car").css("right","40px");
        $(".tiaotiao").animate({"top":-140},700).animate({"top":-75},700,function(){
            tiao();
        })
    }
});