

// 阻塞和非阻塞，同步和异步是node.js里经常遇到的词汇，我举个简单的例子来说明：
// 我要看足球比赛，但是妈妈叫我烧水，电视机在客厅，烧水要在厨房。家里有2个水壶，一个是普通的水壶，另一个是水开了会叫的那种水壶。我可以：
// 用普通的水壶烧，人在边上看着，水开了再去看球。（同步，阻塞）这个是常规做法，但是我看球不爽了。
// 用普通水壶烧，人去看球，隔几分钟去厨房看看。（同步，非阻塞）这个又大问题，万一在我离开的几分钟水开了，我就麻烦了。
// 用会叫的水壶，人在边上看着。（异步，阻塞）这个没有问题，但是我太傻了。
// 用会叫的水壶，人去看球，听见水壶叫了再去看。（异步，非阻塞）这个应该是最好的。
// 等着看球的我：阻塞
// 看着电视的我：非阻塞
// 普通水壶：同步
// 会叫的水壶：异步
// 所以，异步往往配合非阻塞，才能发挥出威力。
const http = require('http');
const path = require("path");
const io = require('socket.io');
const fs = require('fs');
const mysql = require('mysql');//引用Mysql
const url = require('url');


let db = mysql.createPool({host: 'localhost', port: '3306', user: 'root', password: '', database: 'nodejs'});
/**
 * 创建一个服务器
 */
let httpServer = http.createServer((request, response) => {
    fs.readFile(`www${request.url}`, (err, data) => {
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
let userlist = [];//在线用户列表
//连接事件
wsServer.on("connection", sock => {
    let current_user = "";
    let current_id = 0;
    socks.push(sock);//保存sock对象
    sock.on("reg", (user, pwd) => {
        //用户名是否存在
        db.query(`select * from userinfo where username='${user}'`, (err, data) => {
            if (err) {
                sock.emit('reg_ret', 0, '数据库错误');
            } else if (data.length > 0) {
                sock.emit('reg_ret', 0, '用户名已存在');
            } else {
                db.query(`INSERT INTO userinfo (username,password,online) VALUES ('${user}','${pwd}',0)`, (err, data) => {
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
    setInterval(function () {

        db.query("select * from userinfo where online=1", (err, data) => {
            if (err) {
                console.log('数据库错误');
            } else {
                for (let s in data) {
                    userlist.push(data[s].username);
                }
            }
            sock.emit('userlist', 1, userlist);
            userlist = [];
        })
    }, 5000)

    //私聊
    sock.on("private_message", (from, to, msg) => {
        //from：发送者ID to:私聊对象的username  msg:具体消息
        let accpet_sock = socks_obj[to];
        accpet_sock.emit('put_private_msg', from, to, msg);
    });
    //用户离线
    sock.on("disconnect", () => {
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
