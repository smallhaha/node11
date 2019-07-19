var http = require("http")
var url = require("url")
http.createServer((req, res) => {
    // var query = url.parse(req.url, true).query
    // console.log(url.parse(req.url).query)
    // var query = url.resolve('http://127.0.0.1:3000', "/12as")
    var query = url.format({
        protocol: null,
        slashes: null,
        auth: null,
        host: '127.0.0.1',
        port: "3000",
        hostname: null,
        hash: null,
        search: "?name=55&age=09",
        query: "name=55&age=09",
        pathname: '/',
        path: "?name=55&age=09",
        href: "?name=55&age=09",

    })
    console.log(query)
    res.end()
}).listen(3000)