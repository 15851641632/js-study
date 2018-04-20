const http=require('http');
const io=require('socket.io');
const fs=require('fs');


let httpServer=http.createServer(function (req,res) {
console.log('有人请求我');
console.log(`客户端请求的是:${req.url}`);
console.log(`请求的方法是:${req.method}`);

res.write('66666');
res.write('sfsfsfsf');
res.end();
});
httpServer.listen(8080);

