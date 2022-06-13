const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
    organization: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    account: {
        type: String,
        required: true
    },
    foods: {
        type:Array,
        default: [], 
    },
    date: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('users', userSchema);