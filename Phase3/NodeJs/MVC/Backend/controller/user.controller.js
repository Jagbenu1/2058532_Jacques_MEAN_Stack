let userModel = require("../model/user.model");

let signUp = async (request, response)=>{
    let user = request.body;
    let userInfo =  await userModel.findOne({email: user.email});
    if(userInfo==null){
        let result = await userModel.insertMany(user);
        response.send("Account created successfully!")
    }else{
        response.send("Email Id must be unique");
    }
}

let signIn = async (request, response)=>{
    let user = request.body;
    let userInfo =  await userModel.findOne({email: user.email, password: user.password});
    if(userInfo!=null){
        request.send("Success!!");
    }else{
        response.send("Invalid username or password");
    }
}

module.exports = {signIn, signUp};