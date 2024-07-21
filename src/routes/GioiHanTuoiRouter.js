const express = require("express");
const router = express.Router();
const GioiHanTuoiController = require('../controllers/GioiHanTuoiController');

router.post('/create', GioiHanTuoiController.createGioiHantuoi)
router.put('/update/:id', GioiHanTuoiController.updateGioiHantuoi)
router.delete('/delete/:id', GioiHanTuoiController.deleteGioiHantuoi)
router.get('/getAll', GioiHanTuoiController.getAllGioiHantuoi)
router.get('/getDetail/:id', GioiHanTuoiController.getDetailGioiHantuoi)

module.exports = router
