const mongoose  = require ('mongoose');
const DB_NAME = "jokes_DB";

mongoose.connect('mongodb://localhost/' + DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the ${DB_NAME} database`))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));