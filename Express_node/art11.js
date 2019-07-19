var express = require("express");
var art = require("express-art-template")
var app = express();
// 引入模板引擎
// 第一个参数 art ejs jade=》pug swig
app.engine("art", art)
app.get("/", function(req, res) {

    // .art  必须写上，不然express-art-template识别不到模板引擎
    res.render("new.art", {
        list: ["tom", "jeck", "haha"]
    })
})

app.listen(3000)