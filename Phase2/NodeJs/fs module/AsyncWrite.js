//load the fs module
let fs = require("fs");
var msg = "hello\n";
//by default old data get overwritten
// fs.writeFile("demo1.txt", msg,(err)=>{
//     if(!err){
//         console.log("Data stroed in file successfully!");
//     }
// });

//append to data
fs.writeFile("demo1.txt", msg,{flag: "a+"},(err)=>{
        if(!err){
            console.log("Data stroed in file successfully!");
        }
    });