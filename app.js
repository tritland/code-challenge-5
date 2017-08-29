var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 5000;

var messages = require('./server/routes/messages');


app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/messages', messages);

var databaseUrl = 'mongodb://localhost:27017/betelgeuse';
mongoose.connect(databaseUrl, 
{
    useMongoClient: true
});

mongoose.connection.on('connected', function(){
    console.log('mongoose connected to: ', databaseUrl);
});

app.listen(port, function() {
    console.log('Server is running on port:', port);
});