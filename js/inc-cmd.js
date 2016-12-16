/**
 * Created by zm on 2016/12/10.
 */

define([], function () {
    var inc=(function () {
        var a=0;
        function inc(){
            a++;
        }
        function getValue(){
            return a;
        }
        return {
            inc:inc,
            getValue:getValue
        }
    })()
    return inc;
});
