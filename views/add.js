var connection= require('../db');
var express=require('express');
var router = express.Router();

var Tasks= require("../models/Tasks");
 
router.post('/', function(req,res){
    
    console.log("Request received");
    console.log(req.body);
    Tasks.addcontact(req.body,function(err,res){
        if(err){
            console.log("Error in insertion");
        }
        else{
            console.log("Added");
            
        }
    })
    res.redirect('http://localhost:3000');
});


module.exports= router;