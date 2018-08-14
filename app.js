const Nexmo= require('nexmo');
const boodyParser= require('body-parser');
const ejs= require('ejs');
const ejsLint = require('ejs-lint');
const express= require('express');
var main= require('./public/main');
var add= require('./views/add');
const path= require('path');
const details = require('./public/details');
var Tasks=require('./models/Tasks');
const nexmo= new Nexmo({
    apiKey:'5d7fc11d',
    apiSecret:'8aWzBpMYizGEWqve'
},{debug:true});
const app= express();
app.set('view engine', 'ejs');
app.engine('ejs', ejs.renderFile);
app.use(boodyParser.json());
app.use(boodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));
app.post('/bulk',(req,res)=>{
    //console.log('body at bulk:', req.body);
    obj=JSON.parse(req.body.bulk);
   // console.log("OBJ:",obj);
    for(var i=obj.length - 1; i >= 0; i--){
    console.log("first", obj[i]);
   
    
        Tasks.addcontact(obj[i],function(err,resp){
            if(err){
                console.log("error");
            }
            else{
                console.log("Saved");
            }
        });
    } 
    res.redirect('/');
    });
app.get('/addone',function(req,res){
    
    res.render('addone');
});


app.use('/add',add);
app.use('/',main);




app.post('/', (req,res) => {
  const number= req.body.number;
  const text= req.body.text;
 const name= req.body.name;

 Tasks.saveMsg(req.body,function(err,res){
    if(err){
        console.log("error");
    }
    else{
        console.log("Saved");
    }
 })
  nexmo.message.sendSms(
      '917704847554', number, text, {type: 'unicode'},
      (err, responseData) => {
          if(err){
              console.log(err);
          }else{
              console.log(responseData);
          }
      }
  )
})



const port=3000;
const server= app.listen(port, ()=> console.log(`Server started on ${port}`));
