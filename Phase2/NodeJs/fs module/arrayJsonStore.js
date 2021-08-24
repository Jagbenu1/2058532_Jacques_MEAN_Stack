let fs = require("fs");
fs.readFileSync("employees.json", (err, data)=>{

let emp4 = {id: 103, name:"Rammish", age:34};
data.push(emp4);
fs.writeFileSync(data, {flag: "a+"} ,employeeString);
console.log("Data stored in file");
});
