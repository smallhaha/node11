var http = require("http");
var ejs = require("ejs");
var fs = require("fs");
http.createServer((req, res) => {
    var datas = {
        "list": [{
                name: "tom",
                age: 12
            },
            {
                name: "zuolong",
                age: 12
            }
        ]
    }

    fs.readFile('./index.ejs', (err, data) => {
        var template = data.toString()
            // console.log(template)
            // console.log(list.name)
        var result = ejs.render(template, datas)
        console.log(result)
        res.end(result)
    })
}).listen(3000)