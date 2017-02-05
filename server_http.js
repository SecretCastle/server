var express = require("express");
var cors = require("cors");
var app = express();

module.exports = function(){
    app.all(cors());
    app.use(express.static('src'));
    app.get('/',function(req,res){
        app.redirect('./src/index.html');
    });
    app.listen(3000, function () {
      console.log('server listening at http://localhost:3000');
    });
}
