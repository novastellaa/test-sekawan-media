const { Approval } = require('../models');

// Create Approval
exports.createApproval = async(req, res) => {
    try {
        const approval = await Approval.create(req.body);
        res.status(201).json(approval);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get All Approvals
exports.getApprovals = async(req, res) => {
    try {
        const approvals = await Approval.findAll();
        res.status(200).json(approvals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Approval by ID
exports.getApprovalById = async(req, res) => {
    try {
        const approval = await Approval.findByPk(req.params.id);
        if (approval) {
            res.status(200).json(approval);
        } else {
            res.status(404).json({ error: 'Approval not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Approval
exports.updateApproval = async(req, res) => {
    try {
        const approval = await Approval.findByPk(req.params.id);
        if (approval) {
            await approval.update(req.body);
            res.status(200).json(approval);
        } else {
            res.status(404).json({ error: 'Approval not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Approval
exports.deleteApproval = async(req, res) => {
    try {
        const approval = await Approval.findByPk(req.params.id);
        if (approval) {
            await approval.destroy();
            res.status(200).json({ message: 'Approval deleted' });
        } else {
            res.status(404).json({ error: 'Approval not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};