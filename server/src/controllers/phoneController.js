const { Router } = require('express');
const router = Router();
const { phoneService } = require('../services');
const verifyIdToken = require('../middlewares/verifyIdToken');


router.get('/', verifyIdToken, async (req, res) => {
    const phones = await phoneService.getAll();
    return res.json(phones);
});

module.exports = router;