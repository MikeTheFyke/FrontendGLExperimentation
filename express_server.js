const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/3jsBlocks", (req, res) => {
    res.render("3jsBlocks");
});

app.get("/3jsShapes", (req, res) => {
    res.render("3jsShapes");
});

app.get("/3jsSphere", (req, res) => {
    res.render("3jsSphere");
});

app.get("/3jsText", (req, res) => {
    res.render("3jsText");
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
});