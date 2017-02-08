var WebsocketServer = require("ws").Server;

module.exports = function(){    
    var ws = new WebsocketServer({port:3001});
    console.log("server listen at http://localhost:3001");
    ws.on('connection',function(){
        console.log("client connected");
        ws.on('message', function (message) {
            console.log(message);
        });
    });
}


