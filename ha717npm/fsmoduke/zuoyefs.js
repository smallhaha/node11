var http = require("http")
var fs = require("fs")
http.createServer((req, res) => {
    if (req.url == '/favicon.ico') {
        return
    }
    // console.log(111)
    // fs.stat("./zuoye", (err, stats) => {
    //         console.log(stats.isDirectory())
    //         res.end()
    //     })
    var arr = []
    var arr1 = []
    fs.readdir("./zuoye", (err, data) => {
        // console.log(data)
        arr = data
        var j = 0;
        console.log(arr.length)
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i])
            fs.stat("./zuoye/" + arr[i], (err, stats) => {
                console.log(stats.isDirectory())
                if (stats.isDirectory() == true) {
                    // console.log(arr[i])
                    arr1[j++] = arr[i]
                    console.log(arr1)
                }


            })
        }
        res.end()
    })


}).listen(4000)