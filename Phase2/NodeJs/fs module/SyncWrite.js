let fs = require("fs");
let msg = "Welcome to file handling with sync operation";
fs.writeFileSync("demo2.txt",msg);
console.log("data storeed");
console.log("Normal statement");
console.log("normal statement 2"); 