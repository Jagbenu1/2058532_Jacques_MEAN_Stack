let fs = require("fs");
var data = fs.readFileSync("demo2.txt");

console.log(data.toString());