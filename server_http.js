var express = require("express");
var cors = require("cors");
var app = express();
var routes = require("./routes/core.js");

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
    app.use('/',routes);

    app.listen(3000, function () {
      console.log('server listening at http://localhost:3000');
    });
}
