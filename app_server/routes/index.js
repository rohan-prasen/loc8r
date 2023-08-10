var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controller/locations');
var ctrlOthers = require('../controller/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location2', ctrlLocations.locationInfo2);
router.get('/location3', ctrlLocations.locationInfo3);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about',ctrlOthers.about);

router.get('/signin', ctrlOthers.signin);

router.get('/register', ctrlOthers.register);

module.exports = router;
