const express = require('express');
const router = express.Router();
const vehicleUsageController = require('../controllers/vehicleUsageController');

router.get('/', vehicleUsageController.getVehicleUsage);

module.exports = router;