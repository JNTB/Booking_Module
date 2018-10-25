const mongoose = require('mongoose');
const connection = require('./index');

const bookingSchema = new mongoose.Schema({
    pricePerNight: Number,
    priceCleaning: Number,
    priceService: Number,
    numReviews: Number
});

const Booking = mongoose.model('booking', bookingSchema);

module.exports = Booking;