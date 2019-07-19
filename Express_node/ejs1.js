var express = require("express");
var fs = require("fs")
var app = express();
// 设置模板引擎
// app.set
// engine 引擎
// 设置模板引擎为ejs
app.set('view engine', 'ejs');
// 指定模板引擎的目录
app.set("views", __dirname + "/views")
app.get("/", function(req, res) {
    var list = ["1", "2", "3"]
        // fs.readFile("./views/ejs1.ejs", function(err, data) {
        // var templat = data.toString()
    res.render("index", { list: list })
        // })
})

app.listen(3000)