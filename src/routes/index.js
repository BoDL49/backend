const nhanvienRouter = require('./nhanvienRouter')
const UserRouter = require('./userRouter')
const khachhangRouter = require('./khachhangRouter')
const DienVienRouter = require('./DienVienRouter')
const GioiHanTuoiRouter = require('./GioiHanTuoiRouter')
const KhuyenMaiRouter = require('./KhuyenMaiRouter')
const PhimRouter = require('./PhimRouter')

const routes = (app) => {
    app.use('/api/user', UserRouter)
    app.use('/api/nhanvien', nhanvienRouter)
    app.use('/api/khachhang', khachhangRouter)
    app.use('/api/dienvien', DienVienRouter)
    app.use('/api/gioihantuoi', GioiHanTuoiRouter)
    app.use('/api/khuyenmai', KhuyenMaiRouter)
    app.use('/api/phim', PhimRouter)
}

module.exports = routes