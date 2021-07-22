const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.json({allProducts}))
        .catch(err => res.status(400).json({err}))
}

module.exports.findOneProduct = (req, res) => {
    const id = req.params;
    Product.find({_id : id})
        .then(oneProduct => res.json({oneProduct}))
        .catch(err => res.status(400).json({err}))
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({newProduct}))
        .catch(err => res.status(400).json({err}))
}

module.exports.editProduct = (req, res) => {
    const id = req.params;
    Product.findOneAndUpdate({_id: id})
        .then(editedProduct => res.json({editedProduct}))
        .catch(err => res.status(400).json({err}))
}

module.exports.deleteProduct = (req, res) => {
    const id = req.params;
    Product.findByIdAndDelete({_id: id})
        .then(deletedProduct => res.json({deletedProduct}))
        .catch(err => res.status(400).json({err}))
}