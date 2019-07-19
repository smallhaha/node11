var http = require('http')
var fs = require('fs')
http.createServer((rep, res) => {
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" })
    fs.readFile("../test.txt", (err, data) => {
        res.end(data)
    })
}).listen(2000)