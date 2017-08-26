/**
 * Created by Administrator on 2017/7/19.
 */
window.onload=function(){
    var bsnr=document.getElementsByClassName("bsnr")[0];
    var mk=document.getElementById("mkCarousel");
    var oDiv=mk.getElementsByTagName("div");
    var oSpan=bsnr.getElementsByTagName("span");
    var timer=null;
    var rotate=0;
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
    var n=1;
    /*oDiv[n].className="left";
    oDiv[n+1].className="active";
    oDiv[n+2].className="right";
    mk.style.left=-n*oDiv[0].clientWidth-40+"px";*/
    show();
    /*oSpan[0].onclick=function(){
        clearInterval(timer);
        n--;
        if(n<=0){
            n=4;
        }
        show();

    }
    oSpan[1].onclick=function(){
        clearInterval(timer);
        n++;
        if(n>=oDiv.length-4){
            n=0;
        }
        show();

    }*/
    mk.onmouseover=function(){
        clearInterval(timer);
    }
    mk.onmouseout=function(){
        show();
    }
    function show(){
        timer=setInterval(function(){
            //位置变化
            var stop=-n*oDiv[0].clientWidth-40;
            var current=parseInt(getAttr(mk,"left"));
            var speed=Math.floor((stop-current)/20);
            var left=current+speed;
            if(left<=stop){
                left=stop;
            }
            mk.style.left=left+"px";
            if(left==stop){
                n++;
                if(n>=oDiv.length-4){
                    n=0;
                }
                /*for(var i=0;i<oDiv.length;i++){
                    oDiv[i].style.transform="rotateY(0deg) scale(1)";
                }
                oDiv[n-1].style.transform="perspective(300px) rotateY(-10deg) scale(0.85)";
                oDiv[n+1].style.transform="perspective(300px) rotateY(10deg) scale(0.85)";*/
            }
            //旋转
            var roStop=-10;

            //var roCurrent=parseInt(getAttr(mk,"rotateY"));
            //var roSpeed=Math.floor((roStop-roCurrent)/50);
            rotate=rotate-1;
            if(rotate<=roStop){
                rotate=roStop;
            }
            oDiv[n].style.transform="perspective(300px) rotateY("+rotate+"deg) scale(0.85)";

        },30);

    }
}
function getAttr(obj,attr){
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}