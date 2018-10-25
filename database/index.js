const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/booking');

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'conection error'));
connection.once('open', () => console.log('connected to mongodb'));

module.exports = connection;