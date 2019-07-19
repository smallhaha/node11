// npm node的包管理工具
// npm init 项目初始化 = npm init -y  =》package.json
// npm install 下载
// --save==-S 生产环境  dependencies   
//   --save-dev==-D  开发环境devDependencies
// npm uninstall 卸载
var sd = require("silly-datetime")
    // 时间戳格式化

var time = sd.format(new Date(), "YYYY-MM-DD-hh-mm-ss")
    // sd.fromNow(new Date())距离当前时间的前几秒
    // var timer = sd.fromNow(new Date())
console.log(time)