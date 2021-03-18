const mongoose = require("mongoose");
// const dotenv = require("dotenv");
const express = require("express");
const html = require("./routes/htmlRoutes").htmlRoutes;
const apiRoutes = require("./routes/apiRoutes").apiRoutes;
// const API = require("./public/api");

// const { urlencoded } = require("express");
const logger = require("morgan");

// dotenv.config({ path: "./config.env" });
const app = express();
// const router = express.Router();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

const PORT = process.env.PORT || 3000;

// const DB = process.env.DATABASE.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// );

mongoose
  .connect(DATABASE || "mongodb://localhost/fitnessTracker", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`DB connection successful`))
  .catch((err) => console.log(err));

// mongoose
//   .connect(
//     process.env.MONGODB_URI || "mongodb://localhost:27017/fitnessTracker",
//     {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     }
//   )
//   .then(() => console.log(`DB connection successful`))
//   .catch((err) => console.log(err));

html(app);
apiRoutes(app);

app.listen(PORT, (req, res) => {
  console.log(`App running at port `, PORT);
});
