const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (require, response) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=314ad23c73944396a05f010c3345b2b6";
    https.get(url, function (response) {
        console.log(response);
    })
    response.send("Serves is up and running.")
})




app.listen(3000, function () {
    console.log("Server is running on port 3000.")
})