const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const app = express();

app.engine("html", require("ejs").renderFile);
app.set("/views", express.static(__dirname + "/views"));
app.set("view engine", "html");
app.use("/assets", express.static(__dirname + "/assets"));

app.get("/", (req, res) => {
  res.render("index2");
});

app.get("/paperwork", (req, res) => {
  let filePath = "/views/Paperwork.pdf";
  fs.readFile(__dirname + filePath, (err, data) => {
    res.contentType("application/pdf");
    res.send(data);
  });
});

app.get("/vip", (req, res) => {
  let filePath = "/views/New-VIP-Patient.pdf";
  fs.readFile(__dirname + filePath, (err, data) => {
    res.contentType("application/pdf");
    res.send(data);
  });
});

const server = app.listen(process.env.PORT || 5000, function() {
  console.info("Server running at http://0.0.0.0:" + server.address().port);
});
