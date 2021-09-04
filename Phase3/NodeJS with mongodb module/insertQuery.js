//load the module and create the reference of mongodb module
let mongoClient = require("mongodb").MongoClient;

//url details
let url = "mongodb://localhost:27017";

//connect the database
mongoClient.connect(url,(err,client)=>{
    if(!err){
        console.log("connected!");
        let db = client.db("tcsmean");

        let employees = [
            {_id: 12, name:"kesh", salary:78000, deptId: 200, city:"Mumbai"},
            {_id: 13, name:"mahen", salary:90000, deptId: 100, city:"Bangalore"},
            {_id: 14, name:"mash", salary:8000, deptId: 300, city:"Dehli"}   
        ]

        let emp = {_id: 11, name:"mahesh", salary:48000, deptId: 300, city:"Dehli"};

        db.collection("Employees").insertMany(employees,(err, result)=>{
            if(!err){
                console.log("Record added.");
                console.log(result);
            }else{
                console.log(err);
            }
            client.close();
        });
    }else{
        console.log(err);
    }
})