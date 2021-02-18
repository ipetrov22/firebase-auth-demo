const { Router } = require('express');
const router = Router();
const { userService } = require('../services');

router.post('/register', async (req, res) => {
    const result = await userService.register(req.body);
    return res.json(result);
});

module.exports = router;