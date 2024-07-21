const NhanVien = require('../models/NhanVien');
const UserService = require('../services/UserService');
const TaiKhoan = require('../models/TaiKhoan');

const createNhanVien = async (newNhanVien) => {
    const { HoTenNV, SoDT, DiaChi, Chucvu, GioiTinh, NgaySinh, Matk } = newNhanVien;
    try {
        const taiKhoan = await TaiKhoan.findOne({ Matk: Matk })
        if (!taiKhoan) {
            return {
                status: 'ERR',
                message: 'TaiKhoan not found'
            };
        }

        const checkNhanvien = await NhanVien.findOne({ Matk: taiKhoan.Matk })
        if (checkNhanvien !== null) {
            return {
                status: 'ERR',
                message: 'NhanVien is already taken'
            };
        }

        const createNhanvien = await NhanVien.create({
            HoTenNV,
            SoDT,
            DiaChi,
            Chucvu,
            GioiTinh,
            NgaySinh,
            Matk
        });

        const updateTaiKhoan = await UserService.updateUser(taiKhoan._id, { MaNV: createNhanvien.MaNV });

        if (createNhanvien && updateTaiKhoan.status === 'OK') {
            return {
                status: 'OK',
                message: 'NhanVien created successfully',
                data: createNhanvien
            }
        } else {
            return {
                status: 'ERR',
                message: 'Error updating TaiKhoan'
            }
        }
    }
    catch (err) {
        return {
            status: 'ERR',
            message: err.message
        }
    }
};


const updateNhanVien = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkNhanvien = await NhanVien.findOne({ _id: id })

            if (checkNhanvien === null) {
                resolve({
                    status: "OK",
                    message: 'Nhanvien is not defined'
                });
            }

            const updatedNhanVien = await NhanVien.findByIdAndUpdate(id, data, { new: true })


            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedNhanVien
            });
        } catch (err) {
            reject(err);
        }
    });
};

const deleteNhanVien = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkNhanVien = await NhanVien.findOne({ _id: id });

            if (checkNhanVien === null) {
                resolve({
                    status: "OK",
                    message: 'NhanVien is not defined'
                });
            }

            await NhanVien.findByIdAndDelete(id)


            resolve({
                status: 'OK',
                message: 'DELETE USER SUCCESS'
            });
        } catch (err) {
            reject(err);
        }
    });
};

const getAllNhanVien = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const AllNhanVien = await NhanVien.find()


            resolve({
                status: 'OK',
                message: 'GET ALL USER SUCCESS',
                data: AllNhanVien
            });
        } catch (err) {
            reject(err);
        }
    });
};

const getDetailNhanVien = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const Nhanvien = await NhanVien.findOne({ _id: id });

            if (user === null) {
                resolve({
                    status: "OK",
                    message: 'Nhanvien is not defined'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: Nhanvien
            });
        } catch (err) {
            reject(err);
        }
    });
};



module.exports = {
    createNhanVien,
    getAllNhanVien,
    updateNhanVien,
    deleteNhanVien,
    getDetailNhanVien
};