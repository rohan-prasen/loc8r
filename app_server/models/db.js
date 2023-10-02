// Requiring Mongoose
var mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

var gracefulShutdown;
var dbURI = "mongodb://0.0.0.0:27017/";
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGODB_URI;
}
mongoose.connect(dbURI);

// Connected event
mongoose.connection.on('connected', function() { 
    console.log('Mongoose connected to ' + dbURI + '\n'); 
});

//Error event
mongoose.connection.on('error', function(err) { 
    console.log('Mongoose connection error ' + err + '\n'); 
});

// Disconnected event
mongoose.connection.on('disconnected', function() { 
    console.log('Mongoose disconnected' + '\n'); 
});

// Requiring Schemas in the locations.js file
require('./locations');