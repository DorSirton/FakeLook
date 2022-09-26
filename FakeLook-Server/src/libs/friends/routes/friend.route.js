const express = require('express');
const router = express.Router();
const controller = require("../controller/friend.controller");

router.get('/', controller.getAllFriends);
router.get('/:id', controller.getAll);
router.get('/getOneById', controller.getOneById);
router.delete('/removeFriend', controller.removeFriend);
router.post('/', controller.createFriend);

module.exports = router;