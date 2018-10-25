const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connection = require('../database/index');

let app = express();

app.use(express.static(__dirname + '../client/dist/index'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.listen(3000, () => console.log('listening to port 3000!'));

//do I need router?
//need GET and POST request
