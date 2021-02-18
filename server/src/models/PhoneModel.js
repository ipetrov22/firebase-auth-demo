const mongoose = require('mongoose');

const PhoneSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    }
});

const model = mongoose.model('Phone', PhoneSchema);
module.exports = model;