var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, function() {
    console.log('Server is running on port:', port);
});