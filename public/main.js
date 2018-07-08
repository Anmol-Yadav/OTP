
var connection=require('../db');
var express=require('express');
var Tasks=require('../models/Tasks');

var router = express.Router();
router.get('/',function(req,res,next){
Tasks.getcontacts(function(err,rows){
    if(err)
        {
            console.log("Shubhi");
            res.json(err);
        }
        else
        {
           
            res.render("index",{rows: rows}); 
        }

});
});



module.exports=router;