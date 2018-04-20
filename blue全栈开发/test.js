<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>

	<body>
		<script type="text/javascript">
			//es6变量赋值使用let或者const
			/*解构赋值:
			 * 1-左右两边必须保持一致，且右边必须是个东西  2-必须定义和赋值同步进行
			let [a,b,c]=[1,2,3];
			console.log(a,b,c);
			
			let [n1,{a,b},n2]=[1,{"a":100,"b":200},10];
			console.log(n1,a,b,n2);
			
			let {a,b}={'a':100,'b':200};
			console.log(a,b);
			 */

			/*
			 * 箭头函数:
			 * let arr=[5,3,200,0,1,2];
			arr.sort((n1,n2)=>{
				return n1-n2;
			})
			 * 
			 * let show=(a,b)=>{
				return a+b;
			}
			alert(show(1,2));
			 * 
			 */

			//1、如果有且仅有一个参数:圆括号可以省掉
			//2、如果函数体只有一句话，且是return,可以把花括号省掉
			//let arr=[5,3,200,0,1,2];
			//arr.sort((n1,n2)=>n1-n2);
			//alert(arr);
			//let show=a=>a*3;
			//alert(show(5));

			/*
			 * 默认参数:
			 * var show=function(a=10,b=20,c=30){
			 * }
			 */

			/*
			 * 参数展开
			 * 1、三个点第一个用途用于接收剩余的参数
			 * 2、三个点第二个用途用于展开一个数组
			 * 			function show(a,...args){
				console.log(arguments);
			}
			 */

			/*
			 * map
			 */

			//			let arr=[1,2,3,4,5,10,20];
			//			let arr2=arr.map(function(item,index){
			//				if(item>5){
			//					return true
			//				}else{
			//					return false;
			//				}
			//			})
			//改成简写模式
			//			let arr=[1,2,3,4,5,10,20];
			//			let arr2=arr.map((item,index)=>item>5)
			//			console.log(arr2);

			/*
			 * filter
			 */
			//			let arr=[2,4,5,7,8,10];
			//			let arr2=arr.filter((item)=>item%2);
			//			console.log(arr2);

			/*
			 * forEach
			 */
			//			let arr=[1,2,3,4,5];
			//			let sum=0;
			//			arr.forEach(item=>sum+=item)
			//			console.log(sum);

			/*
			 * reduce
			 * 求数组平均值
			 */
			//			let arr=[1,2,4,5,6];
			//			let avg=arr.reduce(function(tmp,item,index){
			//				if(index<arr.length-1){
			//					return tmp+=item;
			//				}else{
			//					return (tmp+item)/arr.length;
			//				}
			//			})
			//			console.log(avg);

			/*
			 * startsWith endsWith
			 */
			//			let str='135232323';
			//			if(str.startsWith('135')){
			//				alert("联通")
			//			}else{
			//				alert("移动");
			//			}

			/*
			 * 面向对象
			 */

			//			class Person{
			//				
			//				constructor(name,age){
			//					this.name=name;
			//					this.age=age;
			//				}
			//				showname(){
			//					alert(this.name);
			//				}
			//			}
			//			
			//			var obj=new Person("blue",'123');
			//			//obj.showname();
			//			
			//			extends：把父类的方法继承过来
			//			super:把父类的属性继承过来
			//			class Student extends Person{
			//				constructor(name,age,job){
			//					super(name,age);
			//					this.job=job;
			//				}
			//				showjob(){
			//					alert(this.job);
			//				}
			//			}
			//			var obj2=new Student('aa','bb','cc');
			//			obj2.showname();
			//			obj2.showjob();
		</script>
	</body>

</html>