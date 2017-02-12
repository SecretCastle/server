var WebsocketServer = require("ws").Server;
var express = require("express");
var app = express();

//建立全局的client对象
var client_device = [];

module.exports = function(){    
    var wss =  new WebsocketServer({port:8001});
    wss.on('connection',function(ws){
        client_device.push({
            "cliend_ws" : ws
        });
        ws.on('message',function(message){
            send_msg(message,client_device)
        });
        ws.on('close',function(){
            //global.gc();  //调用回收内存
            console.log("client close");
        });
    });

    var send_msg = function(data,device){
        for(var i in device){
            device[i].cliend_ws.send(data)
        }
    }
}


