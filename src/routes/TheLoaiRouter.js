const express = require("express");
const router = express.Router();
const TheLoaiController = require('../controllers/TheLoaiController');

router.post('/create', TheLoaiController.createTheLoai)
router.put('/update/:id', TheLoaiController.updateTheLoai)
router.delete('/delete/:id', TheLoaiController.deleteTheLoai)
router.get('/getAll', TheLoaiController.getAllTheLoai)
router.get('/getDetail/:id', TheLoaiController.getDetailTheLoai)

module.exports = router