function showIndex(req, res) {
    res.end("首页")
}

function showAoubt(req, res) {
    res.end("关于")
}

function showNew(req, res) {
    res.end("新闻")
}

function show404(req, res) {
    res.end("404")
}
exports.showIndex = showIndex
exports.showAoubt = showAoubt
exports.showNew = showNew
exports.show404 = show404