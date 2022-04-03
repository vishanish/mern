//controller for CRUD
//import model
const Author = require("../models/authors.models")

module.exports ={
    findAll: (request, response) =>{
        console.log(request.body)
        Author.find()
            .then((allAuthors) =>{
                return response.json(allAuthors)
            })
            .catch((err) => {console.log(err)})
    },

    create: (request, response) => {
        console.log(request.body)
        Author.create(request.body)
            .then((newAuthor) => {response.json(newAuthor)})
            .catch(err => response.json(err))
    },

    findOne: (request, response) => {
        console.log(request.params)
        Author.findById(request.params.id)
            .then((oneAuthor) => response.json(oneAuthor))
            .catch(err => response.json(err))
    },

    update: (request, reponse) => {
        console.log(request.body)
        Author.findByIdAndUpdate(request.params.id, request.body,{
            new:true, runValidators:true
        })
        .then((updateAuthor) =>{
            return reponse.json(updateAuthor)
        })
        .catch(err => response.json(err))
    },
    delete: (request, response) => {
        Author.findByIdAndDelete(request.params.id)
            .then((result) => {
                return response.json(result)
            })
            .catch(err => response.json(err))
    }
}