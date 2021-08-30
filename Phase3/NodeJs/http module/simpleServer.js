let http = require("http");
let server = http.createServer((request, response)=>{
    //response.end("Welcome to http module simple");
    // response.end("<b>Welcome to http module simple</b>");
    response.end("<font color='red'><b>Welcome to http module simple</b></font>");
})

server.listen(9090, ()=>console.log("server is running on port number 9090"))

