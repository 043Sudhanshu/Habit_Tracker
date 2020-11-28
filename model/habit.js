// require mongoose
const mongoose = require("mongoose");

const HabitSchema = mongoose.Schema({
      name:{
       type:String
      },
      habit_array:[
          {
          type:String
          }
      ]

 });

const Habit = mongoose.model("Habit", HabitSchema);

module.exports = Habit;