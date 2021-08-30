let net = require("net");
let readline = require("readline");

let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let client = net.createConnection(9090, "127.0.0.1",()=>{

    //send data to server program
    client.write("Hello Server, I am a client...");

    client.on("data",(msg)=>{
        console.log(msg.toString());
    })

    r1.on("line",(input)=>{
        client.write(`Client says: ${input}`);
    })
})

