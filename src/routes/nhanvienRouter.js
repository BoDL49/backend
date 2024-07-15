const express = require("express");
const router = express.Router();
const NhanVienController = require('../controllers/NhanVienController');
const { authAdminMiddleware } = require("../middleware/authMiddleware");

router.post('/createNhanvien', NhanVienController.createNhanvien)
router.put('/updateNhanvien/:id', NhanVienController.updateNhanvien)
router.delete('/deleteNhanvien/:id', NhanVienController.deleteNhanvien)
router.get('/getAll', NhanVienController.getAllNhanvien)
router.get('/getDetail/:id', NhanVienController.getDetailNhanvien)

module.exports = router
