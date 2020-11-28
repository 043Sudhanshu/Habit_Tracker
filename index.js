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

    HABIT.create({name:req.body.name},function(err,habit){
    });
    return res.redirect('back');

});

app.listen(8000,function(err){
    console.log('server is running');
})


