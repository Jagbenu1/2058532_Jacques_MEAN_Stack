let express = require("express");

//create reference of express
let app = express();

//load the http module
let http = require("http").Server(app);

//load the socket.io module and connect http module
//with IIFE features
let io = require("socket.io")(http);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"\\index.html");
})

io.on("connection", (socket)=>{
    console.log("CLient connected");

    socket.on("obj", (msg)=>{
        console.log(msg);
    })
    socket.emit("obj1", "Hello Client connected server...");
})

//please run server using http module, not express module
http.listen(9090, ()=>console.log("Server running on port number 9090"));