const express = require("express");
const router = express.Router();
const KhachHangController = require('../controllers/KhachHangController');
const { authAdminMiddleware } = require("../middleware/authMiddleware");

router.post('/createKhachHang', KhachHangController.createKhachhang)
router.put('/updateKhachHang/:id', KhachHangController.updateKhachhang)
router.delete('/deleteKhachHang/:id', KhachHangController.deleteKhachhang)
router.get('/getAll', KhachHangController.getAllKhachhang)
router.get('/getDetail/:id', KhachHangController.getDetailKhachhang)

module.exports = router
