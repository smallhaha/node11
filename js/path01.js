var http = require("http");

// 路径
var path = require("path");
http.createServer((req, res) => {
    // path.resolve 会将最后一个参数转换绝对路径  webpack
    // var oldpath = path.resolve("./c.js")
    // path.normalize路径的格式化
    // var oldpath = path.normalize("./c.js")
    // path.extname 获取文件的扩展名


    // path.format({})   将对象转换为路径
    // var oldpath = path.format({
    //     root: "",
    //     dir: "c:\a\b",
    //     base: "\d"
    // })

    // path.isAbsolute()  返回绝对路径
    // path.join() 将多个路径拼接
    // path.relative() 返回相对路径
    // path.dirname() 返回文件目录
    // path.parse() 解析文件路径
    // var oldpath = path.resolve("./c.js")

    console.log(oldpath)
        // __dirname
    res.end()

}).listen(4000)