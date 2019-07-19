var express = require("express");
var path = require("path")
var app = express();
// 执行了get请求
// 在express 路径不区分大小写
// 同时支持链式调用操作
// app.get('/about', function(req, res) {
//         console.log(req.query)
//         res.send('Hello GET');
//     })
// 获取动态的响应头
// app.get("/about/:id", (req, res) => {
//     res.send("路由接收到的参数：" + req.params.id)
// })
console.log(__dirname)



// express.static（）使用静态资源
// app.use 使用  中间件  插件

var publicpath = path.resolve(__dirname, "public")

// 使用静态资源服务器
app.use(express.static(publicpath))

app.listen(3000)