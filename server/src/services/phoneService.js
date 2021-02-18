const PhoneModel = require('../models/PhoneModel');

const getAll = async () => {
    return await PhoneModel.find().lean();
}

module.exports = {
    getAll
}