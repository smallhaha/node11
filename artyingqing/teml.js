var http = require("http")
var art = require("art-template")
var fs = require("fs")
http.createServer((req, res) => {
    var datas = {
        list: ["1", "2"]
    }

    // var html = template(__dirname + "./yingqing.art")
    fs.readFile("./index.art", (err, data) => {
        var str = data.toString();
        console.log(str)
        var result = art.render(str, datas)
        res.end(result)
    })

}).listen(3000)