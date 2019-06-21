const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
//  /:id is a param
//  /?name="Ash" is a query

app.use(express.static(__dirname + "/public"))

const user = {
    name: "John Wick",
    bestFriend: "Dog",
    bestWeapon: "pencil",
    nickName: "boogeyman" 
}

app.get("/", (req, res) => {
    res.send(express.static(__dirname + "/public"))
})

app.get("/user", (req, res) => {
    res.send(user)
})

app.post("/profile", (req, res) => {
    res.send(req.body)
})

app.listen(3000);