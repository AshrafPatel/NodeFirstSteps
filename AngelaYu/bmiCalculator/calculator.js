const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(5000, () => {
    console.log("server has started");
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator.html", (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmiResult = weight/Math.pow((height/100), 2);

    res.send("<h1>Your BMI is " + bmiResult + "</h1>")
})