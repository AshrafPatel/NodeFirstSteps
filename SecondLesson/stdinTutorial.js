const questions = [
    "What is your name?",
    "What is your age?",
    "What is your hobby",
    "What is your location?"
];

const answers = [];

ask = (i) => {
    askNextQuestion(i);
}


askNextQuestion = (i) => {
    process.stdout.write("\n" + questions[i].toString().trim()) //First question asked before input loop
    i++;
    process.stdin.on("data", (data) => {        //This function awaits input from user it is a loop
        answers.push(data.toString().trim());
        //process.stdout.write(data);
        if (i < questions.length) {             //for or while loop will not allow you to ask a question and just loop through questions instead use if
            process.stdout.write("\n" + questions[i].toString().trim())
            i++;
        } else {
            process.stdout.write(answers[0].toString().trim() + "\n" + answers[1].toString().trim() + "\n" + answers[2].toString().trim() + "\n" + answers[3].toString().trim() + "\n");
            process.exit();                     //Exit the loop
        }
    })
}

//process.stdout.write("Hello World");        //Similar to console.log
ask(0);