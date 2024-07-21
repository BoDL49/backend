const express = require("express");
const router = express.Router();
const PhimController = require('../controllers/PhimController');

router.post('/create', PhimController.createphim)
router.put('/update/:id', PhimController.updatephim)
router.delete('/delete/:id', PhimController.deletephim)
router.get('/getAll', PhimController.getAllphim)
router.get('/getDetail/:id', PhimController.getDetailphim)

module.exports = router
