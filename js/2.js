var http = require("http")
var fs = require("fs")
http.createServer((req, res) => {
    console.log(req.url)
    if (req.ur == "/red") {
        fs.readFile("../red.html", (err, data) => {
            res.end(data)
        })
    } else if (req.url == '/green') {
        fs.readFile("../green.html", (err, data) => {
            res.end(data)
        })
    }
    // res.end(req.url)


}).listen(3000)