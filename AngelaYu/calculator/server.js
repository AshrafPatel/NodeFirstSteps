const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(5000, ()=>{
    console.log("Server is running");
})

app.get("/", (req, res) => {
    res.sendFile(__dirname+ "/index.html")
})

app.post("/index.html", (req, res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;

    res.send(num1 + " plus " + num2 + " is " + result);
})