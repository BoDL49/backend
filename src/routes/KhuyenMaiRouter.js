const express = require("express");
const router = express.Router();
const KhuyenMaiController = require('../controllers/KhuyenMaiController');

router.post('/create', KhuyenMaiController.createKhuyenmai)
router.put('/update/:id', KhuyenMaiController.updateKhuyenmai)
router.delete('/delete/:id', KhuyenMaiController.deleteKhuyenmai)
router.get('/getAll', KhuyenMaiController.getAllKhuyenmai)
router.get('/getDetail/:id', KhuyenMaiController.getDetailKhuyenmai)

module.exports = router
