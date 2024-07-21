const express = require("express");
const router = express.Router();
const userController = require('../controllers/UserController');
const { authMiddleware, authUserMiddleware } = require("../middleware/authMiddleware");

router.post('/signup', userController.createUser)
router.post('/signin', userController.loginUser)
router.post('/logout', userController.logoutUser)
router.put('/updateuser/:id', authMiddleware, userController.updateUser)
router.delete('/deleteuser/:id', authMiddleware, userController.deleteUser)
router.get('/getAll', userController.getAllUser)
router.get('/getDetail/:id', authUserMiddleware, userController.getDetailUser)
router.post('/refreshToken', userController.refreshToken)

module.exports = router
