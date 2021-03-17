const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "../public");

// const index = fs.readFileSync("./public/index.html", "utf-8");
// const exercise = fs.readFileSync("./public/exercise.html", "utf-8");
// const stats = fs.readFileSync("./public/stats.html", "utf-8");

exports.htmlRoutes = function (app) {
  // console.log("TEST HTML ROUTER");
  app.get("/", (req, res) => {
    // console.log("TEST HTML");
    res.sendFile(root + "/index.html");
  });

  app.get("/exercise", (req, res) => {
    res.sendFile(root + "/exercise.html");
  });

  app.get("/stats", (req, res) => {
    res.sendFile(root + "/stats.html");
  });
};
