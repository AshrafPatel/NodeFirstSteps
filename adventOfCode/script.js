const fs =require("fs");
let secretCode;
let number = 0;
let firstTime = 0;

// secretCode = fs.readFileSync("./code.txt", "utf8");

console.log(firstTime);

fs.readFile("./code.txt", (err, data) => {
    console.time("a");
    if (err) {
        console.log("Error", err)
    }
    secretCode = data.toString();
    for (let i = 0; i < secretCode.length; i++) {
        if (secretCode[i] == "(") {
            number++;
        }
        else if (secretCode[i] == ")") {
            number--;
        }
        if (number == -1 && firstTime == 0) {
            firstTime = i;
        }
    }
    console.log(number);
    console.timeEnd("a");
    console.log(firstTime);
})


