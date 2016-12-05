/**
 * Created by zm on 2016/12/1.
 */
define(function (require,exports,module) {
    function show2() {
        console.log('模块2');
    }
    var test=300;
    exports.test=test;
    exports.show2=show2;
})