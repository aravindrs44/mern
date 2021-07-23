const AuthorController = require("../controllers/author.controller");

module.exports = app => {
    app.get('/api/authors', AuthorController.findAllAuthors)
    app.post('/api/authors/new', AuthorController.createAuthor)
    app.put('/api/products/edit/:id', AuthorController.editAuthor)
}