(function($){

    var timer=null;
    var time_speed=20;
    var currtop=0;// 当前top的位置
    var yidongweizhi=20;//每次移动10px
    var settings = {};
    var $root=null;//根元素，通常是用于包裹ul的div
    var $parent = null;
    var defaults = {
        contents: ['天天鲜1', '天天鲜2', '天天鲜3','天天鲜4','天天鲜5',
        '天天鲜6', '天天鲜7', '天天鲜8','天天鲜9','天天鲜10'],//文本内容
        len:10,//长度
        stop:false,//是否中途停止
    }
    function plugin_carousel(options){
        $parent = this;
        $root=this.parent();
        settings=$.extend(settings,defaults,options);
        create_ui();
    }
    function create_ui(){
        for(var i=0;i<settings.len;i++){
            var $li=$('<li>'+ settings.contents[i] +'</li>')
            $parent.append($li)
        }
        $root.append($parent);
        !!settings.stop?removeBind():bind();
    }
    function removeBind(){
       var li_h=$('li').height();
       currtop=parseInt(Math.random()*settings.len)*-li_h;
       $parent.css({'top':currtop});
       clearInterval(timer);
    }
    function bind(){
        timer=setInterval(goup,time_speed);
    }
    function goup(){
        var ul_listheight = $('.ul_list').height();
            currtop -= yidongweizhi;
            yidongweizhi-=0.1;
            $('.ul_list').css({'top':currtop});
            if(currtop < 0-ul_listheight){
                currtop  = 0;
            }
            if(yidongweizhi < 1){
                clearInterval(timer);
            }
    }
    $.fn.extend({tab: plugin_carousel});

 })(jQuery)   