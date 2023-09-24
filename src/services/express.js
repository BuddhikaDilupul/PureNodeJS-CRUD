const express = require("express");
const morgan = require("morgan");

const config = require("../config");
const apiRouter = require("../routes/api");
const errorHandler = require("../middlewares/errorHandler");

const app = express();

const cors = require("cors");
const { entryLogger } = require("../middlewares/logger");
const corsOptions = {
  origin: "*",
  credentials: true, 
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions)); 

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(function (req, res, next) {
  console.log("Logged");
  next();
});
app.use(entryLogger)

app.get("/", (req, res) => {
  return res.json({ message: "Hello" });
});
app.use("/api", apiRouter);

app.use(errorHandler.handleError);

exports.start = () => {
  app.listen(config.port, (err) => {
    if (err) {
      console.log("Error: ${err}");
      process.exit(-1);
    }
    console.log("Backend Server is working at port", config.port);
  });
};
