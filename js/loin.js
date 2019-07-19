var http = require("http");
var fs = require("fs");
var url = require("url");
http.createServer((req, res) => {
    // 数据库存放的内容
    if (req.url == "/favicon.ico") {
        console.log(1)
        return
    }
    var a = {
        name: "xixi",
        pass: "123456"
    }
    var query = url.parse(req.url, true).query
    console.log(query.name);
    console.log(query.password);
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" })
    if (query.name == a.name && query.password == a.pass) {
        res.end("登陆成功")
    } else {
        res.end("登陆失败")
    }

}).listen(3000)