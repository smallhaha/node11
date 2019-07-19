// 引入服务器模块
var http = require("http")
    // file system 文件系统
var fs = require("fs")
    // 模板引擎
var ejs = require("ejs")
    // 创建服务器
http.createServer((req, res) => {
        // req==request请求   res=response 响应
        var list = ["1", "2", "3"]
        fs.readFile("./lianxi.ejs", (err, data) => {
            var str = data.toString()
            console.log(str)
                // render 渲染模板
            var result = ejs.render(str, { list: list })
            res.end(result) //参数只能是字符串
        })
    }).listen(3000) //监听端口