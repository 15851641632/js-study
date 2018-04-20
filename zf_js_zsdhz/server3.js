const http = require('http');
const io = require('socket.io');
const fs = require('fs');
const mysql = require('mysql');//引用Mysql
const url = require('url');


let db = mysql.createPool({host: 'localhost', user: 'root', password: '', database: 'nodejs'});
let httpServer = http.createServer(function (req, res) {

    let {pathname, query} = url.parse(req.url, true);
    if (pathname == '/1') {
        let {user,pwd}=query;
        db.query(`select * from userinfo where username='${user}'`,function(err,data){
            if(err){
                res.write(JSON.stringify({code:1,msg:'database error'}));
                res.end();
            }else if(data.length>0){
                res.write(JSON.stringify({code:1,msg:'already'}));
                res.end();
            }else{
                db.query(`insert into userinfo (username,password,online) VALUES ('${user}','${pwd}',0)`,function(err,data){
                    if(err){
                        res.write(JSON.stringify({code:0,msg:'insert error'}));
                        res.end();
                    }else{
                        res.write(JSON.stringify({code:1,msg:'insert success'}));
                        res.end();
                    }
                });
            }
        })

    }
});

httpServer.listen(8080);
