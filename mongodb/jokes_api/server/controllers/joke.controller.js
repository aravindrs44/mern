const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({allJokes}))
        .catch(err => res.json({err}))
}

module.exports.findRandomJoke = (req, res) => {
    Joke.aggregate([{$sample : {size : 1}}])
        .then(randJoke => res.json({randJoke}))
        .catch(err => res.json({err}))
}

module.exports.findOneJoke = (req, res) => {
    Joke.find({_id: req.params._id})
        .then(oneJoke => res.json({oneJoke}))
        .catch(err => res.json({err}))
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({newJoke}))
        .catch(err => res.json({err}))
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedJoke => res.json({updatedJoke}))
        .catch(err => res.json({err}));
}

module.exports.deleteJoke = (req, res) => {
    Joke.delete({_id: req.params._id})
        .then(deletedJoke => res.json({deletedJoke}))
        .catch(err => res.json({err}))
}

