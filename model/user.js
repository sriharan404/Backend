var timestamps = require('mongoose-timestamp');
var userschema = new mongoose.Schema({
    name: {
        type: String
    },
    mobileno: {
        type: Number
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    gender: {
        type: String
    },
    description: {
        type: String
    },
    isdeleted: {
        type: Number,
        default: 0
    },
    createdby: {
        type: Number,
        default: 0
    },
})
userschema.plugin(timestamps);
var user = new mongoose.model('user', userschema);
module.exports = user;