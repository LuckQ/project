/**
 * Created by 芮芮 on 2018/3/3.
 */

////页面顶部
//window.onload = function () {
//    //获取元素，添加点击事件，导航栏取消
//    var top = document.getElementsByClassName('top')[0];
//    var a = top.getElementsByClassName('top-close')[0];
//    //console.log(a);
//    a.onclick = function () {
//        top.style.display = 'none';
//    };
//};
//页面顶部
$(function () {
    //获取元素，添加点击事件，导航栏取消
    $('.top .top-close').click(function () {
        $('.top').slideUp(200);
    });
});

//页面主体轮播图---图标
$(function () {
    //获取元素，改变元素的值，实现动画
    //第一个
    $('.section .banner .banner-bj .im1').animate({'left':'430px'},600,function () {
        $('.section .banner .banner-bj .im1').animate({'left':'412px'},100,function () {
            $('.section .banner .banner-bj .im1').animate({'left':'420px'},200,function () {
                    $('.section .banner .banner-bj .im1').animate({'left':'412px'},100);
            });
        });
    });


    //第二个
    $('.section .banner .banner-bj .im2').animate({'top':'380px'},600,function () {
        $('.section .banner .banner-bj .im2').animate({'top':'354px'},100,function () {
            $('.section .banner .banner-bj .im2').animate({'top':'364px'},200,function () {
                    $('.section .banner .banner-bj .im2').animate({'top':'354px'},100);
                });
            });
        });


    //第三个
    $('.section .banner .banner-bj .im3').animate({'right':'430px'},600,function () {
        $('.section .banner .banner-bj .im3').animate({'right':'412px'},100,function () {
            $('.section .banner .banner-bj .im3').animate({'right':'420px'},200,function () {
                $('.section .banner .banner-bj .im3').animate({'right':'412px'},100);
            });
        });
    });

});

//页面开班时间
$(function () {
    //获取图片元素，添加鼠标点击事件
    $('.section .openTime .kb-city .main-city .have').click(function () {
        //判断类名，改变背景颜色，对应的页面显示
            $(this).addClass('now').siblings().removeClass('now');
            //var index = $(this).index();
        $('.section .openTime .kb-box .kb-box-xq').eq($(this).index()).siblings().removeClass('active');
            $('.section .openTime .kb-box .kb-box-xq').eq($(this).index()).addClass('active');

    });
    $('.section .openTime .kb-city .main-city .no').click(function () {
        alert('本校区暂未开设该课程');
    });
});



//全能设计师
$(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 1200) {
            $('.design-pic').addClass('ani');
        }
    });
});

//详情介绍
$(function () {
    //第一行
    //第一行左
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 1400) {
            $('.details .first .f-left .im-animate').animate({'left': '280px'}, 600);

            //第一行右
            $('.details .first .f-right-yd').animate({'right': '100px'}, 600);
        }


        //第二行左
        if ($(document).scrollTop() >= 1600) {
            $('.details .second .del-im2').animate({'right': '300px'}, 600);

            //第二行右
            $('.details .second .f-right-yd2').animate({'left': '100px'}, 600);
        }



        //第三行左
        if ($(document).scrollTop() >= 1900) {
            $('.details .third .f-left .im-animate').animate({'left': '250px'}, 600);

            //第三行右
            $('.details .third .f-right-yd3').animate({'right': '100px'}, 600);
        }

        ////鼠标进入离开
        //$('.details .del-im').mouseenter(function () {
        //    $(this).animate({'top': '20px'}, 500);
        //}).mouseleave(function () {
        //    $(this).animate({'top': '28px'}, 500);
        //});
        //
        //$('.details .del-im3').mouseenter(function () {
        //    $(this).animate({'top': '78px'}, 500);
        //}).mouseleave(function () {
        //    $(this).animate({'top': '88px'}, 500);
        //});
    });


});

//课程介绍
$(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 2500) {
            //第一行左
            $('.introduce .left-con').animate({'left':'20px'},600);

            //第一行右
            $('.introduce .right-con').animate({'right':'20px'},600);
        }
    });

});