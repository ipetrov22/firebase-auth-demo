const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 5000,
        dbUrl: 'mongodb+srv://admin:qwe123qwe@cluster0.5uonz.mongodb.net/demo?retryWrites=true&w=majority',
    },
    production: {}
};

module.exports = config[env];