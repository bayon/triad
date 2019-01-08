var express = require('express');
var app = express();
var todoController = require('./controllers/todoController');
const cors = require('cors');
//define view engine
app.set('view engine','ejs');

//include static assets
app.use(express.static('./public'));

// use CORS
app.use(cors());

// fire up the controller
todoController(app);

// start the server listening
app.listen(3000);
console.log('listening on port 3000');