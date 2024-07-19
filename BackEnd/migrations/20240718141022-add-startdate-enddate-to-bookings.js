'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.addColumn('Bookings', 'startDate', {
            type: Sequelize.DATE,
            allowNull: true,
        });
        await queryInterface.addColumn('Bookings', 'endDate', {
            type: Sequelize.DATE,
            allowNull: true,
        });
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.removeColumn('Bookings', 'startDate');
        await queryInterface.removeColumn('Bookings', 'endDate');
    }
};