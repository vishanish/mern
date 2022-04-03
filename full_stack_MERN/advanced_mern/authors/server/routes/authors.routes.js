const Author = require('../controllers/authors.controllers');

module.exports =(app) =>{
    app.get("/api/authors", Author.findAll)
    app.post("/api/authors", Author.create)
    app.get("/api/authors/:id", Author.findOne)
    app.put("/api/authors/:id", Author.update)
    app.delete("/api/authors/:id", Author.delete)
}