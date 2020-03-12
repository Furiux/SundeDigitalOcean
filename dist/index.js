"use strict";

require("dotenv").config();

const express = require("express");

const morgan = require("morgan");

const cors = require("cors");

const path = require("path"); // settings


const app = express();

const database = require("./database"); // middelwares


app.use(morgan("dev"));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(cors());
const wwwPath = path.join(__dirname, "www");
app.use("/", express.static(wwwPath));
app.use("/api/files", require("./routes/upload"));
app.use("/api/clientes", require("./routes/clientes")); // start server

app.set("port", process.env.PORT || 3002);
app.listen(app.get("port"), () => {
  console.log("Server on PORT", app.get("port"));
});