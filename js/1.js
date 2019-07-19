// http 模块 cmd  amd  import requier?
// 引入http模块
var http = require("http")

// 创建服务器
http.createServer((request, response) => {
        //req==request 请求     res==response响应
        console.log("hello")
            // 结束响应
        response.end('end');
        // text/plain  文本
        //写入响应头 文本类型   text/html 格式 utf-8
        // response.writeHead(200,{'Content-type':"text/html;charset=utf-8"})
    }).listen(4000)
    // listen 监听端口