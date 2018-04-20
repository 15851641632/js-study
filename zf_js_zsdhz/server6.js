const http = require('http');
const path = require("path");
const io = require('socket.io');
const fs = require('fs');
const mysql = require('mysql');//引用Mysql
const url = require('url');


let db = mysql.createPool({host: 'localhost',port:'3306', user: 'root', password: '', database: 'nodejs'});
/**
 * 创建一个服务器
 */
let httpServer = http.createServer(function (request, response) {
    fs.readFile(`www${request.url}`, function (err, data) {
        if (err) {
            response.writeHeader(404);
            response.write('NOT FOUND');
        } else {
            response.write(data);
        }
        response.end();
    })
});
/**
 * 监听8080端口
 */
httpServer.listen(8080);


let wsServer = io.listen(httpServer);
let socks = [];
let socks_obj = {};
let userlist=[];//在线用户列表
//连接事件
wsServer.on("connection", (sock) => {
    let current_user = "";
    let current_id = 0;
    socks.push(sock);
    sock.on("reg", (user, pwd) => {
        //用户名是否存在
        db.query(`select * from userinfo where username='${user}'`, (err, data) => {
            if (err) {

                sock.emit('reg_ret', 0, '数据库错误');
            } else if (data.length > 0) {
                sock.emit('reg_ret', 0, '用户名已存在');
            } else {
                db.query(`INSERT INTO userinfo (username,password,online) VALUES ('${user}','${pwd}',0)`, function (err, data) {
                    sock.emit('reg_ret', 1, '注册成功');
                })
            }
        });
    });
    //用户登录
    sock.on("login", (user, pwd) => {
        db.query(`select * from userinfo where username='${user}'`, (err, data) => {
            if (err) {
                sock.emit('login_ret', 0, '数据库错误');
                console.log(err);
            } else if (data.length == 0) {
                sock.emit('login_ret', 0, '该用户名不存在');
            } else if (data[0].password != pwd) {
                sock.emit('login_ret', 0, '密码错误');
            } else {
                db.query(`update userinfo set online=1 where username='${user}'`, err => {
                    socks_obj[user] = sock;
                    current_user = user;
                    current_id = data[0].id;
                    sock.emit('login_ret', 1, '登录成功');
                });

            }
        });
    });
    //发送消息然后广播给所有人
    sock.on('sendmsg', txt => {
        if (!txt) {
            sock.emit('sendmsg_ret', 0, '发送内容不能为空');
        } else {
            //广播给所有人
            socks.forEach(item => {
                if (item == sock) return;
                item.emit('sendmsg', current_user, txt);
            })

            sock.emit('sendmsg_ret', 1, '发送成功');
        }
    });

    //用户列表
    setInterval(function(){

        db.query("select * from userinfo where online=1",function(err,data){
            if(err){
                console.log('数据库错误');
            }else{
                for(let s in data){
                    userlist.push(data[s].username);
                }
            }
            sock.emit('userlist',1,userlist);
            userlist=[];
        })
    },5000)

    //私聊
    sock.on("private_message", (from, to,msg) => {
        //from：发送者ID to:私聊对象的username  msg:具体消息
        let accpet_sock=socks_obj[to];
        accpet_sock.emit('put_private_msg',from,to,msg);
    });
    //用户离线
    sock.on("disconnect", function () {
        db.query(`update userinfo set online=0 where id='${current_id}'`, err => {
            if (err) {
                console.log('用户离线了');
            }
            delete socks_obj[current_user];
            current_user = '';
            current_id = 0;
            socks.filter(item => item != sock);
        })
    });
})