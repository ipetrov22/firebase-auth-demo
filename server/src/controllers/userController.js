const { Router } = require('express');
const router = Router();

router.post('/register', (req, res) => {
    res.send('register post');
});

module.exports = router;