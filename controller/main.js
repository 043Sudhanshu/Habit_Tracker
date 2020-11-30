const HABIT=require('../model/habit');

module.exports.home=function(req,res){
    //find all the habits from the db and pass to home.ejs
    HABIT.find({},function(err,Habit){
        return res.render('home',{
            Habits:Habit
         });
     });
    
}

module.exports.remove=function(req,res){
  //find the habit by name and will remove it
    HABIT.findOne({name:req.query.name},function(err,Habit){
      Habit.remove();
      return res.redirect('back');
    });

}

module.exports.addhabit=function(req,res){
    //setting empty Date-map in req.body and then creating the habit
    req.body.Date_map={};
    HABIT.create(req.body,function(err,habit){
    });
    return res.redirect('back');
}

module.exports.action=function(req,res){
    //find the habit with the name and put the action to any date
    HABIT.findOne({name:req.query.name},function(err,habit){
 
            let Date=req.query.Date;
            let action=req.query.action;
 
            habit.Date_map.set(Date,action);
            habit.save();
      
            return res.redirect('back'); 
  });
}

module.exports.habit=function(req,res){
    //finding the habit by the name and showing the Date_map
    HABIT.findOne({name:req.query.name},function(err,Habit){
      
        return res.render('habit',{
           name:Habit.name,
           Date_map:Habit.Date_map
       });
    
    });
   }
