const http = require("http");
const fs = require('fs');
const querystring = require("querystring")
const urllib = require('url')
var server = http.createServer(function(request, response) {

    var str = "";
    request.on("data", function(data) {
        str += data;
    })
    request.on("end", function() {
        var post = querystring.parse(str)
        var result = JSON.parse(fs.readFileSync("c.js"))
        var name = post.name;
        var password = post.password;
        for (var i = 0; i < result.length; i++) {
            if (name == result[i].name) {
                if (password == result[i].password) {
                    response.write("sucessful");
                    break;
                } else {
                    response.write("password is wrong");
                    break;
                }
            } else if (i == (result.length - 1)) {
                response.write("username is wrong");
            }
        }
        // response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end()
    })
})
server.listen(8080);