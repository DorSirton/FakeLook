const express = require('express');
const router = express.Router();
const controller = require("../controller/post.controller");

router.get('/', controller.getPostsFiltteredByLocation);
module.exports = router;