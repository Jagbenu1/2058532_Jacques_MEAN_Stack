// load the modules
const { Socket } = require("dgram");
let net = require("net");

let server = net.createServer();
server.on("connection",(Socket)=>{
    console.log("Client connected...");

    //recieve data from the client program
    Socket.on("data", (msg)=>{
        console.log(msg.toString());
    })

    //send data to client operation
    Socket.write("Hello Client, You successfully connected the chat application.")
})


server.listen(9090, ()=>console.log("Server running on number 9090"));