const { Router } = require('express');
const router = Router();
const { userService } = require('../services');

router.post('/register', async (req, res) => {
    const userRecord = await userService.register(req.body);
    res.json(userRecord);
});

module.exports = router;