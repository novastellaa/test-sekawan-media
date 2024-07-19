// controllers/vehicleUsageController.js
const { Booking, sequelize } = require('../models');
const { Op } = require('sequelize');

exports.getVehicleUsage = async(req, res) => {
    try {
        const { startDate, endDate } = req.query;
        const usageData = await Booking.findAll({
            where: {
                startDate: {
                    [Op.gte]: new Date(startDate)
                },
                endDate: {
                    [Op.lte]: new Date(endDate)
                }
            },
            attributes: [
                'vehicleId', [sequelize.fn('count', sequelize.col('vehicleId')), 'usageCount']
            ],
            group: ['vehicleId']
        });
        console.log('Usage Data:', usageData);
        res.status(200).json(usageData);
    } catch (error) {
        console.error('Error fetching vehicle usage data:', error); // Log error to console
        res.status(500).json({ error: error.message });
    }
};