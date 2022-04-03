const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

require("./server/config/mongoose.config")

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
require('./server/routes/person.routes')(app);

app.listen(PORT, () =>{
    console.log(`You are now listening on port ${PORT}`)
})