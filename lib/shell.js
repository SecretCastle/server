/**
 * 浏览器自动打开的函数
 * @type {[type]}
 */
var child_process = require("child_process");
var cmd;

switch (process.platform) {
    case "win32":
        cmd = "start";
        break;
    case "linux":
        cmd = "xdg-open"
        break;
    case "darwin":
        cmd = "open";
        break;
}

module.exports = function(url){
    child_process.exec(cmd +" "+ url);
}
