const express = require('express');
const router = express.Router();

const weatherCtrl = require('../controllers/weather');

router.get('/', weatherCtrl.getWeather);

module.exports = router;