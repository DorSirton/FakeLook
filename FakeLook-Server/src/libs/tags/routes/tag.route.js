const express = require('express');
const router = express.Router();
const controller = require("../controller/tag.controller");
const { authenticateToken } = require('../../../middlewares/auth.middleware');

router.get('/', controller.getAll);
router.post('/', controller.create);
module.exports = router;