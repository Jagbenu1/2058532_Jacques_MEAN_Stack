let fs = require("fs");
fs.readFile("emp.json",(err, data)=>{
    if(!err){
        // console.log(data);
        let empString = data.toString();
        let empJSON = JSON.parse(empString);
        console.log(empString);
        console.log("Id is "+empJSON.id);
        console.log("Name is "+empJSON.name);
        console.log("Age is "+empJSON.age);
    }
})