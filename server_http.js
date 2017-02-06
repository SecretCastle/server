var express = require("express");
var cors = require("cors");
var api = require('./src/api/api.js');
var app = express();

module.exports = function(){
    app.all("*",function(req,res,next){
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
      res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

      if (req.method == 'OPTIONS') {
        res.send(200); /让options请求快速返回/
      }
      else {
        next();
      }
    });

    app.use(express.static(__dirname + '/src'));

    app.use(function(req,res,next){
        if(req.url === "/"){
            res.sendFile('/index.html');
        }else{
            next();
        }
    });
    app.use(function(req,res,next){
        if(req.url === "/api/getInfo"){
            res.send(api.getInfo());
        }else{
            next();
        }
    });
    
    // app.get('/',function(req,res){
    //     app.redirect('./src/index.html');
    // });

    app.listen(3000, function () {
      console.log('server listening at http://localhost:3000');
    });
}
