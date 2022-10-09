const express = require('express');
const router = express.Router();
const controller = require("../controller/like.controller");

router.post('/', controller.createLike);
router.get('/:id', controller.getAllLikes);
module.exports = router;