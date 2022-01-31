const express = require("express");
const inspectController = require("../api/controllers/inspection.controller");
const router = express.Router();
router.get('/inspections',inspectController.getAll);
router.get('/inspections/:insId',inspectController.getOne);
router.delete('/inspections/:insId',inspectController.deletOne);
module.exports = router;