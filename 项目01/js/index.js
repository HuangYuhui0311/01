window.onload=function(){
    if(!document.getElementsByClassName){
        document.getElementsByClassName = function(className, element){
            var children = (element || document).getElementsByTagName('*');
            var elements = new Array();
            for (var i=0; i<children.length; i++){
                var child = children[i];
                var classNames = child.className.split(' ');
                for (var j=0; j<classNames.length; j++){
                    if (classNames[j] == className){
                        elements.push(child);
                        break;
                    }
                }
            }
            return elements;
        };
    }
    var main01 = document.getElementsByClassName("main01")[0];
    var ul=main01.getElementsByTagName("ul")[0];
    var li = ul.getElementsByTagName("li");
    var imgs=[["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg"],
        ["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg"],
        ["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg"],
        ["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg"],
        ["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg"],
        ["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg"],
        ["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg"],
        ["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg"],
        ["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg"],
        ["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg"],
        ["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg"],
        ["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg"],
        ["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg"],
        ["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg"],
        ["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg"],
        ["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg"],
        ["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg"],
        ["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg"]];
    var timer=null;

    var date=new Date();
    var year=date.getFullYear();
    console.log(year);
    $("#time").html(year);

    addHtml(0);
    slider();
    function addHtml(index){
        var _html="";
        var _dot="";
        for(var j=0;j<imgs[index].length;j++){
            _html+="<li><a href='#'><img src='"+imgs[index][j]+"' alt=''/></a></li>";
            if(j==0){
                _dot+="<span class='active'></span>"
            }else{
                _dot+="<span></span>";
            }
        }
        _html+=_html;
        $(".content_right ul").html(_html).css("width",imgs[index].length*2*414+"px");
        $(".content_right .dot").html(_dot);
    }
    function slider(){
        function time(){
            $(".content_right .dot span").eq(k).addClass("active").siblings().removeClass("active");
            if(k==3){
                $(".content_right ul").css("left","0px");
                $(".content_right .dot span").eq(0).addClass("active").siblings().removeClass("active");
                k=0;
            }
            var currentLeft=parseInt($(".content_right ul").css("left"));
            var scale=Math.floor((-(k+1)*414-currentLeft)/20);
            var speed=currentLeft+scale;
            if(speed<=-(k+1)*414){
                speed=-(k+1)*414;
                k++;
            }
            $(".content_right ul").css("left",speed+"px");
        }
        var k=0;
        clearInterval(timer);
        timer=setInterval(function(){
            time();
        },30);
        $(".content_right .dot span").click(function(){
            k=$(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(".content_right ul").css("left",-k*414+"px");
        });
        $(".content_right").mouseover(function(){
            clearInterval(timer);
            $(".content_right ul").css("left",-k*414+"px");
        });
        $(".content_right").mouseout(function(){
            clearInterval(timer);
            timer=setInterval(function(){
                time();
            },30);
        });
    }

    /*划过切换*/
    for(var i=0; i<li.length; i++){
        li[i].index=i;
        if(i%9==8){
            li[i].style.marginRight=0;
        }
        li[i].onmouseover=function(){
            $(this).children("a").addClass("on");
            $(this).siblings().children("a").removeClass("on");
            $(".content_left dl").eq(this.index).addClass("on").siblings().removeClass("on");
            addHtml(this.index);
            slider();
        }
    }

    $(".main02_right li a").mouseover(function(){
        $(this).parent().addClass("on").siblings().removeClass("on");
    });

    var tab=document.getElementsByClassName("main03")[0].getElementsByTagName("table")[0];
    var tr=tab.getElementsByTagName("tr");
    for(var i=0;i<tr.length;i++){
        var td=tr[i].getElementsByTagName("td");
        for(var j=0;j<td.length;j++){
            if(j%2==0){
                td[j].style.background="#f1e7e8";
            }else{
                td[j].style.background="#eee";
            }
            if(j==2||j==3){
                td[j].style.textAlign="left";
            }
            if(j==3){
                td[j].className="sec";
            }
        }
    }

}