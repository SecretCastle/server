var ws = new WebSocket("ws://localhost:8001/");
//链接上服务器
ws.onopen = function(){
    console.log("connected");
}

//服务端发来的消息
ws.onmessage = function(e){
    console.log(e.data);
}

//服务端关闭
ws.onclose = function(){
    console.log("close");
}

ws.onerror = function(err){
    console.log(err);
}



