const express = require("express");
const app = express();

app.listen(5000, function () {  
    console.log("Its connected");
});

app.get("/", (req, res) => {
    res.send("hey there")
})

app.get("/subscribe", (req, res) => {
    res.send("<h2>Hit thaat like button</h2>")
})