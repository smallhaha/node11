var express = require("express")
var cookieParser = require("cookie-parser")
var app = express();
app.use(cookieParser())


app.get("/", (req, res) => {
    res.send("首页")
})
app.get("/set", (req, res) => {
    // cookie  httpOnly:true/false  domain 域名  MaxAge有效期  size大小  expires过期时间
    res.cookie("username", "haha", { maxAge: 200000, httpOnly: true })
    res.send("设置成功")
})
app.get("/get", (req, res) => {
    var name = req.cookies.username
    console.log(name)
    res.send("读取成功" + name)
})
app.listen(3000)