const express = require('express');
const router = express.Router();
const controller = require("../controller/post.controller");
const { authenticateToken } = require('../../../middlewares/auth.middleware');

router.get('/',authenticateToken, controller.getPostsFiltteredByLocation);
router.post('/', controller.create);
module.exports = router;