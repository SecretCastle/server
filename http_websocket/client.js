var DA = {
    DATA :{
        "OnOff_Power":{
            "value":"1"
        },
        "WorkMode":{
            "value" : "0"
        },
        "OnOff_Light":{
            "value" : "0"
        }
    },
    //SIM 阿里智能的下发数据
    setDeviceStatus:function(id,options){
        ws.send(JSON.stringify(options));
    },
    //SIM 阿里智能的数据获取
    getDeviceStatus:function(id,callback){
        callback(this.DATA);
    },
    sendDataToFront:function(callback){
        callback(this.DATA)
    }
}

var ws = new WebSocket("ws://localhost:8001/");
//链接上服务器
ws.onopen = function(){
    console.log("connected");
}

//服务端发来的消息

ws.onmessage = getDataFromServer

//服务端关闭
ws.onclose = function(){
    console.log("服务端关闭");
}

ws.onerror = function(err){
    console.log("产生错误:=>",err);
}


function getDataFromServer(e){
    if(e.data){
        var d = JSON.parse(e.data);
        console.log(d);
        for(var i in d){
            DA.DATA[i].value = d[i].value;
        }
    }
}

