let fs = require("fs");
fs.readFile("demo1.txt", (err, data)=>{
    if(!err){
        // console.log(data);
        console.log(data.toString());
    }
})
console.log("Normal statment1");
console.log("Normal statment2");