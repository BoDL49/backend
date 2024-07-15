const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authMiddleware = (req, res) => {
    const token = req.headers.token.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
        if (err) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The authemtication'
            })
        }
        const { payload } = user
        if (payload?.MaNV != null) {
            next()
        }
        else {
            return res.status(404).json({
                status: 'ERR',
                message: 'The authemtication'
            })
        }
    })
}

const authUserMiddleware = (req, res) => {
    const token = req.headers.token.split(' ')[1]
    const userId = req.params.id
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
        if (err) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The authemtication'
            })
        }
        const { payload } = user
        if (payload?.MaNV !== null || payload?.id === userId) {
            next()
        }
        else {
            return res.status(404).json({
                status: 'ERR',
                message: 'The authemtication'
            })
        }
    })
}

const authAdminMiddleware = (req, res) => {
    const token = req.headers.token.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
        if (err) {
            return res.status(404).json({
                status: 'ERR',
                message: err.message
            })
        }
        const { payload } = user
        const MaNV = payload?.MaNV
        console.log(MaNV)
        const FindNhanvien = NhanVien.findOne({ _id: MaNV });
        console.log(findNhanvien)
        if (FindNhanvien?.Chucvu === 'Admin') {
            next()
        }
        else {
            return res.status(404).json({
                status: 'ERR',
                message: 'The authemtication'
            })
        }
    })
}

module.exports = {
    authMiddleware,
    authUserMiddleware,
    authAdminMiddleware
}