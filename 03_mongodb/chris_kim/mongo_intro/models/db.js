// We're going to use an ORM called Mongoose
var mongoose = require('mongoose');

// Define my connection string (creates connection to the database)
  // protocol://username:password@website.com:3000/resource-name
  // Example 1 --> ftp://admin:awesomepassword@ftp.somewebsite.com/path/to/www
  // Example 2 --> website: https://google.com/search

// mongodb://server-name.com:port/name-of-database
var connectionString = 'mongodb://localhost/myfirstdatabase'


// Now tell mongoose to connect to the database using connectionString
mongoose.connect(connectionString);

// Listen for events in mongoose
  // 'connected' event - database has connected
  // 'error' event - something has gone wrong
  // 'disconnected' event - database has be disconnected
mongoose.connection.on('connected', function(){
  console.log('Mongoose has connected to: ' + connectionString)
});

mongoose.connection.on('error', function(error){
  console.log('Mongoose has had an error: ' + error)
});

mongoose.connection.on('disconnected', function(){
  console.log('Mongoose has been disconnected')
});
