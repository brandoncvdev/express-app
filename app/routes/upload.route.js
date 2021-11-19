const express = require("express");
const controller = require('../controllers/upload.controller');
const router = express.Router();

router.post(`/upload`, controller.upload, controller.uploadFile);

module.exports = router;