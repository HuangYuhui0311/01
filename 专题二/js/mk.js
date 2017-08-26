/**
 * Created by Administrator on 2017/7/19.
 */
window.onload=function(){
    var bsnr=document.getElementsByClassName("bsnr")[0];
    var mk=document.getElementById("mkCarousel");
    var oDiv=mk.getElementsByTagName("div");
    var oSpan=bsnr.getElementsByTagName("span");
    var timer=null;
/*    for(var i=0;i<oDiv.length;i++){
        oDiv[i].style.left=((i-1)*oDiv[i].clientWidth)-40+"px";
    }
    var n=(oDiv.length+1)/2;
    var timer=setInterval(function(){
        /!*for(var i=0;i<oDiv.length;i++){
            oDiv[i].className="";
        }
        oDiv[n].className="active";
        oDiv[n-1].className="left";
        oDiv[n+1].className="right";
        n++;*!/

    },1000);*/
    var n=0;
    oDiv[n].className="left";
    oDiv[n+1].className="active";
    oDiv[n+2].className="right";
    mk.style.left=-n*oDiv[0].clientWidth-40+"px";
    times();
    oSpan[0].onclick=function(){
        clearInterval(timer);
        n--;
        if(n<=0){
            n=4;
        }
        show();
        times();
    }
    oSpan[1].onclick=function(){
        clearInterval(timer);
        n++;
        if(n>=oDiv.length-4){
            n=0;
        }
        show();
        times();
    }
    mk.onmouseover=function(){
        clearInterval(timer);
    }
    mk.onmouseout=function(){
        times();
    }
    function times(){
        timer=setInterval(function(){
            n++;
            show();
            if(n>=oDiv.length-4){
                n=0;
            }
        },1500);
    }
    function show(){
        mk.style.left=-n*oDiv[0].clientWidth-40+"px";
        for(var i=0;i<oDiv.length;i++){
            oDiv[i].className="";
        }
        oDiv[n].className="left";
        oDiv[n+1].className="active";
        oDiv[n+2].className="right";
    }

}