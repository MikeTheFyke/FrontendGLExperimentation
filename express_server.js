const express = require("express");
const app = express();
const PORT = 8080;

var favicon = require('serve-favicon');

app.set("view engine", "ejs");

app.use(express.static('public'));

app.use(favicon(__dirname + '/public/images/pngegg.png'));

app.get("/", (req, res) => {
    res.render("index");
});

/// WebGL
app.get("/triangle", (req, res) => {
    res.render("triangle");
});

app.get("/spinTriangle", (req, res) => {
    res.render("spinTriangle");
});

app.get("/cube", (req, res) => {
    res.render("cube");
});

app.get("/doubleSpinCube", (req, res) => {
    res.render("doubleSpinCube");
});

app.get("/texturedCube", (req, res) => {
    res.render("texturedCube");
});

/// 3JS
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

/// Canvas
app.get("/canvasHouse", (req, res) => {
    res.render("canvasHouse");
});

app.get("/canvasHud", (req, res) => {
    res.render("canvasHud");
});

app.get("/canvasWalk", (req, res) => {
    res.render("canvasWalk");
});

/// Animation
app.get("/aniTandP", (req, res) => {
    res.render("aniTandP");
});

///Processing
app.get("/proRubix", (req, res) => {
    res.render("proRubix");
});

app.get("/proStars", (req, res) => {
    res.render("proStars");
});

/// P5
app.get("/p5Chipmunk", (req, res) => {
    res.render("p5Chipmunk");
});

/// Gsap
app.get("/gsapHamburgers", (req, res) => {
    res.render("gsapHamburgers");
});

app.get("/gsapAMNS", (req, res) => {
    res.render("gsapAMNS");
});

app.get("/canadaEh", (req, res) => {
    res.render("canadaEh");
});

/// Sanbox
app.get("/sandbox", (req, res) => {
    res.render("sandbox");
});

///
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
});

