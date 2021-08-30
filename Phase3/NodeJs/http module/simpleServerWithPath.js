let http = require("http");
let url = require("url");
let server = http.createServer((request, response)=>{
    let urlInfo = url.parse(request.url, true);
    // console.log(urlInfo);
    // response.end("Welcome");
    if(urlInfo.path!="/favicon.ico"){
        if(urlInfo.path == "/AboutUs"){
            response.write("Welcome to About us Page");
        }else if(urlInfo.path == "/ContactUs"){
            response.write("Welcome to Contact us Page");
        }else if(urlInfo.path == "/Login"){
            response.write("Welcome to Login Page");
        }else{
            response.write("Not Found Page")
        }
    }
    response.end();
})

server.listen(9090, ()=>console.log("server is running on port number 9090"))