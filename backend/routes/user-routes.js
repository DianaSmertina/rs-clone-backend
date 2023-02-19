const Router = require('express');
const userController = require('../controller/user-controller');
const resultsController = require('../controller/results-controller');
const router = new Router();
require('dotenv').config();
const cloudinary = require('cloudinary').v2
const path = require('path');
const multer = require('multer');
const loader = multer({dest: path.join(__dirname, 'tmp')});

cloudinary.config({
    cloud_name: "dkuaebjgl",
    api_key: "923165793678129",
    api_secret: "JwRDY9XueYsdgP4HmpTHcxN9TTw"
});

router.get('/user/:username', userController.getUser);
router.get('/user', userController.getUsers);
router.post('/user', userController.createNewUser);
router.post('/sign-in', userController.signIn);
router.put('/country', resultsController.updateCountry);
router.put('/population', resultsController.updatePopulation);
router.put('/flags', resultsController.updateFlags);
router.put('/flags-region', resultsController.updateFlagsRegion);
router.put('/country-region', resultsController.updateCountryRegion);
router.put('/population-region', resultsController.updatePopulationRegion);
router.get('/country/:username', resultsController.getCountry);
router.get('/population/:username', resultsController.getPopulation);
router.get('/flags/:username', resultsController.getFlags);
router.get('/results', resultsController.getAllResults);
router.get('/results/:username', resultsController.getUserResults);
router.put('/avatar/:username', loader.single('avatar'), userController.createAvatar);
router.get('/avatar/:username', userController.getAvatar);

module.exports = router;