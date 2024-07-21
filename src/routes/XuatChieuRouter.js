const express = require("express");
const router = express.Router();
const XuatChieuController = require('../controllers/XuatChieuController');

router.post('/create', XuatChieuController.createXuatChieu)
router.put('/update/:id', XuatChieuController.updateXuatChieu)
router.delete('/delete/:id', XuatChieuController.deleteXuatChieu)
router.get('/getAll', XuatChieuController.getAllXuatChieu)
router.get('/getDetail/:id', XuatChieuController.getDetailXuatChieu)

module.exports = router