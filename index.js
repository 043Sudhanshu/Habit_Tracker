//require express
const express=require('express');
const app=express();
//db
const db=require('./config/mongoose');
const HABIT=require('./model/habit');

//ejs
const path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//parsing form data 
app.use(express.urlencoded());
//assets will contain js,css
app.use(express.static('assets'));

//require moment to be available
var moment = require('moment');
app.locals.moment = require('moment');

//all requests to routes
app.use('/',require('./routes'));

app.listen(8000,function(err){
    console.log('server is running');
})


