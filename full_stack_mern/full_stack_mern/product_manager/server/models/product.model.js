const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "Your product needs a name!"],
        minlength : [3, "I... Is that a name?"]
    },
    price : {
        type : Number,
        required : [true, "Nothing is free in this world!"]
    },
    description : {
        type : String,
        required: [true, "What is this supposed to be?"],
        minlength : [5, "Get it together"]
    }
}, {timestamps : true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;