const express = require('express');

let server=express();

server.listen(8080);
// server.get('/a',function(req,res){
//     //console.log('express的get请求');
//     res.send({"name":'zhang123'});
// })
// server.post('/upload',function(req,res){
//     console.log('express的get请求');
// })
// /**
//  * resful
//  */
server.use('/upload',function(req,res){
    //console.log('express的get请求');
    res.sendStatus(403);
})

//server.use(express.static('./'));
