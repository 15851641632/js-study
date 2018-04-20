(function(w){

	var u={};
	u.sex='男';
	u.age=22;
	u.getsex=function(){
		alert(this.sex);
	}

	window.$api=u;
})(window)