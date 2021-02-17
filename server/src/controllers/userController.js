const { Router } = require('express');
const router = Router();
const { userService } = require('../services');

router.post('/register', async (req, res) => {
    await userService.register(req.body);
});

module.exports = router;