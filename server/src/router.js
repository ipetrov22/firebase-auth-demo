const { Router } = require('express');
const router = Router();
const controllers = require('./controllers');

router.use('/user', controllers.user);
router.use('/phone', controllers.phone);

module.exports = router;