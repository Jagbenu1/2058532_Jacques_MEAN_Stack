let net = require("net");

let client = net.createConnection(9090, "127.0.0.1",()=>{

    //send data to server program
    client.write("Hello Server, I am a client...");
})

client.on("data",(msg)=>{
    console.log(msg.toString());
})