/**
 * Created by zm on 2016/11/30.
 */
/**
 * Created by zm on 2016/11/30.
 */
/*
 node和普通js，在语法上基本是一致的，区别是node中的顶层对象是global,而普通js的顶层对象是window
 */


//不能这样访问，NODEJS中有模块的概念，一个文件就是一个模块,每个模块都有自己的作用域
// var a=100;
// console.log(global.a);

// console.log(__filename);
// var m1 = require('./2.js');
//require('2.js');不能省略写，否则会加载node的核心模块或者加载node_modules
//require('./2')这样查找，会先搜索文件名为2的，如果没找到，就在2的后面添加.js继续查找,如果没找到就加上.json后缀，还没找到就加上
//,node后缀

/*
 __filename:返回当前模块文件解析后的绝对路径，该属性不是全局的，而是模块作用域下的，(文件)
 __dirname:返回当前模块所在目录解析后的绝对路径，...（文件夹）
 process: 是一个全局对象,可以访问当前正在运行的程序的进程
 */
// process.stdout.write('2222');
// console.log('aaa:'+process.stdin);
// setInterval(function () {
//     process.exit();
// },2000)
function  Log(data) {
    process.stdout.write(data);
}

var a;
var b;
//默认情况下，输入流是关闭的,要监听处理输入流数据，首先要开启输入流
// process.stdin.resume();
//
// process.stdout.write('请输入a的值');
// process.stdin.on('data',function (data) {
//     if(!a){
//         a=Number(data);
//         process.stdout.write('请输入b的值');
//     }else{
//         b=Number(data);
//         process.stdout.write('结果是:'+(a+b));
//     }
// })

/*
Buffer类:用于操作二进制数据流
new Buffer(size) 创建一个Buffer，并为这个对象设定一个大小
当我们为buffer分配了大小之后，其长度是固定的，不能更改
 */
// var bf=new Buffer(5);
// console.log(bf);
//长度一旦固定死，就不能更改了
// var bf2= new Buffer([1,2,3]);
// console.log(bf2);

//将字符串转为二进制
// var bf3=new Buffer('zhang','utf-8');
// for(var i=0;i<bf3.length;i++){
//     //console.log(bf3[i]);2进制
//     //console.log(bf3[i].toString(16));16进制
//     //console.log(String.fromCharCode(bf3[i]));逐个输出字母
// }

var bf=new Buffer('miaov');
var bf4=new Buffer(20);
// bf4=bf;//这样直接赋值会是引用，后期修改bf4会影响到bf
// bf4[2]='3';
// console.log(bf4);
// console.log(bf);
bf.copy(bf4);//使用copy方法将bf中的内容拷贝到bf4中，就不会互相影响了
bf4[2]='3';
console.log(bf);
console.log(bf4);

