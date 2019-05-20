const _ = require("lodash");
const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.use("/static", express.static("static"));
app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  res.render("home.hbs", {
    title: "Location via Geolocation",
    pageTitle: "",
    metaDesc: "",
    pageStyles: "/styles/home.css"
  });
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Unable to handle request"
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});
module.exports = { app };
