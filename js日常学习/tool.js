/**
 * Created by zm on 2016/11/15.
 */
function cssTransform(ele, attr, val) {
    if (!ele.transform) {
        ele.transform = {};
    }
    if (arguments.length > 2) {
        //设置
        ele.transform[attr] = val;
        var sVal = "";
        for (var s in ele.transform) {
            switch (s) {
                case 'rotate':
                case 'skewX':
                case 'skewY':
                    sVal += s + "(" + ele.transform[s] + "deg)";
                    break;
                case 'translateX':
                case 'translateY':
                    sVal += s + "(" + ele.transform[s] + "px)";
                    break;
                case 'scaleX':
                case 'scaleY':
                case 'scale':
                    sVal += s + "(" + ele.transform[s] + ")";
                    break;
            }
            ele.style.WebkitTransform = ele.style.transform = sVal;
        }
    } else {
        //获取
        val = ele.transform[attr];
        if (typeof val == 'undefined') {
            if (attr == 'scale' || attr == 'scaleX' || attr == 'attrY') {
                val = 1;
            } else {
                val = 0;
            }
        }
        return val;
    }
}
function startMove(ele, json, callback) {
    clearInterval(ele.timer);
    var icur = 0;
    var speed = 0;
    ele.timer = setInterval(function () {
        var ibtn = true;
        for (var attr in json) {
            var target = json[attr];
            if (attr == 'opacity') {
                icur = Math.round(css(ele, 'opacity') * 100);
            } else {
                icur = parseInt(css(ele, attr));
            }
            speed = (target - icur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (icur != target) {
                ibtn = false;
                if (attr == 'opacity') {
                    ele.style.opacity = (icur + speed) / 100;
                    ele.style.filter = 'alpha(opacity=' + (icur + speed) + ')';

                } else {
                    ele.style[attr] = icur + speed + 'px';
                }
            }
        }
        //console.log(ibtn);
        if (ibtn) {
            clearInterval(ele.timer);
            callback && callback.call(ele);
        }
    }, 30);
}


function css(obj, attr) {
    var style = obj.attr ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
    return style;

}








