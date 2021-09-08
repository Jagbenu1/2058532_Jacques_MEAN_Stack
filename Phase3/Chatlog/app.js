let express = require("express");
let app = express();
let path = require("path");
let http = require("http").Server(app);
let io = require("socket.io")(http);
let mongoose = require("mongoose");

app.use(express.static(path.join(__dirname,'/')));

mongoose.pluralize(null); 
let url = "mongodb://localhost:27017/tcsmean";

mongoose.connect(url).
then(res=>console.log("Connected!!")).
catch(error=>console.log(error));

let chatSchema = mongoose.Schema({
    name: String,
    message: String
})

let chatModel = mongoose.model("Chat", chatSchema);

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"\\index.html");
    // res.sendFile(__dirname+"\\app.css");
});

io.on("connection", (socket)=>{
    
    console.log("Client connected");

    socket.on("chat",(msg)=>{
        let questionsArray = ['Hello there.',
                                'I\'m doing fine.',
                                'My name is Guyver.',
                                'How is the weather there?',
                                'Which fictional character would be the most boring to meet in real life?',
                                'Tell me about you.',
                                'How did you become a software developer?',
                                'What would be your ideal superpower?',
                                'Where can I get some good food?',
                                'Do you like cats or dogs?'
                            ];
        const random = Math.floor(Math.random() * questionsArray.length);
        socket.emit("obj1", questionsArray[random]);
        chatModel.insertMany(msg, (err, result)=>{
            if(!err){
                console.log("Successful entry!!!");
            }else{
                console.log(err);
            }
        })
        console.log(msg);
    });

    socket.emit("obj1", "Hello There!");
})

http.listen(9090, ()=>console.log("Server running on port number 9090"));