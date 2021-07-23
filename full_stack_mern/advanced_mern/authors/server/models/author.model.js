const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Tell us your favorite author's name, we don't bite!"],
        minlength : [3, "I bet your author has a first name and a last name!"]
    }
}, {timestamps : true})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;