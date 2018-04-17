/**
 * Created by acer on 2018/3/2.
 */
//广告区域
$(function () {
    $(".topde").click(function () {
        $(".top").slideUp(500);
    })
});
//轮播图
$(function () {

    $("#animate").animate({"width":"350px","height":"350px"},1000);
    //function autoplay(){
    //    var index=0;
    //    timer=setInterval(function () {
    //        //if( index==2){
    //        //    index=0;
    //        //}
    //        // $(".imgbox>div").hide();
    //        //$(".imgbox>div:eq("+index+")").fadeIn(500);
    //        //$(".imgraius li:eq("+index+")").css("background","#02fdd8");
    //        //$(".imgraius li:eq("+index+")").siblings().css("background","");
    //        //index++;
    //     console.log("1")
    //    },500)
    //}
    //autoplay();            $(".imgbox>div").hide();
    var timer=0;
    function autoplay(index){
        var index=index||0;
        clearInterval(timer)
        timer=setInterval(function () {
            if(index==2){
                index=0;
            }
            $(".imgbox>div").hide();
            $(".imgbox>div:eq("+index+")").fadeIn(500);
            index++;
            $(".imgraius li:eq("+index+")").css("background","#02fdd8");
            $(".imgraius li:eq("+index+")").siblings().css("background","");
            console.log(index)
            if(index==1){
                $("#animate").hide();
            }else if(index==0){
                $("#animate").show(1000);
            }
        },3000)
    }
    autoplay();
    $(".imgraius li").click(function () {

        index=$(this).index();
        $(this).css("background","red");
        $(this).siblings().css("background","");
        $(".imgbox>div").hide();
        $(".imgbox>div:eq("+index+")").show();
        if(index==1){
            $("#animate").hide();
        }else if(index==0){
            $("#animate").show(1000);
        }
    });
    $('.imgraius li').click(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        autoplay($(this).index())
    })
});
//校区
$(function () {
    $(".xqol>li:odd").css("background","F7F7F7");
});
//校区tab
$(function () {
    $(".xqul>li").mouseenter(function () {
        var index=$(this).index();
        $(this).css("background","#3789ff");
        $(".xqul>li:eq("+index+")").siblings("li").css("background","white");
        $(".xq>ol").hide();
        $(".xq>ol:eq("+index+")").show(500);
    })
});
//<!--背景1-->
$(function () {
    $(window).scroll(function () {
        var a=600;
        if($(document).scrollTop()>=a){
            //alert("ok")
            $('#boss').animate({'width':'700px','height':'700px'},500);
            $('#li1').animate({'font-size':"40px"},500);
            $('#li2').animate({'font-size':"35px"},500);
            $('#li3').animate({'font-size':"20px"},500);
            $('#li4').animate({'margin-top':"70px","width":"120px","height":"35px"},500);
        }
    })
});
//轮播图2
$(function () {
    $(window).scroll(function () {
        var b=1250;
        //console.log($(document).scrollTop());
        //console.log($("#bos").offset().top);
        if($(document).scrollTop()>=b){
            $("#bosp").animate({"font-size":"35","top":"10"},1500);
            $("#bosolleft").animate({"width":"600px","height":"350px","right":"10px"},1500);
            $("#bosul").slideDown(1000);
        }
    })
});
//end
$(function () {
    $("#endimg>li").click(function () {
      var index=$(this).index();
        $("#endboss>li").hide();
        $("#endboss>li:eq("+index+")").show();
        $("#endtext>li").hide();
        $("#endtext>li:eq("+index+")").show(1000);
    }).mouseenter(function () {
        $(this).css("opacity",1);
        $(this).siblings("li").css("opacity",0.5);
    });
    $("#endimg>li").mouseleave(function () {
        $("#endimg>li").css("opacity",1);
    })
});
$(function () {
    $(".end6").hide()
    $(window).scroll(function () {
        var a=1900;
        if($(document).scrollTop()>=a){
            $(".end1").animate({
                "width":"496px",
                "height": "380px",
                "left": "110px",
                "top": "18px;",
                "font-size": "30px",
        });
            $(".end6").fadeIn(5000)
        }
    })
});