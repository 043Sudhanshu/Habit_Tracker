// require mongoose
const mongoose = require("mongoose");

const HabitSchema = mongoose.Schema({
      name:{
       type:String
      },
      Date_map:{
          type:Map
      }

 });

const Habit = mongoose.model("Habit", HabitSchema);

module.exports = Habit;