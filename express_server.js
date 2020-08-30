const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/3jsBlocks", (req, res) => {
    res.render("3jsBlocks");
});

app.get("/urls", (req, res) => {
    let templateVars = {urls: urlDatabase};
    res.render("urls_index", templateVars);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
});