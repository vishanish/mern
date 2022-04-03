const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(cors());


require('./server/routes/person.routes')(app);


app.listen(PORT, () => {console.log(`You are listening on port ${PORT}`)});