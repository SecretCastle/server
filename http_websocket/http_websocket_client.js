var express = require("express");
var app = express();

module.exports = function(){
    // app.use(express.static(__dirname + '/http_websocket'));

    app.get("/",function(req,res){
        res.redirect("./html/control.html");
    });

    app.listen(8001,function(){
        console.log("server listen at http://localhost:8001");
    });
}
