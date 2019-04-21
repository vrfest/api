
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

//import config
const config = require("./config");

//import router
const Router = require("./router");

//create app using express
const app = express();

//Connect to the MongoDB
mongoose.connect(config.MONGO_URI)

//Secure Express Apps
app.use(helmet())

//CORS Options
const corsOptions = {
  origin: true,
  credentials: true
};

app.use(cors(corsOptions));

//Parse the body request to json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

//HTTP request logger with Morgan
app.use(morgan("dev"));
app.use('/', express.static(path.join(__dirname, './build')));
app.use('/homepage', express.static(path.join(__dirname, './build')));
app.use('/dashboard', express.static(path.join(__dirname, './build')));
app.use('/login', express.static(path.join(__dirname, './build')));
app.use('/signup', express.static(path.join(__dirname, './build')));

//Router
Router(app);
//Listen server to the specific PORT
app.listen(config.PORT, () => {
  console.log(`listen port ${config.PORT}`)
})
