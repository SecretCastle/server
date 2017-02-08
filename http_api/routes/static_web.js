var express  =  require("express");
var router = express.Router();

router.get('/',function(req,res){
    res.render('../views/index',{title:'hello world',message:'this is CJ'});
});
router.get('/about',function(req,res){
    res.render('../views/about',{title:'hello world',message:'this is CJ About'});
})

module.exports = router;
