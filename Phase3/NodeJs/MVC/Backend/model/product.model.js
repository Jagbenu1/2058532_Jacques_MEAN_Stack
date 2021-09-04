let mongoose = require("mongoose");

mongoose.pluralize(null);
let productSchema = mongoose.Schema({
    _id: Number,
    pname: String,
    price: Number
})

//using schema creating model
//1st parameter vollection name
//2nd parameter schema reference
let productModel = mongoose.model("Product", productSchema);

module.exports=productModel;  //we can now import this using require