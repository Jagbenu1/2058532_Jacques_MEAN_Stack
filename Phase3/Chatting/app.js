let express = require("express");
let app = express();
let path = require("path");
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.use(express.static(path.join(__dirname,'/')));

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
        console.log(msg);
    });

    socket.emit("obj1", "Hello There!");
})

http.listen(9090, ()=>console.log("Server running on port number 9090"));