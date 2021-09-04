//load the module
let mongoose = require("mongoose");

//url
let url = "mongodb://localhost:27017/tcsmean";
mongoose.pluralize(null);   //to avoid lowercase collection and adding s.

//connect the database
mongoose.connect(url).
then(res=>console.log("Connected")).
catch(err=>console.log(err));

//to use this db connection we have to call function
let db = mongoose.connection;
db.once("open",()=>{
    //We have to defined schema
    let productSchema = mongoose.Schema({
        _id:Number,
        pname:String,
        price:Number
    });

    //using schema we have to create the model
    //1st parameter collection name and 2nd parameter schema reference
    //mongoose internally creates collections
    let productModel = mongoose.model("Product", productSchema);

    productModel.updateOne({_id: 100}, {$set:{price:95000}},(err,result)=>{
        if(!err){
            // console.log(result);
            if(result.modifiedCount > 0 || result.matchedCount > 0){
                console.log("Recorded successfully");
            }else{
                console.log("No record found.");
            }
            
        }else{
            console.log(err);
        }
        mongoose.disconnect();
    })
}) 