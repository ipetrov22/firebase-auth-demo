const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
    return mongoose.connect(config.dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }, (err) => {
        if (err) {
            throw err;
        }
        console.log('Database connected.');
    });
}