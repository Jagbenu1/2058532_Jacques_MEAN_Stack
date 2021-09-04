//load the module and create the reference of mongodb module
let mongoClient = require("mongodb").MongoClient;

//url details
let url = "mongodb://localhost:27017";

//connect the database
mongoClient.connect(url,(err,client)=>{
    if(!err){
        console.log("Connected");
        let db = client.db("tcsmean");

        db.collection("Employees").deleteOne({_id:14},(err,result)=>{
            if(!err){
                // console.log(result);
                if(result.deletedCount > 0){
                    console.log("Record deleted!");
                }else{
                    console.log("Record not present!");
                }
            }else{
                console.log(err);
            }
        })
    }else{
        console.log(err);
    }
})