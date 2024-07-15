const NhanVienService = require('../services/NhanVienService');

const createNhanvien = async (req, res) => {
    try {
        const { HoTenNV, SoDT, DiaChi, Chucvu, GioiTinh, NgaySinh, Matk } = req.body;
        if (!HoTenNV || !SoDT || !DiaChi || !Chucvu || !GioiTinh || !NgaySinh || !Matk) {
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
        const birthDate = new Date(NgaySinh);
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

        const result = await NhanVienService.createNhanVien(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateNhanvien = async (req, res) => {
    try {
        const nhanvienId = req.params.id
        const data = req.body
        if (!nhanvienId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The nhanvienId is required'
            })
        }
        const result = await NhanVienService.updateNhanVien(nhanvienId, data);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const deleteNhanvien = async (req, res) => {
    try {
        const nhanvienId = req.params.id
        if (!nhanvienId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The nhanvienId is required'
            })
        }
        const result = await NhanVienService.deleteNhanVien(nhanvienId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};


const getDetailNhanvien = async (req, res) => {
    try {
        const nhanvienId = req.params.id
        if (!nhanvienId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The nhanvienId is required'
            })
        }
        const result = await NhanVienService.getDetailNhanVien(nhanvienId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const getAllNhanvien = async (req, res) => {
    try {
        const result = await NhanVienService.getAllNhanVien();
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};


module.exports = {
    createNhanvien,
    getDetailNhanvien,
    getAllNhanvien,
    updateNhanvien,
    deleteNhanvien
};