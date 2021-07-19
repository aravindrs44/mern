const express = require("express");
const app = express();
const port = 8000;

require('./config/mongoose.config')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const jokeRoutes = require('./routes/joke.routes')
jokeRoutes(app);

app.listen(port, () => console.log(`EXPRESS running on port ${port}. Just remember you're a hunka hunka!`));
