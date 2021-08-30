//load the module
// const { request, response } = require("express");
let express = require("express");
let bodyParser = require("body-parser");
// let url = require("url");

let userDetails = [];

//creating the reference of express module
let app = express();

app.use(bodyParser.urlencoded({extended: true}));

// app.use();

app.get("/login",(request,response)=>{
    response.sendFile(__dirname+"\\login.html")
    //res.send("Welcome to Contact Us Page!");
})

app.get("/checkUser",(request,response)=>{
    
    // let user = req.query.user;
    // let pass = req.query.pass;

    let user = request.query["user"];
    let pass = request.query["pass"];
    let result = userDetails.find(l=>l.uname == user && l.pname == pass);

    if(result != undefined){
        response.send("Success!");
    }else{
        response.send("Failure");
    }
})

app.get("/SignUp",(request,response)=>{
    response.sendFile(__dirname+"\\register.html")
    //res.send("Welcome to Contact Us Page!");
})

// app.get("/register",(req,res)=>{
//     res.sendFile("Post method...")
//     //res.send("Welcome to Contact Us Page!");
// })

app.post("/register",(request,response)=>{
        let userDetail = request.body;
        // console.log(userDetail);
        userDetails.push(userDetail);
        //response.write("Account created.");
        response.sendFile(__dirname+"\\login.html");
        
});

app.get("/",(request,response)=>{
    //res.send("Wwlcome to Index Page!");
    //res.sendFile("C:\\Users\\jacqu\\Desktop\\2058532_Jacques_MEAN_Stack\\Phase3\\express-modules\\index.html");
    //res.send(__dirname);
    response.sendFile(__dirname+"\\index.html");
})


app.listen(9090, ()=>console.log("Server running on port number 9090!"));