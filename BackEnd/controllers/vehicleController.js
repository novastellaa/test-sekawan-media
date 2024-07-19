const { Vehicle } = require('../models');

// Create Vehicle
exports.createVehicle = async(req, res) => {
    try {
        const vehicle = await Vehicle.create(req.body);
        res.status(201).json(vehicle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get All Vehicles
exports.getVehicles = async(req, res) => {
    try {
        const vehicles = await Vehicle.findAll();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Vehicle by ID
exports.getVehicleById = async(req, res) => {
    try {
        const vehicle = await Vehicle.findByPk(req.params.id);
        if (vehicle) {
            res.status(200).json(vehicle);
        } else {
            res.status(404).json({ error: 'Vehicle not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Vehicle
exports.updateVehicle = async(req, res) => {
    try {
        const vehicle = await Vehicle.findByPk(req.params.id);
        if (vehicle) {
            await vehicle.update(req.body);
            res.status(200).json(vehicle);
        } else {
            res.status(404).json({ error: 'Vehicle not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Vehicle
exports.deleteVehicle = async(req, res) => {
    try {
        const vehicle = await Vehicle.findByPk(req.params.id);
        if (vehicle) {
            await vehicle.destroy();
            res.status(200).json({ message: 'Vehicle deleted' });
        } else {
            res.status(404).json({ error: 'Vehicle not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};