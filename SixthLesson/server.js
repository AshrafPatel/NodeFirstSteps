const http = require("http");

const server = http.createServer((request, response) => {
    console.log("headers", request.headers)
    console.log("method", request.method)
    console.log("url", request.url)

    const user = {
        name: "John Wick",
        bestFriend: "Dog",
        bestWeapon: "pencil",
        nickName: "boogeyman" 
    }
    //response.setHeader("Content-Type", "text/html");
    //reponse.writeHead(200, {"Content-Type": "text/html"});
    //response.end("<h1>Helllo</h1>")

    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(user))
})

server.listen(3000);