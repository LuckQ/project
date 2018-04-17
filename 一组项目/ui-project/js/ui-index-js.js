/**
 * Created by 芮芮 on 2018/3/4.
 */

window.onload = function () {

    /**
     * 轮播图
     */
    //获取元素
    var section = document.getElementsByClassName('section')[0];
    var banner = section.getElementsByClassName('banner')[0];
    var bannerImg = banner.getElementsByClassName('banner-img')[0];
    var banner_ul = bannerImg.getElementsByClassName('banner_ul')[0];
    var imgWidth = banner.offsetWidth;
    console.log(imgWidth);
    var bannerBj = bannerImg.getElementsByClassName('banner-bj')[0];
    var bannerBj2 = bannerImg.getElementsByClassName('banner-bj2')[0];
    var circle = banner.getElementsByClassName('circle')[0];
    var sps = circle.children;
    var timer=null;
    var num_ul=0
    var num_ulc=0
    console.log(banner_ul);

    //需求1 鼠标放到小点上，让对应的ul移动，并点亮小点
    //循环遍历
    banner.onmouseover=function(){
        clearInterval(timer)
    }
    banner.onmouseout=function(){
        Auto();
    }
    function Auto() {
        clearInterval(timer);
        timer=setInterval(function(){
           num_ul++;
            num_ulc++;
            if (num_ulc==2){
                num_ulc=0
            }
            if (num_ul==3){
                num_ul=1;
                banner_ul.style.left=0;
            }
            for (var i=0;i<sps.length;i++){
                sps[i].className='';
            };
            sps[num_ulc].className='active';
            animate(banner_ul,-imgWidth*num_ul);
        },2000)
    }
    Auto();
    for (var i = 0; i < sps.length; i++) {
        //自定义属性绑定索引值
        sps[i].index = i;
        //小点点击事件
        sps[i].onclick = function () {
            //点亮小点
            for (var j = 0; j < sps.length; j++) {
                //排他
                sps[j].className = '';
            }
            //当前的点亮
            this.className = 'active';
            //移动盒子背景图
            animate(banner_ul,-(imgWidth*this.index));
            num_ul=num_ulc=this.index;
        };
    }

    // 匀速动画封装;
    function animate(element, target) {
        // 要用定时器，先清定时器
        clearInterval(element.timer);
        // 把定时器绑定到元素的自定义属性上
        element.timer = setInterval(function () {
            // 处理步长
            var step = target > element.offsetLeft ? 10 : -10;
            // 赋值
            element.style.left = element.offsetLeft + step + 'px';
            // 走过了或者
            // 不足一个步长就停止定时器;
            if (Math.abs(target-element.offsetLeft) <= Math.abs(step)) {// 负值的时候也要一步一步走
                // 直接设置目标位置；
                element.style.left = target+'px';
                clearInterval(element.timer);
            }
        }, 10);
    }
};

