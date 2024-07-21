const nhanvienRouter = require('./nhanvienRouter')
const UserRouter = require('./userRouter')
const khachhangRouter = require('./khachhangRouter')

const routes = (app) => {
    app.use('/api/user', UserRouter)
    app.use('/api/nhanvien', nhanvienRouter)
    app.use('/api/khachhang', khachhangRouter)
}

module.exports = routes