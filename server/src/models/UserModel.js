const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    favorites: {
        type: Array
    }
});

const model = mongoose.model('User', UserSchema);
module.exports = model;