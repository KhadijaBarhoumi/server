const express = require("express");
var app = express();


//cors
const cors = require("cors");
var corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  };
  app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// testing route
app.get("/", async (req, res) => {
    return res.json({ message: "Welcome ." });
  });
// all routes
const router = require("./routes/authRouter");
app.use("/api/auth", router);

module.exports = app;