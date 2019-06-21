const fs = require("fs");

//fs.readFileSync()     this can be used but would mean that it would stop any other task executing until finished


//**************READ***********************
fs.readFile("./hello.txt", (err, data) => {
    if (err) {
        console.log("Error, Abort", err)
    }
    console.log(data.toString())
});


//**************APPEND/CREATE***************
fs.appendFile("./hello.txt", "\nThis is appended text", err => {
    if (err) {
        console.log("Error, Abort", err)
    }
})

//**************CREATE**********************
fs.writeFile("./bye.txt", "This is a new file", err => {
    if (err) {
        console.log("Error, Abort", err)
        fs.writeFile("./bye2.txt", "This is a new file", err => {
            if (err) {
                console.log("Error, Abort", err)
            }
        })
    }
})

//**************Delete**********************
setTimeout(() => {
    fs.unlink("./bye.txt", err => {
        if (err) {
            console.log("Error, Abort", err)
        }
})}, 10000)

