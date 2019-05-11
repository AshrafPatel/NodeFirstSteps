var http = require("http");         //This is similar to import Java library or C# library etc..
var moment = require("moment");     //importing the moment dependancy to use (Date && Time package)

doThisFunction = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"}); //write a reponse of text if status code is 200
    response.end("This is the message to be sent to client whos name is " + process.argv[2] + "\nit is " + moment().format("LLLL") + " right now"); //message to send to client
}

http.createServer(doThisFunction).listen(5435); //listen at localhost:5435

//process.argv[0] is the node
//process.argv[1] is the file
//process.argv[2] is an argument which you pass and like wise for 3 4 5 6....