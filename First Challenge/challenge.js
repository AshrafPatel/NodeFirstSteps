var http = require("http");
var moment = require("moment");

challengeExecuted = (req, res) => {
    const beginningTime = moment("09:00", "HH:mm");
    const endTime = moment("17:00", "HH:mm");

    let greeting = `Hello Zenva
                    Welcome to our page
                    Now, it is ${moment().format("LTS")}
                    Our business hours are ${beginningTime.format("LT")} - ${endTime.format("LT")}`

    let beginDifference = beginningTime.diff(moment(), "m"); //gives in minutes if it is close it will say how many minute in positive range
    let endDifference = endTime.diff(moment(), "m");

    let conditionalMessage = "";
    if (beginDifference > 0) {
        conditionalMessage = "\nPlease come back in " + beginDifference;
    }
    else if (endDifference < 0) {
        conditionalMessage = "\nPlease come back tomorrow";
    }
    
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(greeting + " " + conditionalMessage);
}

http.createServer(challengeExecuted).listen(3535); //create server listen on localhost:5555

