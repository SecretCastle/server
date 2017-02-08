var conn = require("../../lib/db.js");

module.exports = {
    getInfo:function(callback){
        let sql = "select id , title from tb_info";
        conn.query(sql,function(error, results, fields){
            if(error){
                throw error;
            }
            callback(results)
        });
    },
    getMessage:function(){
        
    }

}
