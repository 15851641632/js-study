/**
 * Created by zm on 2016/11/30.
 */


/*
 一个模块加载另外一个模块，是不能访问另外一个模块中的变量的，除非定义为global.变量名,但是不推荐这样写，尽量减少全局变量的定义
 可以使用module:保存和提供当前模块的一些信息
 在这个对象中，有一个子对象exports，可以通过这个对象把模块中的局部变量对外提供访问
 */
var aa=200;
/*
在模块中有一个内置对象exports他的指向和module.exports指向是一致的，所以也可以写为
exports.aa=aa;
 */
module.exports.aa=aa;