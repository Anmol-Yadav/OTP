
var connection=require('../db');
var express=require('express');
var Tasks=require('../models/Tasks');

var router = express.Router();

router.get('/message',function(req,res,next){
    Tasks.getMessage(function(err,rows){
        if(err)
            {
                res.json(err);
            }
            else
            {  
                res.render("message",{rows: rows});    
            }
    
    });
    });
    router.get('/:phone',function(req,res,next){
        Tasks.getdetails(req.params.phone,function(err,rows){
            if(err)
                {
                    res.json(err);
                }
                else
                {           
                    res.render("details",{rows: rows});    
                }
     
        });
        });
router.get('/',function(req,res,next){
Tasks.getcontacts(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {   
            res.render("index",{rows: rows});    
        }
});
});


   /* router.get('/:phone',function(req,res,next){
        const phone=req.params.phone.split(/[^0-9]+/g);
        console.log("d0",phone);
        Tasks.getdetails(req.params.phone,function(err,rows){
            if(err)
                {
                    console.log("Shubhi");
                    res.json(err);
                }
                else
                {
                   
                    res.render("msg",{rows: rows}); 
                    
                }
        
        });
        });*/
    


module.exports=router;