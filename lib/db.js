var mysql = require("mysql");

var myconn = mysql.createConnection({
    host: "localhost",
    port : "8889",
    user : "root",
    password : "cfz1993314",
    database : "db_chen"
});

myconn.connect(function(err){
    if(err){
        console.log("数据库链接错误");
        return;
    }
});

module.exports = myconn;
