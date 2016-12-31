/**
 * Created by zm on 2016/12/4.
 */
//angular指令从外部引入也可以的，试过了
var app = angular.module("myApp", []);
app.directive("runoobDirective", function () {
    return {
        //template: "<div>自定义指令!</div>",
        //replace:true,
        link: function (scope, element, attrs) {
            //element为JQ对象
            //element.css('border','1px solid red');
            //封装拖拽指令的好处就是，可以到处复用，不会冲突
            element.on('mousedown', function (ev) {
                //var ev=ev||event;
                var disx = ev.pageX - this.offsetLeft;
                var disy = ev.pageY - this.offsetTop;
                angular.element(document).on('mousemove', function (ev) {
                    element.css({
                        left: (ev.pageX - disx) + 'px',
                        top: (ev.pageY - disy) + 'px'
                    })

                })
                angular.element(document).on('mouseup', function (ev) {
                    angular.element(document).off();
                })
                ev.preventDefault();
            })
        }
    };
});


//    app.directive('zfWeb', function () {
//        return {
//            //限制生效范围,一般情况下不用class和comment
//            //restrict: 'ECMA',
//            //默认指令的范围EA,我们可以给指令添加模板
//            template:"<div>hello world</div>",
//            //将原指令替换掉
//            replace: true
//        }
//    });