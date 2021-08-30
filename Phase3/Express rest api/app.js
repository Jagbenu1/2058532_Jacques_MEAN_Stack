//load module
const { request, response } = require("express");
let express = require("express");
let bodyParser = require("body-parser");

let emp = {id: 100, name: "Raj", age: 21}
let employees = [
    {id: 100, name: "Raj", age: 21},
    {id: 101, name: "Raju", age: 21},
    {id: 102, name: "Rajish", age: 21},
    {id: 103, name: "Rajin", age: 21}
]

//create reference

let app = express();

app.use(bodyParser.json());
//http://localhost:9090/sayPlainText
app.get("/sayPlainText",(request, response)=>{
    response.send("Welcome to REST API in plain text format");
});

//http://localhost:9090/sayJSON
app.get("/sayJSON",(request, response)=>{
    response.json({"msg":"Welcome to REST API in JSON Format"});
})

//http://localhost:9090/empInfo
app.get("/empInfo", (request, response)=>{
    response.json(emp);
})

//http://localhost:9090/employeesInfo
app.get("/employeesInfo", (request, response)=>{
    response.json(employees);
})

//query param with single value
//http://localhost:9090/singleQueryParam?name=Raj
app.get("/singleQueryParam", (request, response)=>{
    let name = request.query.name;
    response.send("Welcome user " + name);
})

//path param with single value
//http://localhost:9090/singlePathParam/Raj
app.get("/singlePathParam/:name", (request, response)=>{
    let name = request.params.name;
    response.send("Welcome user path param " + name);
})


//path param with multiple value
//http://localhost:9090/multiPathParam/100/Raj/64400
app.get("/multiPathParam/:id/:name/:salary", (request, response)=>{
    let id = request.params.id;
    let name = request.params.name;
    let salary = request.params.salary;
    response.send("Welcome user with multiple path param " + id+ " Name is "+ name+ "Salary is " + salary);
})

//store Employee details
//http://localhost:9090/storeEmployee
//{"id":100, "name":"Raj", "age":21}
app.post("/storeEmployee",(request, response)=>{
    let employee = request.body;
    console.log(employee);
    response.send("employee data store")
})

//update Employee details
//http://localhost:9090/updateEmployee
//{"id":100, "age":21}
app.put("/updateEmployee",(request, response)=>{
    let employee = request.body;
    console.log(employee);
    response.send("employee data updated")
})

//update Employee details
//http://localhost:9090/deleteEmployeeInfo/100
app.delete("/deleteEmployeeInfo/:id",(request, response)=>{
    let id = request.params.id;
    response.send("employee details deleted using id as "+id);
})



app.listen(9090, ()=>console.log("Server running on port number 9090"))