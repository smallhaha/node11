var http = require("http");
var path = require("path");
var fs = require("fs");
var sd = require("silly-datetime")
var fd = require("formidable")
http.createServer((req, res) => {
    if (req.url == '/favicon.ico') {
        return
    }
    if (req.url == "/dopost") {
        var form = new fd.IncomingForm();
        form.uploadDir = "./upload"
        form.parse(req, function(err, fields, files) {

            // console.log(form)
            //    fields 文本域   files文件域
            var oldpath = files.pic.path
            var extname = path.extname(files.pic.name)
            var tt = sd.format(new Date(), "YYYYMMMDDhhmmss")
            var newpath = "./upload/" + tt + extname;
            console.log(newpath)
            fs.rename(oldpath, newpath, (err) => {
                    res.end("seccess")
                })
                // console.log(fields);
                // console.log(files);

        })
    }
}).listen(3000, () => {
    console.log('服务器已经启动')
})