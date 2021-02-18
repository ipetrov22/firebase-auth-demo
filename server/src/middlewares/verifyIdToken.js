const admin = require('../config/firebase');

module.exports = (req, res, next) => {
    const { idToken } = req.query;

    admin.auth().verifyIdToken(idToken)
        .then((decodedToken) => {
            next();
        })
        .catch((error) => res.json({error: 'Unauthorized'}));
}