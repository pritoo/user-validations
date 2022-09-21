const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
   
    email: {
        type: String,
        required: true,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        
    }
}));

function validateUser(user) {
    const schema = {
        email: Joi.string().max(50).required().email(),
        password: Joi.string().required()
    };
    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;