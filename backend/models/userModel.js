const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, 'user must have a username'] 
    },
    password : {
        type : String,
        required : [true, 'user must have a password']
    }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;