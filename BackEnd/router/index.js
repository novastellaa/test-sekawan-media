const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const vehicleRoutes = require('./vehicleRoutes');
const bookingRoutes = require('./bookingRoutes');
const approvalRoutes = require('./approvalRoutes');
const vehicleUsageRoutes = require('./vehicleUsageRoutes');

router.use('/users', userRoutes);
router.use('/vehicles', vehicleRoutes);
router.use('/bookings', bookingRoutes);
router.use('/approvals', approvalRoutes);
router.use('/vehicle-usage', vehicleUsageRoutes);

module.exports = router;