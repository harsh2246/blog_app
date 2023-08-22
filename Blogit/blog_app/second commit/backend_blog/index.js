const express = require('express');
const mongoose = require('mongoose');
const app = express();

let cors = require('cors');
app.use(cors());
let bodyParser = require('body-parser');
app.use(bodyParser.json());

const userRoute = require("./myrouter");
mongoose
  .connect("mongodb://127.0.0.1:27017/blog_app")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });
app.use("/mangal",userRoute);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);






const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
 
});


// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
