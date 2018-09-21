// var express = require('express'),
import express from 'express';
import Weather from './newserver';

 var app = express();


app.set('view engine', 'hbs');

app.get('/a',(req,res)=>{

  let user = new Weather("sas");
  alert(user.name);
  // w.forecast().then((res)=>{
  //   console.log(res);
  // })
   
  
})


app.listen(3000,function(){
        console.log("server running @ loal host:3000");
})


//6a4bc641996966192c9f84788495fc35