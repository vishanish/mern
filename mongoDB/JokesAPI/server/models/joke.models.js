//import mongoose to build a model
const mongoose = require('mongoose');

//the schema(rules) that the entires the db must follow

const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
}, {timestamps:true});

//the model - this is what we use to make queries to the DB

const Joke = mongoose.model("Joke", JokeSchema)

//export the model
module.exports = Joke;