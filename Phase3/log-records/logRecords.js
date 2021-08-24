let fs = require("fs");
let obj = require("readline");
let r1 = obj.createInterface({
    input: process.stdin,
    output: process.stdout
});

let today = new Date();
let date = today.getFullYear() + '-' + (today.getMonth()+1)+ '-' + today.getDate();
let time = today.getHours()+ ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date + " "  + time;

let object = {fName: this.fName, lName: this.lName, gender: this.gender, email: this.email, date: this.date};
const jsonExists = fs.existsSync("data.json");

    if(jsonExists){  
        let jsonData = JSON.parse(fs.readFileSync("data.json").toString());
        r1.question("Enter First Name pls: " ,(fName)=>{
            r1.question("Enter Last Name pls: " ,(lName)=>{
                r1.question("Enter Gender please: ",(gender)=>{
                    r1.question("Enter Email pls: ",(email)=>{
                        object = {fName: fName, lName: lName, gender: gender, email: email, date: dateTime};
                        jsonData.push(object);
                        fs.writeFileSync("data.json",JSON.stringify(jsonData));
                        r1.close();
                    })
                })
            })
        })
        // console.log("Im in here!");

    }else{

        r1.question("Enter First Name pls: " ,(fName)=>{
            r1.question("Enter Last Name pls: " ,(lName)=>{
                r1.question("Enter Gender please: ",(gender)=>{
                    r1.question("Enter Email pls: ",(email)=>{
                        object = {fName: fName, lName: lName, gender: gender, email: email, date: dateTime}
                        let objString = JSON.stringify(object);
                        fs.writeFileSync("data.json", "["+objString+"]", (err)=>{
                            if(!err){
                                console.log("Data has been stored.");
                            }else{
                                console.log("Data has not been stored.");
                            }
                        })
                        r1.close();
                    })
                })
            })
        })
        // console.log("But Im in here!");
    }


