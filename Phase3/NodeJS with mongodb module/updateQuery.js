//load the module and create the reference of mongodb module
let mongoClient = require("mongodb").MongoClient;

//url details
let url = "mongodb://localhost:27017";

//connect the database
mongoClient.connect(url,(err,client)=>{
    if(!err){
        console.log("Connected");
        let db = client.db("tcsmean");

        //city update using _id
        db.collection("Employees").updateOne({_id:1},{$set:{city:"Dehli"}},(err,result)=>{
            if(!err){
                if(result.modifiedCount > 0){
                    console.log("Record updated successfully");
                }else{
                    console.log("Record not present");
                }
                client.close();
            }else{
                console.log(err);
            }
        })
    }else{
        console.log(err);
    }
})