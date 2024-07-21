const express = require("express");
const router = express.Router();
const ThongTinVeController = require('../controllers/ThongTinVeController');

router.post('/create', ThongTinVeController.createThongTinVe)
router.put('/update/:id', ThongTinVeController.updateThongTinVe)
router.delete('/delete/:id', ThongTinVeController.deleteThongTinVe)
router.get('/getAll', ThongTinVeController.getAllThongTinVe)
router.get('/getDetail/:id', ThongTinVeController.getDetailThongTinVe)

module.exports = router