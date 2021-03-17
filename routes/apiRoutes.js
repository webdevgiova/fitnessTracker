const Workout = require("../models/workoutModel");

exports.apiRoutes = (app) => {
  app.get("/api/workouts", async (req, res) => {
    Workout.find({})
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  });

  app.post("/api/workouts", (req, res) => {
    console.log(req.body);
    Workout.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  });

  app.put("/api/workouts/:id", (req, res) => {
    const id = req.params.id;
    Workout.findByIdAndUpdate(id, { $push: { exercises: req.body } })
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  });

  app.get(`/api/workouts/range`, (req, res) => {
    Workout.find({})
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  });
};
