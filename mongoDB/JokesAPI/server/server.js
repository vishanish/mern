const express = require ('express');
const app = express();
const PORT = 8000;

app.use(express.json(), express.urlencoded({extended: true}));

require('./config/mongoose.config')


//import routes
const Routefunction = require('./routes/joke.routes');
Routefunction(app);








app.listen(PORT, () => {console.log('server on port',PORT)})