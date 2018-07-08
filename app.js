const Nexmo= require('nexmo');
const socketio= require('socket.io');
const boodyParser= require('body-parser');
const ejs= require('ejs');
const ejsLint = require('ejs-lint');
const express= require('express');
var main= require('./public/main');
var add= require('./views/add');
const path= require('path');
var Tasks=require('./models/Tasks');
//var router = express.router();

//init nexmo
const nexmo= new Nexmo({
    apiKey:'5d7fc11d',
    apiSecret:'8aWzBpMYizGEWqve'
},{debug:true});
//init app
const app= express();
app.set('view engine', 'ejs');
app.engine('ejs', ejs.renderFile);
app.use(boodyParser.json());
app.use(boodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.get('/addone',function(req,res){
    console.log('addone');
    res.render('addone');
});

app.use('/add',add);
app.use('/',main);



/*app.get('/', (req,res)=>
{
    connect.query("Select * from student",function(error,rows,field){
        if(!!error){
            console.log('Error in query');
        }
        else{
            console.log("Query successful\n");
            console.log(rows);
            res.render('index',{
                id: rows[0].name,
                no: rows[0].phone
            });
        }
    })
}
   
);*/



/*router.get('/', function(req, res, next){
    res.render('index',{
        id:'',
        name:''
    });
});*/



//catch form submit
app.post('/', (req,res) => {
//    res.send(req.body);
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
              console.dir(responseData);
          }
      }
  )
})

const port=3000;
const server= app.listen(port, ()=> console.log(`Server started on ${port}`));

//module.exports= router;