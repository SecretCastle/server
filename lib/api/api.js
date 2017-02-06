var conn = require("../../lib/db.js");

module.exports = {
    getInfo:function(sql,callback){
        conn.query(sql,function(error, results, fields){
            if(error){
                throw error;
            }
            callback(results)
        });
    },
    getMessage:function(){
        return "hi";
    }

}
