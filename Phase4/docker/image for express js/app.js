let express = require("express");
let app = express();

app.get("/simpleMsg",(request, response)=>{
    response.send("Welcome to express using docker");
})

app.get("/user/:name",(request,response)=>{
    let name = request.params.name;
    response.send("Welcome user "+name);
})

app.listen(9090, ()=>console.log("running on port number 9090"));