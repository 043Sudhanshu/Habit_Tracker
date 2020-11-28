const express=require('express');
const app=express();

const path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/',function(req,res){
    return res.render('habit');
})

app.listen(8000,function(err){
    console.log('server is running');
})


