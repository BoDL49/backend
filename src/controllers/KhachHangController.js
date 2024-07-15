const KhachHangService = require('../services/KhachHangService');

const createKhachhang = async (req, res) => {
    try {
        const { TenKH, SoDT, Ngaysinh, Gioitinh, Matk } = req.body;
        if (!TenKH || !SoDT || !Ngaysinh || !Gioitinh || !Matk) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            });
        } else if (SoDT.toString().length < 10 || SoDT.toString().length > 11) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The phone number must be 10 or 11 characters'
            });
        } else if (GioiTinh !== 'Nam' && GioiTinh !== 'Nữ') {
            return res.status(200).json({
                status: 'ERR',
                message: 'Gioi tinh phai la Nam hoac Nu'
            });
        }

        const today = new Date();
        const birthDate = new Date(Ngaysinh);
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (age < 18) {
            return {
                status: 'ERR',
                message: 'Ngay sinh phai lon hon hoac bang 18 tuoi'
            };
        }

        const result = await KhachHangService.createKhachHang(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateKhachhang = async (req, res) => {
    try {
        const khachhangId = req.params.id
        const data = req.body
        if (!nhanvienId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The khachhangId is required'
            })
        }
        const result = await KhachHangService.updateKhachHang(khachhangId, data);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const deleteKhachhang = async (req, res) => {
    try {
        const khachhangId = req.params.id
        if (!khachhangId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The khachhangId is required'
            })
        }
        const result = await KhachHangService.deleteKhachHang(khachhangId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};


const getDetailKhachhang = async (req, res) => {
    try {
        const khachhangId = req.params.id
        if (!khachhangId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The khachhangId is required'
            })
        }
        const result = await KhachHangService.getDetailKhachHang(khachhangId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const getAllKhachhang = async (req, res) => {
    try {
        const result = await KhachHangService.getAllKhachHang();
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};


module.exports = {
    createKhachhang,
    getDetailKhachhang,
    getAllKhachhang,
    updateKhachhang,
    deleteKhachhang
};