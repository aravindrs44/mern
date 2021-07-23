const Author = require("../models/author.model");

module.exports.findAllAuthors = (req, res) => {
    Author.find({})
        .then(allAuthors => res.json({allAuthors}))
        .catch(err => res.status(400).json({err}))
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({newAuthor}))
        .catch(err => res.status(400).json({err}))
}

// module.exports.findOneAuthor = (req, res) => {
//     Author.find
// }