/**
 * Created by ldq on 2018/3/1.
 */
//页面加载时，顶部动画
$(function () {
    $('#ban_bg').animate({'opacity': 1, 'top': 0}, 500);
    $('.hd1').animate({'opacity': 1, 'right': '300px'}, 500);
    $('.hd2').animate({'opacity': 1, 'left': '450px'}, 500);
    //右上旋转动画
    $('.circle>img').animate({'transform': 'rotate(360deg)'}, 2000, function fc() {
        $(this).animate({'transform': 'rotate(360deg)'}, 2000, fc)
    });
    //立即抢座按钮动画
    $('.qiangzuo').mouseenter(function () {
        $('.shu').stop().animate({'bottom': '13px'}, 100, function () {
            $('.heng').stop().animate({'right': '8px'}, 100);
        });
    }).mouseleave(function () {
        $('.heng').stop().animate({'right': '-240px'}, 100, function () {
            $('.shu').stop().animate({'bottom': '-100px'}, 100);
        });
    });

    //为什么选择前端页面滚动效果
    $(function () {
        $(window).scroll(function () {
            var flage = true;
            if (flage) {
                if ($(window).scrollTop() >= 700&&$(window).scrollTop()<=1500) {
                    $(".why").animate({
                        bottom: '50px',
                        opacity: 1
                    }, 500, function () {
                        $('.whyul>li:first').animate({'opacity':1},200, function f1() {
                            $(this).next().animate({'opacity': 1}, 200, f1)
                        });
                    });
                    flage=false;
                }
                ;
            }
            //前端工程师估值整体页面滚动效果
            if ($(window).scrollTop() >= 1400&&$(window).scrollTop()<=2000) {
                $('.GassValue>.hd').animate({'opacity': 1, 'top': 0}, 1000)
            }
            ;
            if ($(window).scrollTop() >= 1600) {
                $('#tongji').animate({'opacity': 1, 'bottom': 0}, 1500)
            }
            ;

            //统计图左右划入效果
            if ($(window).scrollTop() >= 1800&&$(window).scrollTop()<=2400) {
                $('.TJ_top_l').animate({'opacity': 1, 'left': 0}, 500, function () {
                    $('.TJ_top_l .jd>b').animate({'left': 0, 'opacity': 1}, 500);
                });
                $('.TJ_top_r').animate({'opacity': 1, 'right': '50px'}, 500, function () {
                    //平均工资显示
                    $('.TJ_top_r .jd>b').animate({'left': 0, 'opacity': 1}, 300, function () {
                        $('.TJ_top_r>h2>span:first').fadeIn(300, function f3() {
                            $(this).next().fadeIn(500, f3);
                        })
                    });

                });
            }
            ;
            if ($(window).scrollTop() >= 2200&&$(window).scrollTop()<=2600) {
                $('.tongji_bottom_l').animate({'left': 0, 'opacity': 1});
                $('.tongji_bottom_r').animate({'right': 0, 'opacity': 1});
            }
            //学员信息页面滚动效果
            if ($(window).scrollTop() >= 2400) {
                $('.info_txt').animate({'top': '0px', 'opacity': 1}, 1000)
            }
            ;
            if ($(window).scrollTop() >= 2600) {
                $('.infoTable').animate({'top': '200px', 'opacity': 1}, 1500)
            }
            ;
            //它火因为它无处不在部分页面滚动动画
            if ($(window).scrollTop() >= 3800) {
                $('.fire .hd').animate({'top': '0px', 'opacity': 1}, 1000)
            }
            ;
            if ($(window).scrollTop() >= 4000) {
                $('.fire_box').animate({'top': '200px', 'opacity': 1}, 1500)
            }
            ;
            //实战项目部分页面滚动效果
            if ($(window).scrollTop() >= 4900) {
                $('.fight_in .hd').animate({'opacity': 1}, 1000);
            }
            ;
            if ($(window).scrollTop() >= 5400) {
                $('.fight_con').animate({'opacity': 1}, 1500);
            }
            ;
            //精品课程服务页面滚动动画
            if ($(window).scrollTop() >= 6200) {
                $('.create_in .hd').animate({'opacity': 1}, 1000);
            }
            ;
            if ($(window).scrollTop() >= 6500) {
                $('.create_box').animate({'opacity': 1}, 1500);
            }
            ;
            //Vip课程服务部分页面滚动动画
            if ($(window).scrollTop()>=7200) {
                $('.vip_in .hd').animate({'top':'0px','opacity':1},1000);
            };
            if ($(window).scrollTop()>=7400) {
                $('.vip_in .vip_ul').animate({'top':'200px','opacity':1},1500);
            };
            if ($(window).scrollTop() >= 8200) {
                $('.baoming').animate({'opacity': 1}, 1500);
            }
            ;
            //校区位置部分屏幕滚动动画
            if ($(window).scrollTop()>=8500) {
                $('.sch_hd').animate({'left':0,'opacity':1},1500);
            };
            if ($(window).scrollTop() >= 8700) {
                $('.map').animate({'opacity': 1}, 1500);
            };

        });
    });



    //鼠标进入按钮变换颜色
    $('.a_btn').mouseenter(function () {
        $(this).stop().animate({'backgroundColor': '#7986cb', 'color': '#ffffff'}, 200, function () {
            $(this).animate({'backgroundColor': '#1aaf86'}, 200)
        });
    }).mouseleave(function () {
        $(this).stop().animate({'backgroundColor': '#7986cb'}, 200, function () {
            $(this).animate({'backgroundColor': '#E1FF00', 'color': '#000000'}, 200)
        });
    });

    $(function () {
        //实战项目部分切换效果
        $('#t_title>div').mouseenter(function () {
            $(this).addClass('on').siblings().removeClass('on')
            var index = $(this).index();
            $('.show_b:eq(' + index + ')').css('display', 'block').siblings().css('display', 'none');

            for(var i=0;i<lunArr.length;i++){
                lunArr[i].fn_allOver();
            }
            lunArr[index].fn_allOut();

        });
    });


    //精品课程服务切换效果
    $(function () {
        $('.c_box_inner>ul>li').mouseenter(function () {
            $(this).stop().animate({'backgroundColor': '#E1FF00'}, 200).siblings().css('background-color', '#03EFFC');
            var index = $(this).index();
            $('.imgbox>div:eq(' + index + ')').fadeIn(500).siblings().css('display', 'none');
        });
    });

    //鼠标放上显示地理图片
    $('.map>ul>li').mouseenter(function(){
        $(this).find('.li_hov').css('display','block');
    }).mouseleave(function(){
        $(this).find('.li_hov').css('display','none');
    });

    $('.ewmbox').mouseenter(function(){
        $(this).find('.ewm').css('display','block');
        $(this).find('.iconbox').stop().animate({'backgroundColor':'#0a8bb8'},500)
        $(this).find('.iconbox').css('cursor','pointer')
    }).mouseleave(function(){
        $(this).find('.ewm').css('display','none');
        $(this).find('.iconbox').stop().animate({'backgroundColor':'#486687'},500)
    });

});



