const KhachHang = require('../models/KhachHang');
const UserService = require('../services/UserService');
const TaiKhoan = require('../models/TaiKhoan');

const createKhachHang = async (newKhachHang) => {
    const { TenKH, SoDT, Ngaysinh, Gioitinh, Matk } = newKhachHang;
    try {
        const taiKhoan = await TaiKhoan.findOne({ Matk: Matk })
        if (!taiKhoan) {
            return {
                status: 'ERR',
                message: 'TaiKhoan not found'
            };
        }

        const checkKhachHang = await KhachHang.findOne({ Matk: taiKhoan._id })
        if (checkKhachHang !== null) {
            return {
                status: 'ERR',
                message: 'KhachHang is already taken'
            };
        }

        const createKhachHang = await KhachHang.create({
            TenKH,
            SoDT,
            Ngaysinh,
            Gioitinh,
            Matk: taiKhoan._id
        });

        if (createKhachHang) {
            return {
                status: 'OK',
                message: 'KhachHang created successfully',
                data: createKhachHang
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


const updateKhachHang = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkKhachHang = await KhachHang.findOne({ _id: id })

            if (checkKhachHang === null) {
                resolve({
                    status: "OK",
                    message: 'KhachHang is not defined'
                });
            }

            const updatedKhachHang = await KhachHang.findByIdAndUpdate(id, data, { new: true })


            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedKhachHang
            });
        } catch (err) {
            reject(err);
        }
    });
};

const deleteKhachHang = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkKhachHang = await KhachHang.findOne({ _id: id });

            if (checkKhachHang === null) {
                resolve({
                    status: "OK",
                    message: 'KhachHang is not defined'
                });
            }

            await KhachHang.findByIdAndDelete(id)


            resolve({
                status: 'OK',
                message: 'DELETE KHACHHANG SUCCESS'
            });
        } catch (err) {
            reject(err);
        }
    });
};

const getAllKhachHang = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const AllKhachHang = await KhachHang.find()


            resolve({
                status: 'OK',
                message: 'GET ALL USER SUCCESS',
                data: AllKhachHang
            });
        } catch (err) {
            reject(err);
        }
    });
};

const getDetailKhachHang = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const KhachHang = await KhachHang.findOne({ _id: id });

            if (KhachHang === null) {
                resolve({
                    status: "OK",
                    message: 'KhachHang is not defined'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: KhachHang
            });
        } catch (err) {
            reject(err);
        }
    });
};



module.exports = {
    createKhachHang,
    getAllKhachHang,
    updateKhachHang,
    deleteKhachHang,
    getDetailKhachHang
};