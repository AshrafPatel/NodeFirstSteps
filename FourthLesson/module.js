const path = require("path");               //Path module
const utilities = require("util");          //Utilities module
const v8 = require("v8");                   //v8 module

console.log(path.basename(__filename));     //Return filename with extension in this case (module.js)
utilities.log(path.basename(__filename));   //Using utilities.log() method I can get a date/time stamp

var newDirectory = path.join(__dirname, "FirstFolder", "SecondFolder", "ThirdFolder");      //Creates a new path following existing path but then adding additional folders

console.log(newDirectory);
utilities.log(newDirectory);

utilities.log(v8.getHeapStatistics());        //Gets current memory statistics logged