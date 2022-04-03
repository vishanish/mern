const mongoose = require ("mongoose");

module.exports =(DB) => {
    mongoose.connect (`mongodb://localhost/${DB}`)
        .then(() => {
            console.log(`You are connected to ${DB} db`)
        })
        .catch((err) => console.log (`Cannot connect to ${DB}`, err) )
}