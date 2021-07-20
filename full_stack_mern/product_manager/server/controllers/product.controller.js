const Product = require("../models/product.model");

module.exports.testMessage = (req, res) => {
    res.json({
        message : "Testing. What it do tho?"
    })
}

module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.json({allProducts}))
        .catch(err => res.json({err}))
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({newProduct}))
        .catch(err => res.json({err}))
}