var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema
var messagesSchema = new Schema({
    name: {type: String},
    message: {type: String},
},
{
    collection: 'messages'
});

//exports our model
module.exports = mongoose.model('messages', messagesSchema);