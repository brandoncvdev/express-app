const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');
const path = 'user';

router.get(`/${path}`, controller.getData);
router.post(`/${path}`, controller.insertData);
router.put(`/${path}/:id`, controller.updateSingle);
router.delete(`/${path}/:id`, controller.deleteSingle);

module.exports = router;