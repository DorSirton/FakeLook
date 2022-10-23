const express = require('express');
const router = express.Router();
const controller = require("../controller/user.controller");

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.post('/image',controller.uploadFile);
module.exports = router;