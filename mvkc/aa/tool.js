(function(window) {

	var u = {};
	/*
	 * 对象的调用分为三种:
	 * $api.xxx=>这是定义在$api对象下的方法或者属性
	 * $(obj).xxxx,这是定义在实例对象下的属性和方法，类似于jq,需要在框架内部new
	 */
	u.extend = function(param1, param2) {
		for(var attr in param2) {
			param1[attr] = param2[attr];
		}
	}

	var vquery = function(selector) {
		return new vquery.in.init(selector);
	}

	vquery.prototype = {

		constructor: vquery,
		init: function(selector) {

			if(!selector) {
				return false;
			}
		}
	}

	function $(args) {
		return new vquery(args);
	}

	window.$api = u;
})(window)