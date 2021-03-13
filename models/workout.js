const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Insert exercise name!"],
  },

  activityType: {
    type: String,
    required: [true, "Insert activity type!"],
  },

  weight: {
    type: Number,
  },

  sets: {
    type: Number,
  },

  reps: {
    type: Number,
  },

  duration: {
    type: Number,
    required: [true, "Insert duration!"],
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

// const testWork = new Workout({
//   name: "Boxing",
//   activityType: "cardio",
//   duration: 50,
// });

// testWork
//   .save()
//   .then((doc) => console.log(doc))
//   .catch((err) => console.log(err));

module.exports = Workout;
