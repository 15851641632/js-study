/**
 * Created by zm on 2016/10/15.
 */
// 去重
Array.prototype.distAry = function () {
    var obj = {};
    for (var i = 0; i < this.length; i++) {
        var cur = this[i];
        if (obj[cur] != cur) {
            obj[cur] = cur;
        } else {
            this.splice(i, 1);
            i--;
        }
    }
    obj = null;
    return this;
}

//冒泡排序
Array.prototype.Arrsort = function () {
    var temp = null;
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < this.length - 1 - i; j++) {
            if (this[j] > this[j + 1]) {
                temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
    return this;
}