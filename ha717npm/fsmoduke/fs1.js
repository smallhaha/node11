var http = require("http")
var fs = require("fs")
http.createServer((req, res) => {
    // 读取文件1内容
    // fs.readFile("./a.txt", (err, data) => {
    //     res.end(data.toString())
    // })
    // 写入文件 a = append 追加  r=read 读  w=write写
    // fs.writeFile("./a.txt", "hahahha", { flag: "a" }, (err) => {
    //     res.end("seccess")
    // })

    // 先读取后写入

    // fs.readFile("./a.txt", (err, data) => {
    //         fs.writeFile("./b.txt", data, (err) => {
    //             res.end("seccess")
    //         })
    //     })
    // copyFile 复制
    // fs.copyFile("./a.txt", "./c.txt", (err) => {
    //         res.end("seccess")
    //     })
    // 该名 rename
    // fs.rename('./a.txt', "./aaa.txt", (err) => {
    //         res.end("seccess")
    //     })

    // 删除一个文件 unlink
    // fs.unlink("./aaa.txt", (err) => {
    //         res.end("secces")
    //     })
    // 目录  创建目录
    // fs.mkdir("./aaa", (err) => {
    //         res.end("seccess")
    //     })
    // 删除目录
    // fs.redir('./aa', (err) => {
    //         res.end("seccess")
    //     })
    // 读取目录
    // fs.readdir("./zuoye", (err, data) => {
    //         console.log(data)
    //         res.end()
    //     })
    // 查看目录信息
    fs.stat("./zuoye", (err, stats) => {
        console.log(stats.isDirectory())
        res.end()
    })

    // 以上读取小文件没问题


    // 读写大量文件
    // 流  stream 文件流 createReadStream 创建一个读取文曲文件流
    // 块
    // var stream = fs.createReadStream("./c.txt")
    // var content = ""

    // // data 数据读取的过程   end 数据读取完成 事件
    // stream.on("data", (chunk) => {

    //     content += chunk

    // })
    // stream.on("end", (chunk) => {
    //     console.log("数据读取完成")
    //     res.end(content)
    // })




}).listen(3000)