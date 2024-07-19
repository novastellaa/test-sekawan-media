const excel = require('exceljs');

exports.exportBookings = async(bookings) => {
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('Bookings');

    worksheet.columns = [
        { header: 'ID', key: 'id', width: 10 },
        { header: 'User ID', key: 'userId', width: 10 },
        { header: 'Vehicle ID', key: 'vehicleId', width: 10 },
        { header: 'Driver', key: 'driver', width: 30 },
        { header: 'Approver ID', key: 'approverId', width: 10 },
        { header: 'Status', key: 'status', width: 10 }
    ];

    bookings.forEach((booking) => {
        worksheet.addRow(booking);
    });

    return workbook.xlsx.writeBuffer();
};