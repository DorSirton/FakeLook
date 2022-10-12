const express = require('express');
const router = express.Router();
const controller = require("../controller/comment.controller");
const { authenticateToken } = require('../../../middlewares/auth.middleware');

router.get('/:id',authenticateToken, controller.getCommentsById);
router.post('/', controller.create);
module.exports = router;