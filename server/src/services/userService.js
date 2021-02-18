const admin = require('../config/firebase');
const UserModel = require('../models/UserModel');

const register = ({ email, password }) => {
    return admin.auth().createUser({
        email,
        password
    })
        .then(async (userRecord) => {
            const user = new UserModel({ email });
            await user.save();

            return userRecord;
        })
        .catch((error) => {
            return { error: error.message };
        });
}

module.exports = {
    register
}