const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        type: {
          type: String,
          required: [true, "Insert activity type!"],
        },
        name: {
          type: String,
          required: [true, "Insert activity name!"],
        },
        duration: {
          type: Number,
          required: [true, "Insert activity duration!"],
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);
const Workout = mongoose.model("Workout", workoutSchema);

workoutSchema.virtual("totalDuration").get(function () {
  this.totalDuration = 0;
  this.exercises.map((el) => {
    this.totalDuration += Number(el.duration);
  });
  return this.totalDuration;
});

module.exports = Workout;
