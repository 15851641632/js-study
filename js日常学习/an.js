/**
 * Created by zm on 2016/12/4.
 */
//angularָ����ⲿ����Ҳ���Եģ��Թ���
var app = angular.module("myApp", []);
app.directive("runoobDirective", function () {
    return {
        //template: "<div>�Զ���ָ��!</div>",
        //replace:true,
        link: function (scope, element, attrs) {
            //elementΪJQ����
            //element.css('border','1px solid red');
            //��װ��קָ��ĺô����ǣ����Ե������ã������ͻ
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
//            //������Ч��Χ,һ������²���class��comment
//            //restrict: 'ECMA',
//            //Ĭ��ָ��ķ�ΧEA,���ǿ��Ը�ָ�����ģ��
//            template:"<div>hello world</div>",
//            //��ԭָ���滻��
//            replace: true
//        }
//    });