var express = require("express");
var router = express.Router();
var api = require("../lib/api/api.js");


router.get('/',function(req,res){
    res.sendFile("./index.html");
});
router.get('/getAll',function(req,res){
    api.getInfo("select id , title from tb_info",function(results){
        if(results){
            results = {
                "code":"200",
                "msg":"success",
                "data":results
            }
        }
        res.send(results);
    })
});
router.get('/me',function(req,res){
    res.send('me');
});


module.exports = router;
