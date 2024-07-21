const express = require("express");
const router = express.Router();
const VeDaDatController = require('../controllers/VeDaDatController');

router.post('/create', VeDaDatController.createVeDaDat)
router.put('/update/:id', VeDaDatController.updateVeDaDat)
router.delete('/delete/:id', VeDaDatController.deleteVeDaDat)
router.get('/getAll', VeDaDatController.getAllVeDaDat)
router.get('/getDetail/:id', VeDaDatController.getDetailVeDaDat)

module.exports = router