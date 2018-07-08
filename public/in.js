/*const jsdom= require("jsdom");
var JSDOM= jsdom.JSDOM;
const numberInp= document.getElementById('last');
const textInp=document.getElementById('phone');
const button= document.getElementById('button');
const response= document.querySelector('.response');

button.addEventListener('click',send, false);

function send(){
    const number= numberInp.value;
    const text= textInp.value;
    console.log(number);
    fetch('/',{
        method:'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify({number:number, text:text})
    })
    .then(function(res){
        console.log(res);
    })
    .catch(function(err){
        console.log(err);
    });
}*/