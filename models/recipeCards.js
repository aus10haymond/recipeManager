const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
  exercises: [
      {
        name: String,
        type: {
          type: String
        },
        weight: Number,
        sets: Number,
        reps: Number,
        duration: {
            type: Number,
            required: "Enter a duration"
        },
        distance: Number
      }
  ]
}, { toJSON: { virtuals: true } });
WorkoutSchema.virtual("totalDuration").get(function(){
  let totalD = this.exercises.reduce((sum, currentObject) => sum + currentObject.duration, 0);
  return totalD;
})
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;