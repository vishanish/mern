//--controller wille do all the CRUD
//import the model here
const Joke = require("../models/joke.models");

module.exports.findAllJokes = (req, res) =>{
    Joke.find()
        .then(allTheJokes => {res.json({jokes: allTheJokes, message: 'success'})})
        .catch(err => {res.json({message: 'something went wrong', error: err})});
}

module.exports.findOneSingleJoke = (req, res) =>{
    Joke.findOne({_id: req.params.id})
        .then(oneSingleJoke => {res.json({joke: oneSingleJoke})})
        .catch(err => {res.json({message: 'something went wrong', error: err})})
}


module.exports.findOneRandomJoke = (req, res) =>{
    Joke.find()
        .then(allTheJokes => {
            rand = Math.floor(Math.random()*(allTheJokes.length))
            res.json({joke: allTheJokes[rand], message: 'success'})
        }
        )
        .catch(err => {res.json({message: 'something went wrong', error: err})})
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newCreatedJoke => res.json({joke: newCreatedJoke}))
        .catch(err => {res.json({message: 'something went wrong', error: err})})
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedJoke => {res.json({joke: updatedJoke})})
        .catch(err => {res.json({message: 'something went wrong', error: err})})
}

module.exports.deleteAExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}