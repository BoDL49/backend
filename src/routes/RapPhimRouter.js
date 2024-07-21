const express = require("express");
const router = express.Router();
const RapPhimController = require('../controllers/RapPhimController');

router.post('/create', RapPhimController.createRapphim)
router.put('/update/:id', RapPhimController.updateRapphim)
router.delete('/delete/:id', RapPhimController.deleteRapphim)
router.get('/getAll', RapPhimController.getAllRapphim)
router.get('/getDetail/:id', RapPhimController.getDetailRapphim)

module.exports = router
