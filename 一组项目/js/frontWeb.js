/**
 * Created by ldq on 2018/3/1.
 */
//ҳ�����ʱ����������
$(function () {
    $('#ban_bg').animate({'opacity': 1, 'top': 0}, 500);
    $('.hd1').animate({'opacity': 1, 'right': '300px'}, 500);
    $('.hd2').animate({'opacity': 1, 'left': '450px'}, 500);
    //������ת����
    $('.circle>img').animate({'transform': 'rotate(360deg)'}, 2000, function fc() {
        $(this).animate({'transform': 'rotate(360deg)'}, 2000, fc)
    });
    //����������ť����
    $('.qiangzuo').mouseenter(function () {
        $('.shu').stop().animate({'bottom': '13px'}, 100, function () {
            $('.heng').stop().animate({'right': '8px'}, 100);
        });
    }).mouseleave(function () {
        $('.heng').stop().animate({'right': '-240px'}, 100, function () {
            $('.shu').stop().animate({'bottom': '-100px'}, 100);
        });
    });

    //Ϊʲôѡ��ǰ��ҳ�����Ч��
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
            //ǰ�˹���ʦ��ֵ����ҳ�����Ч��
            if ($(window).scrollTop() >= 1400&&$(window).scrollTop()<=2000) {
                $('.GassValue>.hd').animate({'opacity': 1, 'top': 0}, 1000)
            }
            ;
            if ($(window).scrollTop() >= 1600) {
                $('#tongji').animate({'opacity': 1, 'bottom': 0}, 1500)
            }
            ;

            //ͳ��ͼ���һ���Ч��
            if ($(window).scrollTop() >= 1800&&$(window).scrollTop()<=2400) {
                $('.TJ_top_l').animate({'opacity': 1, 'left': 0}, 500, function () {
                    $('.TJ_top_l .jd>b').animate({'left': 0, 'opacity': 1}, 500);
                });
                $('.TJ_top_r').animate({'opacity': 1, 'right': '50px'}, 500, function () {
                    //ƽ��������ʾ
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
            //ѧԱ��Ϣҳ�����Ч��
            if ($(window).scrollTop() >= 2400) {
                $('.info_txt').animate({'top': '0px', 'opacity': 1}, 1000)
            }
            ;
            if ($(window).scrollTop() >= 2600) {
                $('.infoTable').animate({'top': '200px', 'opacity': 1}, 1500)
            }
            ;
            //������Ϊ���޴����ڲ���ҳ���������
            if ($(window).scrollTop() >= 3800) {
                $('.fire .hd').animate({'top': '0px', 'opacity': 1}, 1000)
            }
            ;
            if ($(window).scrollTop() >= 4000) {
                $('.fire_box').animate({'top': '200px', 'opacity': 1}, 1500)
            }
            ;
            //ʵս��Ŀ����ҳ�����Ч��
            if ($(window).scrollTop() >= 4900) {
                $('.fight_in .hd').animate({'opacity': 1}, 1000);
            }
            ;
            if ($(window).scrollTop() >= 5400) {
                $('.fight_con').animate({'opacity': 1}, 1500);
            }
            ;
            //��Ʒ�γ̷���ҳ���������
            if ($(window).scrollTop() >= 6200) {
                $('.create_in .hd').animate({'opacity': 1}, 1000);
            }
            ;
            if ($(window).scrollTop() >= 6500) {
                $('.create_box').animate({'opacity': 1}, 1500);
            }
            ;
            //Vip�γ̷��񲿷�ҳ���������
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
            //У��λ�ò�����Ļ��������
            if ($(window).scrollTop()>=8500) {
                $('.sch_hd').animate({'left':0,'opacity':1},1500);
            };
            if ($(window).scrollTop() >= 8700) {
                $('.map').animate({'opacity': 1}, 1500);
            };

        });
    });



    //�����밴ť�任��ɫ
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
        //ʵս��Ŀ�����л�Ч��
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


    //��Ʒ�γ̷����л�Ч��
    $(function () {
        $('.c_box_inner>ul>li').mouseenter(function () {
            $(this).stop().animate({'backgroundColor': '#E1FF00'}, 200).siblings().css('background-color', '#03EFFC');
            var index = $(this).index();
            $('.imgbox>div:eq(' + index + ')').fadeIn(500).siblings().css('display', 'none');
        });
    });

    //��������ʾ����ͼƬ
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



