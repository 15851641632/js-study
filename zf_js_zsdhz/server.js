const http=require('http');
const io=require('socket.io');
const fs=require('fs');

let httpServer=http.createServer();
httpServer.listen(8080);

let wsServer=io.listen(httpServer);

wsServer.on("connection",function (sock) {
    console.log(sock.id);
    sock.on('aaa',function (num1,num2) {
        //console.log("来自浏览器:"+num1+"====="+num2);
    })

    setInterval(function () {
        sock.emit("tohtml",'我是服务器推送信息111');
    },2000)
})