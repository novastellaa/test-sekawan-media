const { Booking, Approval } = require('../models');

exports.createBooking = async(userId, vehicleId, driver, approverId) => {
    const booking = await Booking.create({ userId, vehicleId, driver, approverId });
    await Approval.create({ bookingId: booking.id, approverId, level: 1, status: 'pending' });
    await Approval.create({ bookingId: booking.id, approverId, level: 2, status: 'pending' });
    return booking;
};