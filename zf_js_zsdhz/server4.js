const http = require('http');
const path = require("path");
const io = require('socket.io');
const fs = require('fs');
const mysql = require('mysql');//引用Mysql
const url = require('url');


let db = mysql.createPool({host: 'localhost', user: 'root', password: '', database: 'nodejs'});

let httpServer = http.createServer(function (req, res) {

    let {pathname, query} = url.parse(req.url, true);

    if (pathname == '/reg') {
        //校验用户名密码
        //校验是否重复
        let {user, pwd} = query;
        db.query(`select * from userinfo where username='${user}'`, (err, data) => {
            if (err) {
                res.write(JSON.stringify({code: 0, msg: '数据库错误'}));
                res.end();
            } else if (data.length > 0) {
                res.write(JSON.stringify({code: 0, msg: '用户名存在'}));
                res.end();
            } else {
                db.query(`INSERT INTO userinfo (username,password,online) VALUES ('${user}','${pwd}',0)`, function (err, data) {
                    res.write(JSON.stringify({code: 1, msg: '注册成功'}));
                    res.end();
                })
            }
        })
    } else if (pathname == '/login') {
        let {user, pwd} = query;
        db.query(`select * from userinfo where username='${user}'`,function(err,data){
            if(err){
                res.write(JSON.stringify({code: 0, msg: '数据库错误'}));
                res.end();
            }else if(data.length==0){
                res.write(JSON.stringify({code: 0, msg: '此用户名不存在'}));
                res.end();
            }else if(data[0].password!=pwd){
                res.write(JSON.stringify({code: 0, msg: '密码错误'}));
                res.end();
            }else{
                db.query(`update userinfo set online=1 where id='${data[0].id}' `,function(err,data){
                    if(err){
                        res.write(JSON.stringify({code: 0, msg: '数据库错误'}));
                        res.end();
                    }else{
                        res.write(JSON.stringify({code: 1, msg: '登录成功'}));
                        res.end();
                    }
                })
            }
        })
    } else {

        fs.readFile(`www${pathname}`, function (err, data) {
            if (err) {
                res.writeHeader(404);
                res.write('NOT FOUND');

            } else {
                res.write(data);
            }
            res.end();
        })

    }
});

httpServer.listen(8080);