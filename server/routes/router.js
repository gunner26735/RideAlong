const express = require('express');
const router = express.Router();


const services = require('../services/render')
const controller = require('../controller/control')

/*
* @description RootRoute
* @method GET /
*/
router.get('/',services.renderHome);
router.get('/rider_login',services.renderRiderLogin);
router.get('/user_login',services.renderUserLogin);
router.get('/rider_register',services.renderRiderReg);
router.get('/user_register',services.renderUserReg);
router.get('/user_home',services.renderUser);
router.get('/rider_home',services.renderRider);
router.get('/rides',services.renderRides);

//API
router.post('/api/user',controller.create)
router.post('/api/ulogin',controller.uLogin)
router.post('/api/rider',controller.createRider)
router.post('/api/rlogin',controller.rLogin)
router.post('/api/setride',controller.setRide)
router.post('/api/find',controller.getRider)

module.exports = router