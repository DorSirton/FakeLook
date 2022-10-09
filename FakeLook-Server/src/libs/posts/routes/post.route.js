const express = require('express');
const router = express.Router();
const controller = require("../controller/post.controller");

router.get('/', controller.getPostsFiltteredByLocation);
router.post('/', controller.create);
module.exports = router;