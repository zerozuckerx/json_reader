// import string from "./data.json" assert {type: "json"} needs type="module" in js srs link

const { log } = require('console');
const express = require('express');

const app = express();

//express .use methods needed to use req.body
app.use(express.json()); //for json data
app.use(express.urlencoded({ extended: false })); //for form data
app.use(express.static("public")); //specify folder for static files

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => console.log("Server listening on port 3000"));

app.get("public/data.json", (req, res) => {
    res.sendFile(__dirname + "/public/data.json")
})