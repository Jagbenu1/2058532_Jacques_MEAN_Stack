let readline = require("readline-sync");
let id = readline.questionInt("Enter your id");
let name = readline.question("Enter your name");
let salary = readline.questionFloat("Enter your salary");
let email = readline.questionEMail("Enter your email");
console.log("Your name is " + name);
console.log("Your id is " + id);
console.log("Your salary is "+ salary);
console.log("Your email is " + email);