let express = require("express");

let app = express();

let ws = require("express-ws")(app);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"\\index.html");
})

app.ws("/",(socket, request)=>{
    console.log("Client connected");

    //recieve message 
    socket.on("message", (data)=>{
        console.log(data);
    })

    socket.send("Hello Client, you're connected to the socekt server app!")
})

app.listen(9090, ()=>console.log("Server running on port number 9090"));