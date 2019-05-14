const readline = require("readline");         //importing readline module
const rl = readline.createInterface(process.stdin, process.stdout);   //Creating interface
const person = {
    name: "",
    age: "",
    hobbies: []
};

rl.question("What is your name?\n", (answerForQuestion) => {          //Getting answer (process.stdin) and displaying answer (process.stdout)
    person.name = answerForQuestion;
    rl.setPrompt(person.name +", What is your age?\n");
    rl.prompt();
    rl.on("line", (age) => {
        console.log("You are " + person.name + " and your age is " + age.trim());
    });                                                  //event listener to listen to new lines
});