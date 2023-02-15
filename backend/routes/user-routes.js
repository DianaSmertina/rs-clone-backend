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
router.get('/country/:username', resultsController.getCountry);
router.get('/population/:username', resultsController.getPopulation);
router.get('/flags/:username', resultsController.getFlags);
router.get('/results', resultsController.getAllResults);

module.exports = router;