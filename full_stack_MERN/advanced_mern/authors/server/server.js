const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
const DB = "authors_db";

//middleware
app.use(express.json(), cors(), express.urlencoded({extended:true}));

//databse connection
require('./config/mongoose.config')(DB);

//connect the routes
require("./routes/authors.routes")(app);

//listen method
app.listen(PORT, () => {
    console.log(`You are listening on port: ${PORT}`);
})