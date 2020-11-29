const express=require('express');
const app=express();

const db=require('./config/mongoose');
const HABIT=require('./model/habit');
const path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/',function(req,res){
    HABIT.find({},function(err,Habit){
        return res.render('home',{
            Habits:Habit
         });
});
    
});

app.get('/remove',function(req,res){
     HABIT.findOne({name:req.query.name},function(err,Habit){
       Habit.remove();
       return res.redirect('back');
     });
});

app.post('/addhabit',function(req,res){
    req.body.Date_map={};
    HABIT.create(req.body,function(err,habit){
    });
    return res.redirect('back');

});
var moment = require('moment');
app.locals.moment = require('moment');

app.get('/action',function(req,res){
      HABIT.findOne({},function(err,habit){
      let Date=req.query.Date;
      let action=req.query.action;
      console.log(habit.Date_map.has(Date));
        habit.Date_map.set(Date,action);
        habit.save();
     return res.redirect('back'); 
    });
});

app.get('/habit',function(req,res){
   HABIT.findOne({name:req.query.name},function(err,Habit){
      return res.render('habit',{
          name:Habit.name,
          Date_map:Habit.Date_map
      });
   });
});

app.listen(8000,function(err){
    console.log('server is running');
})


