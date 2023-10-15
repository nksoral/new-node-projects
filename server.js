
//jshint esversion:6
const express = require("express");
const https = require("https");
const app = express();

app.get('/', function (req, res) {
    res.send("server is up and running");
});

app.listen(3000, function () {
    console.log("server is running on port:3000");
});

app.post('/hello', function (req, res) {
    res.write("You just called the post method at '/hello'!\n");
});

app.post('/testPostJson', function (req, res) {
    let UserData = `{
        "Id": 78912,
        "Customer": "Jason Sweet",
        "Quantity": 1,
        "Price": 18.00
      }`;

    res.send(UserData);
});