const Router = require('express');
const userController = require('../controller/user-controller');
const resultsController = require('../controller/results-controller');
const router = new Router();

router.get('/user/:username', userController.getUser);
router.get('/user', userController.getUsers);
router.post('/user', userController.createNewUser);
router.post('/sign-in', userController.signIn);
router.put('/country', resultsController.updateCountry);
router.put('/population', resultsController.updatePopulation);
router.put('/flags', resultsController.updateFlags);

module.exports = router;