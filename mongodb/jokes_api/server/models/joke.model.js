const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup : {
        type : String,
        required: [true, "Joke needs a setup!"],
        minlength: [10, "Your setup needs some work"]
    },
    punchline : {
        type : String,
        required: [true, "Joke needs a punchline! Finish them with laughter!"],
        minlength: [3, "Your punchline needs some work"]
    }
}, {timestamps: true})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;