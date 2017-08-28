var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 5000;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var databaseUrl = 'mongodb://localhost:27017/betelgeuse';
mongoose.connect(databaseUrl, 
{
    useMongoClient: true
});

mongoose.connection.on('connected', function(){
    console.log('mongoose connected to: ', databaseUrl);
});

app.post('/messages', function(req, res){
    console.log('new message: ', req.body);
    var addMessage = new message(req.body);
    addMessage.save(function(err, data){
        console.log('saved to messages', data);
        if(err) {
            console.log('save error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201)
        };
    });
});

app.get('/messages', function (req, res) {
    messages.find({}, function (err, data) {
        if (err) {
            console.log('find error:', err);
            res.sendStatus(500);
        } else {
            console.log('found data:', data)
            res.send(data);
        }
    });
});

app.listen(port, function() {
    console.log('Server is running on port:', port);
});