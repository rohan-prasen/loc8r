// Requiring Mongoose
var mongoose = require('mongoose');
var gracefulShutdown;

// MongoDB URI
var dbURI = 'mongodb://0.0.0.0:27017/loc8r';
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
}
mongoose.connect(dbURI);

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI + '\n');
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err) + '\n';
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected \n');
});

// Requiring Schemas in the locations.js file
require('./locations');