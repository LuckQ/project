


function LunBo(ele1,ele2,ele3,ele4,ele5) {
    this.show = document.getElementById(ele1);
    this.action=document.getElementById(ele5);
    this.arr1 = document.getElementById(ele2);
    this.arr2 = document.getElementById(ele3);
    this.ul = document.getElementById(ele4);
    this.width = 962;
    this.num = 0;
    this.time=null
    this.bool=true;



    var that=this;

    //左右按钮切换功能开始
    this.show.onmouseover=function() {
        that.fn_allOver()
    }

    this.show.onmouseout=function() {
        that.fn_allOut()
    }

    //点击右按钮
    this.arr1.onclick=function() {
        that.fn_SpanR_Click()
        var target=that.width*that.num;
        that.scroll(that.ul,-target)
    }

    //点击左按钮
    this.arr2.onclick=function() {
        that.fn_SpanL_Click()
        var target=that.width*that.num;
        that.scroll(that.ul,-target)
    }



}

//自动播放功能
LunBo.prototype.fn_AutoPlay=function() {
    this.num++;

    if (this.num==5) {
        this.num=1;
        this.ul.style.left=0;
    }
    var target=this.width*this.num;
    this.scroll(this.ul,-target)
}


//左按钮点击功能
LunBo.prototype.fn_SpanL_Click=function() {
    this.num--;
    if (this.num==-1) {
        this.num=3;
        this.ul.style.left=-this.width*4+'px';
    }
}


//右按钮点击功能
LunBo.prototype.fn_SpanR_Click=function() {
    this.num++;
    if (this.num==5) {
        this.num=1;
        this.ul.style.left=0;
    }
}



//左右按钮切换功能方法
LunBo.prototype.fn_allOver=function() {

            clearInterval(this.time)



}

LunBo.prototype.fn_allOut=function() {


    var that=this;
    this.time=setInterval(function(){
        that.fn_AutoPlay()
    },2000)

}

LunBo.prototype.openTime = function(){
    var that = this;
    this.time=setInterval(function() {
        that.fn_AutoPlay()
    },2000)
}

LunBo.prototype.closeTime = function(){
    clearInterval(this.time)
}




//图片移动功能
LunBo.prototype.scroll=function(ele,position){
    clearInterval(ele.timer);
    ele.timer=setInterval(function(){
        var step=30;
        step=position>ele.offsetLeft?step:-step;
        ele.style.left=ele.offsetLeft+step+"px";
        if (Math.abs(position-ele.offsetLeft)<=Math.abs(step)) {
            ele.style.left=position+'px';
            clearInterval(ele.timer);
        }
    },10)
}




function fn(ele, position) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = position > ele.offsetLeft ? 30 : -30;
        ele.style.left = ele.offsetLeft + step + 'px';
        if (Math.abs(position - ele.offsetLeft) <= Math.abs(step)) {
            ele.style.left = position + 'px';
            clearInterval(ele.timer);
        }
    }, 10)
}

var lunArr = [];

var lunbo1=new LunBo('slideBox','next','prev','lunbo_ul','show_b1')
var lunbo2=new LunBo('slideBox2','next2','prev2','lunbo_ul2','show_b2')
var lunbo3=new LunBo('slideBox3','next3','prev3','lunbo_ul3','show_b3')
var lunbo4=new LunBo('slideBox4','next4','prev4','lunbo_ul4','show_b4')

lunArr.push(lunbo1,lunbo2,lunbo3,lunbo4);