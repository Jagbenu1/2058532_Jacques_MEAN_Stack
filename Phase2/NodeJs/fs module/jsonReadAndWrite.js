let fs = require("fs");
let emp4 = {id: 103, name:"Rammish", age:34};
let employees = JSON.parse(fs.readFileSync("employees.json").toString());
employees.push(emp4);
fs.writeFileSync("employees.json", JSON.stringify(employees));