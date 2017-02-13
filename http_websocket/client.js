var ws = new WebSocket("ws://localhost:8001/");
//链接上服务器
ws.onopen = function(){
    console.log("connected");
}

//服务端发来的消息
ws.onmessage = function(e){
    if(e.data){
        let res = JSON.parse(e.data);
        
    }
}

//服务端关闭
ws.onclose = function(){
    console.log("服务端关闭");
}

ws.onerror = function(err){
    console.log("产生错误:=>",err);
}


var DA = {
    //SIM 阿里智能的下发数据
    setDeviceStatus:function(id,options){
        ws.send(JSON.stringify(options));
    },
    bindPushData:function(callback){
        callback(data);
    }
}

