let obj = require("readline");
var r1 = obj.createInterface({
    input:process.stdin,
    output:process.stdout
})
r1.question("Enter the name",(name)=>{
    console.log("Your name is "+name);
    // r1.close();
});

// r1.question("Enter the name",(id)=>{
//     console.log("Your id is "+id);
//     r1.close();
// })