const admin = require('../config/firebase');
const UserModel = require('../models/UserModel');

const register = async ({ email, password }) => {
    try {
        const user = new UserModel({ email });
        await user.save();
        const uid = user._id.toString();

        const firebaseUserRecord = await admin.auth().createUser({
            uid,
            email,
            password
        });
        return firebaseUserRecord;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    register
}