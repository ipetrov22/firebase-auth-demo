const admin = require('../config/firebase');

const register = ({email, password}) => {
    admin.auth().createUser({
        email,
        password
    })
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
}

module.exports = {
    register
}