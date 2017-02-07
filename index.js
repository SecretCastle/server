var readline = require("readline");
var server_http = require('./server_http.js');
var server_websocket = require('./server_websocket.js');
var shell = require("./lib/shell.js");
var rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.setPrompt('请输入你想执行的服务器("http","websocket")> ');
rl.prompt();

rl.on('line',function(line){
    switch (line.trim()) {
        case "http":
            shell("http://localhost:3000");
            server_http();
            break;
        case "websocket":
            console.log("websocket 开发中~~~!!");
            rl.close();
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
