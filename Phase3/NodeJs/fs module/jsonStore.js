let fs = require("fs");
let emp = {id:101, name:"Ramesh", age:24};
let empString = JSON.stringify(emp);
fs.writeFileSync("emp.json",empString,{flag: "a+"},(err)=>{
    if(!err){
        console.log("Data store in file");
    }
})