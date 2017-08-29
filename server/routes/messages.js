var express = require('express');
var router = express.Router();
var messages = require('../models/messages.schema.js');

router.post('/', function(req, res){
    console.log('new message: ', req.body);
    var addMessage = new messages(req.body);
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

router.get('/', function (req, res) {
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

module.exports = router;