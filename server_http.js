/**
 * 使用说明，采用的是express框架。
 * 所以呢，使用时配置好路由
 * 1、编写api时，请在routes里写好路由模块，并应用lib/api/api.js
 * 2、lib/api/api.js里定义的是接口方法
 * 3、app.use('/exp',exp); （引用exp模块即可）
 */

var express = require("express");
var cors = require("cors");
var app = express();
var routes = require("./http_api/routes/core.js");
var routes_web = require("./http_api/routes/static_web.js");
module.exports = function(){
    app.all("*",function(req,res,next){
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
      res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

      if (req.method == 'OPTIONS') {
        res.send(200); 
      }else {
        next();
      }
    });

    app.set('views','./http_api/views');
    app.set("view engine","jade");

    app.use(express.static(__dirname + '/http_api/static'));
    app.use('/',routes);
    app.use('/web',routes_web);

    app.listen(3000, function () {
      console.log('server listening at http://localhost:3000');
    });
}
