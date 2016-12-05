/**
 * Created by zm on 2016/12/1.
 */
define(function (require,exports,module) {
    // exports:对外提供接口的对象
    //require:模块之间依赖的接口
    //require('./module2.js');//这种写法针对调用的变量没有写在define里面
    var mod1=require('./module2');//这种写法针对如果变量也是属于sea模块中的，那么mod1就是exports
    function show() {
        console.log('模块1');
        console.log('依赖模块2,并且调用模块2中的变量:'+mod1.test);
    }
    exports.show=show;
})