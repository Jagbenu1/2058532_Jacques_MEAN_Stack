let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
const { request, response } = require("express");

let app = express();

app.use(bodyParser.json()); //enable json data
app.use(cors()); //enable cors

let customers = [
    {cid: 100, cname: "Raj", age:21},
    {cid:101, cname:"Ramesh", age:24}
]

//search customer by id
//http://localhost:9090/findCustomerById
app.get("/findCustomerById/:cid",(request,response)=>{
    let cid = request.params.cid;
    let customer = customers.find(c=>c.cid==cid);
    if(customer==undefined){
        response.json({"msg":"Customer not present with id "+ cid})
    }else{
        response.json(customer);
    }
})

//get all customer details
//http://localhost:9090/allCustomerDetails
app.get("/allCustomerDetails", (request, response)=>{
    response.json(customers);
})

//add new customers
//http://localhost:9090/storeCustomerInfo
//{"cid":100, "cname":"Manesh", "age":24}
app.post("/storeCustomerInfo",(request, response)=>{
    let cust = request.body;
    let customer = customers.find(c=>c.cid==cust.cid);
    if(customer==undefined){
        customers.push(cust)
        response.json({"msg":"Customer Record added successfully "})
    }else{
        response.json({"msg":"Customer id must be unique "});
    }
})

//update customer age
//http://localhost:9090/updateCustomerAge
app.put("/updateCustomerAge",(request, response)=>{
    let cust = request.body;
    let index = customers.findIndex(c=>c.cid==cust.cid);
    if(index==-1){
        response.json({"msg":"No customer found with id "+cust.cid})
    }else{
        customers[index].age = cust.age;
        response.json({"msg":"Customer age updated successfully "});
    }
})


//delet customer info
//http://localhost:9090/deleteCustomerInfo/100
app.delete("/deleteCustomerInfo/:cid",(request, response)=>{
    let cid = request.params.cid;
    let index = customers.findIndex(c=>c.cid==cid);
    if(index==-1){
        response.json({"msg":"No customer found with id "+cust.cid})
    }else{
        customers.splice(index, 1);
        response.json({"msg":"Customer deleted successfully "});
    }
})


app.listen(9090,()=>console.log("Server running on port number 9090"));
