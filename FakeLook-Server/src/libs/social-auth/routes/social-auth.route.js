const express = require('express');
const router = express.Router();
const controller = require("../controller/social-auth.controller");
const { authenticateToken } = require('../../../middlewares/auth.middleware');

router.post('/', controller.registerOrLogin);

module.exports = router;