(function($){

    var settings = {};
    var defaults = {events: 'click'};
    function plugin_carousel(options){
       
       $parent = this;
       console.log($parent);
       settings = $.extend(settings, defaults, options);
       bind();
    }
   function bind() {
        //绑定事件
        $parent.on(settings.events, 'a', function () {
            var index=$(this).index();
            alert(index);
            //$(this).attr('class', 'focus').siblings('input').attr('class', '');
            //$parent.find('div').eq($(this).index()).css('display', 'block').siblings('div').css('display', 'none');
        })
    }
    $.fn.extend({tab: plugin_carousel});

 })(jQuery)   