const Router = require('express');
const userController = require('../controller/user-controller');
const router = new Router();
const controller = require('../controller/user-controller');

router.get('/user/:username', userController.getUser);
router.get('/user', userController.getUsers);
router.post('/user', userController.createNewUser);
router.get('/sign-in', userController.signIn);

module.exports = router;