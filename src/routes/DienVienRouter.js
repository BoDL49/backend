const express = require("express");
const router = express.Router();
const DienVienController = require('../controllers/DienVienController');

router.post('/create', DienVienController.createDienvien)
router.put('/update/:id', DienVienController.updateDienvien)
router.delete('/delete/:id', DienVienController.deleteDienvien)
router.get('/getAll', DienVienController.getAllDienvien)
router.get('/getDetail/:id', DienVienController.getDetailDienvien)

module.exports = router
