const Router = require('express');
const userController = require('../controller/user-controller');
const router = new Router();
const controller = require('../controller/user-controller');

router.post('/user', userController.createNewUser);

module.exports = router;