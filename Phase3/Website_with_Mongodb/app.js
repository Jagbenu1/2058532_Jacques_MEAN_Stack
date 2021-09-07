//load the module
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

let app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.pluralize(null); 
let url = "mongodb://localhost:27017/tcsmean";

mongoose.connect(url).
then(res=>console.log("Connected!!")).
catch(error=>console.log(error));

//using the connection
// let db = mongoose.connection;
let courseSchema = mongoose.Schema({
    _id:Number,
    cName:String,
    description: String,
    amount: Number
})

let courseModel = mongoose.model("Course", courseSchema);


app.get("/",(request, response)=>{
    response.sendFile(__dirname+"\\index.html");
})

app.get("/Add",(request, response)=>{
    response.sendFile(__dirname+"\\Add.html");
})

app.post("/addCourse", (request, response)=>{
    let courseID = request.body;
    // console.log(courseID);
    courseModel.insertMany(courseID, (err, result)=>{
        if(!err){
            response.sendFile(__dirname+"\\index.html");
        }else{
            response.send(err);
        }
    })
})

app.get("/Delete",(request, response)=>{
    response.sendFile(__dirname+"\\Delete.html");
})

app.get("/deleteCourse/",(request, response)=>{
    let cid = request.query['_id'];
    // console.log(cid);
    courseModel.deleteOne({_id: cid},(err, result)=>{
        if(!err){
            response.sendFile(__dirname+"\\index.html");
        }else{
            response.send(err);
        }
    })

})

app.get("/Update",(request, response)=>{
    response.sendFile(__dirname+"\\Update.html");
})

app.get("/updateCourse",(request, response)=>{
    let updateId = request.query['_id'];
    let updateAmount = request.query['amount'];

    courseModel.updateOne({_id:updateId},{$set:{amount: updateAmount}}, (err, result)=>{
        if(!err){
            response.sendFile(__dirname+"\\index.html");
        }else{
            response.send(err);
        }
    })
})

app.get("/Fetch",(request, response)=>{
    // response.sendFile(__dirname+"\\Fetch.html");
    courseModel.find({}, (err, data)=>{
        if(!err){
            response.json(data);
        }else{
            response.json(err);
        }
    })
})

app.listen(9090,()=>console.log("Server running on port number 9090"))
