var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//messages  schema
var messagesSchema = new Schema({
    user: {
        type: String
        , required: true
    }, 
    sender: {
        type: String
        , required: true
    },
    messages: {
        type: String
    }
    , date: {
        type: Date
    }
});

module.exports=mongoose.model('messages', messagesSchema);