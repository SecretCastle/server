var readline = require("readline");
var shell = require("./lib/shell.js");
var rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.setPrompt('请输入你想执行的服务器("http","ws") >');
rl.prompt();

rl.on('line',function(line){
    switch (line.trim()) {
        case "http":
            var server_http = require('./server_http.js');
            shell("http://localhost:3000");
            server_http();
            break;
        case "ws":
            // console.log("websocket 开发中~~~!!");
            // rl.close();
            var server_websocket = require('./server_websocket.js');
            server_websocket();
            console.log("服务已启动~~，请打开浏览器")
            break;
        case "close":
            rl.close();
            break;
        default:
            console.log("无效的命令");
            break;
    }
});
rl.on('close', function() {
    console.log('bye bye');
    process.exit(0);
});
