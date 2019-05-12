const waitTime = 10000;
const waitInterval = 1000;
let currentInstall = 0;

console.log("Please wait");

sameLine = (percent) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`installation ${ percent++ / 100}% completed`)
}

let interval = setInterval(() => {                     //How often this process will fire using installation but just as easily turn this into a timer
    currentInstall += waitInterval;
    sameLine(currentInstall);
}, waitInterval)

setTimeout(() => {                      //Wait a certain amount of seconds before firing next method
    clearInterval(interval)             //basically stop the setInterval once timer has counted down
    console.log("\nInstallation has been completed")
}, waitTime);