var mongoose = require('mongoose');
// Schema for sent Forms 
var formSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

var Form = module.exports = mongoose.model('form', formSchema);
module.exports.get = function (callback, limit) {
    Form.find(callback).limit(limit);
}