// models/booking.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        static associate(models) {
            // define association here
        }
    }

    Booking.init({
        userId: DataTypes.INTEGER,
        vehicleId: DataTypes.INTEGER,
        driver: DataTypes.STRING,
        approverId: DataTypes.INTEGER,
        status: DataTypes.STRING,
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Booking',
    });

    return Booking;
};