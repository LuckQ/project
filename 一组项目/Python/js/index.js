/**
 * Created by Administrator on 2018-03-01.
 */

    //�����رհ�ť����ʵ��
$(function(){
    $(".top .close").click(function(){
        $('.top').slideUp();
    });
});
$(function () {
    $(window).scroll(function(){
        if($(window).scrollTop() >= 3000){
            $(".easy .btm li").slideDown(1000,'');
        }
    })

});
//�˽����Python����
$(function () {
   $('.people #btn').mouseenter(function () {
       $(this).css({'backgroundColor':'#0194E1', 'boxShadow': '0px 5px 0px #86D9FF'});
   }).mouseleave(function () {
       $(this).css({'backgroundColor':'#FF1A1A', 'boxShadow': '0px 5px 0px #C55858'});
   });
});
$(function () {
    $('.easy #btn1').mouseenter(function () {
        $(this).css({'backgroundColor':'#0194E1', 'boxShadow': '0px 5px 0px #86D9FF'});
    }).mouseleave(function () {
        $(this).css({'backgroundColor':'#FF1A1A', 'boxShadow': '0px 5px 0px #C55858'});
    });
});
$(function () {
    $('.job #btn2').mouseenter(function () {
        $(this).css({'backgroundColor':'#0194E1', 'boxShadow': '0px 5px 0px #86D9FF'});
    }).mouseleave(function () {
        $(this).css({'backgroundColor':'#FF1A1A', 'boxShadow': '0px 5px 0px #C55858'});
    });
});

//���沿��
$(function () {
   $('.box .imgbox .dong').animate({'marginLeft':'0px','opacity':'1'},1000);
});
$(function () {
   $('.box .box1 .a1').animate({'bottom':'180px','opacity':'1'},1000);
   $('.box .box1 .a2').animate({'bottom':'180px','opacity':'1'},1000);

});
$(function () {
    $('.box .box2 .a1').animate({'bottom':'140px','opacity':'1'},1000);
    $('.box .box2 .a2').animate({'bottom':'140px','opacity':'1'},1000);

});





//���ֲ���
$(function () {
    $(window).scroll(function(){
        if($(window).scrollTop() >= 400){
            $('.tongji .p1').animate({'opacity':1},1000);
        }
    })

});
$(function () {
    $(window).scroll(function(){
        if($(window).scrollTop() >= 1000){
            $('.people .pp').animate({'opacity':1},1000);
        }
    })

});
$(function () {
    $(window).scroll(function(){
        if($(window).scrollTop() >= 1900){
            $('.money p').animate({'opacity':1},1000);
        }
    })

});
$(function () {
    $(window).scroll(function(){
        if($(window).scrollTop() >= 2600){
            $('.easy .box_In .box_hd h2').animate({'opacity':1},1000);
        }
    })

});
$(function () {
    $(window).scroll(function(){
        if($(window).scrollTop() >= 3500){
            $('.job .box_In .box_hd h2').animate({'opacity':1},1000);
        }
    })

});



//�ֲ�
$(function () {

    //$("#animate").animate({"width":"350px","height":"350px"},1000);

    var timer=0;
    function autoplay(index){
        var index=index||1;
        clearInterval(timer);
        timer=setInterval(function () {
            if(index==2){
                index=0;
            }
            $(".imgbox>div").hide();
            $(".imgbox>div:eq("+index+")").fadeIn(500);
            index++;
            $(".imgraius li:eq("+index+")").css("background","#02fdd8");
            $(".imgraius li:eq("+index+")").siblings().css("background","");
        },3000)
    }
    autoplay();
    $(".imgraius li").mouseenter(function () {

        index=$(this).index();
        $(this).css("background","#c55858");
        $(this).siblings().css("background","");
        $(".imgbox>div").hide();
        $(".imgbox>div:eq("+index+")").show();
    });
    $('.imgraius li').mouseleave(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        autoplay($(this).index())
    })
});


//����
$(function () {
    $('.jiyu  ul li').mouseenter(function () {
        $(this).css('boxShadow', '0px 0px 5px 4px grey');
        //$('.box_In ul li .top').css('background', 'url(../images/box3_img1.jpg) no-repeat top right');
    }).mouseleave(function () {
        $(this).css('boxShadow', '0px 0px 0px white');
    });


    $('.jiyu ul .li1').mouseenter(function () {
        $('.jiyu ul .li1 .top1').css('background', 'url("images/box3_img1.jpg") top right no-repeat ');
    }).mouseleave(function () {
        $('.jiyu ul .li1 .top1').css('background', 'url("images/box3_img1.jpg") top left no-repeat ');
    });
    $('.jiyu ul .li2').mouseenter(function () {
        $('.jiyu ul .li2 .top2').css('background', 'url("images/box3_img2.jpg") top right no-repeat ');
    }).mouseleave(function () {
        $('.jiyu ul .li2 .top2').css('background', 'url("images/box3_img2.jpg") top left no-repeat ');
    });
    $('.jiyu ul .li3').mouseenter(function () {
        $('.jiyu ul .li3 .top3').css('background', 'url("images/box3_img3.jpg") top right no-repeat ');
    }).mouseleave(function () {
        $('.jiyu ul .li3 .top3').css('background', 'url("images/box3_img3.jpg") top left no-repeat ');
    });
    $('.jiyu ul .li4').mouseenter(function () {
        $('.jiyu ul .li4 .top4').css('background', 'url("images/box3_img4.jpg") top right no-repeat ');
    }).mouseleave(function () {
        $('.jiyu ul .li4 .top4').css('background', 'url("images/box3_img4.jpg") top left no-repeat ');
    });
    $('.jiyu ul .li5').mouseenter(function () {
        $('.jiyu ul .li5 .top5').css('background', 'url("images/box3_img5.jpg") top right no-repeat ');
    }).mouseleave(function () {
        $('.jiyu ul .li5 .top5').css('background', 'url("images/box3_img5.jpg") top left no-repeat ');
    });
    $('.jiyu ul .li6').mouseenter(function () {
        $('.jiyu ul .li6 .top6').css('background', 'url("images/box3_img6.jpg") top right no-repeat ');
    }).mouseleave(function () {
        $('.jiyu ul .li6 .top6').css('background', 'url("images/box3_img6.jpg") top left no-repeat ');
    });
});



//ȫ��ѧPython
$(function () {
    $('.people ul .li1').mouseenter(function () {
        $('.people ul .li1 img').fadeTo('slow',0.3);

    }).mouseleave(function () {
        $('.people ul .li1 img').fadeTo('slow','1');
    });

});

$(function () {
    $('.people ul .li2').mouseenter(function () {
        $('.people ul .li2 img').fadeTo('slow',0.3);

    }).mouseleave(function () {
        $('.people ul .li2 img').fadeTo('slow','1');
    });

});

$(function () {
    $('.people ul .li3').mouseenter(function () {
        $('.people ul .li3 img').fadeTo('slow',0.3);

    }).mouseleave(function () {
        $('.people ul .li3 img').fadeTo('slow','1');
    });

});


//����У������
$(function () {
    $('.school .have').click(function () {
        $(this).css('backgroundColor','#D72502').siblings('.have').css('backgroundColor','#1E364E');
        $('.school .subject .right h3').text($(this).text());

        //$('.subject .right .ul1 li').eq($(this).index).show();
        //$('.subject .right .ul1 li').eq($(this).index).siblings().hide();

    }) ;
    $('.school .no').click(function () {
        alert('该校区暂未开设此课程');
    }) ;
});











