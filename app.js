// import string from "./data.json" assert {type: "json"}

// const div = document.querySelector(".wrapper");
// const p = document.createElement("p");
// p.textContent = string["ConnectionString"];
// div.appendChild(p)

const { log } = require('console');
const express = require('express');

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => console.log("Server listening on port 3000"));

app.get("public/data.json", (req, res) => {
    res.sendFile(__dirname + "/public/data.json")
})