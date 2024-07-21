const Khachhang = require('../models/KhachHang');
const KhachHangModel = require('../models/KhachHang');
const TaiKhoan = require('../models/TaiKhoan');

const createKhachHang = async (newKhachHang) => {
    const { TenKH, SoDT, Ngaysinh, Gioitinh, Matk } = newKhachHang;
    try {
        const taiKhoan = await TaiKhoan.findOne({ Matk: Matk });
        if (!taiKhoan) {
            return {
                status: 'OK',
                message: 'TaiKhoan not found'
            };
        }

        const checkKhachHang = await KhachHangModel.findOne({ Matk: Matk });
        if (checkKhachHang !== null) {
            return {
                status: 'OK',
                message: 'KhachHang is already taken'
            };
        }

        const createdKhachHang = await KhachHangModel.create({
            TenKH,
            SoDT,
            Ngaysinh,
            Gioitinh,
            Matk: Matk
        });

        if (createdKhachHang) {
            return {
                status: 'OK',
                message: 'KhachHang created successfully',
                data: createdKhachHang
            };
        }
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const updateKhachHang = async (id, data) => {
    try {
        const checkKhachHang = await KhachHangModel.findOne({ _id: id });
        if (checkKhachHang === null) {
            return {
                status: "OK",
                message: 'KhachHang is not defined'
            };
        }

        const updatedKhachHang = await KhachHangModel.findByIdAndUpdate(id, data, { new: true });

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: updatedKhachHang
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const deleteKhachHang = async (id) => {
    try {
        const checkKhachHang = await KhachHangModel.findOne({ _id: id });

        if (checkKhachHang === null) {
            return {
                status: "OK",
                message: 'KhachHang is not defined'
            };
        }

        await KhachHangModel.findByIdAndDelete(id);

        return {
            status: 'OK',
            message: 'DELETE KHACHHANG SUCCESS'
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getAllKhachHang = async () => {
    try {
        const allKhachHang = await KhachHangModel.find();

        return {
            status: 'OK',
            message: 'GET ALL KhachHang SUCCESS',
            data: allKhachHang
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getDetailKhachHang = async (Matk) => {
    try {
        const khachHang = await KhachHangModel.findOne({ Matk: Matk });

        if (khachHang === null) {
            return {
                status: "OK",
                message: 'KhachHang is not defined'
            };
        }

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: khachHang
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

module.exports = {
    createKhachHang,
    getAllKhachHang,
    updateKhachHang,
    deleteKhachHang,
    getDetailKhachHang
};
