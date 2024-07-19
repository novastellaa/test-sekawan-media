const express = require('express');
const router = express.Router();
const approvalController = require('../controllers/approvalController');

router.post('/', approvalController.createApproval);
router.get('/', approvalController.getApprovals);
router.get('/:id', approvalController.getApprovalById);
router.put('/:id', approvalController.updateApproval);
router.delete('/:id', approvalController.deleteApproval);

module.exports = router;