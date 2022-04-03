const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 8000;

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/routes/manager.routes')(app);

app.listen(PORT, () => {
    console.log(`You are now listening on port: ${PORT}`)
})