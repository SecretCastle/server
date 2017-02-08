var express = require("express");
var router = express.Router();
var api = require("../../lib/api/api.js");


router.get('/',function(req,res){
    res.sendFile("./index.html");
});
router.get('/getAll',function(req,res){
    api.getInfo(function(results){
        if(results){
            res.json({
                "code":"200",
                "msg":"success",
                "data":results
            });
        }
    })
});
router.get('/me',function(req,res){
    res.send('me');
});


module.exports = router;
