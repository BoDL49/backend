const KhuyenMaiModel = require('../models/KhuyenMai');
const KhuyenMaiController = require('../controllers/KhuyenMaiController');

const createKhuyenMai = async (newKhuyenMai) => {
    const { TenKM, Ngaybatdau, Ngayketthuc, GiatriKM } = newKhuyenMai;
    try {
        const CheckTenKM = await KhuyenMaiModel.findOne({ TenKM: TenKM });
        if (CheckTenKM !== null) {
            return {
                status: 'OK',
                message: 'TenKM is already taken'
            };
        }

        const createdKhuyenMai = await KhuyenMaiModel.create({
            TenKM, Ngaybatdau, Ngayketthuc, GiatriKM
        });

        if (createdKhuyenMai) {
            return {
                status: 'OK',
                message: 'KhuyenMai created successfully',
                data: createdKhuyenMai
            };
        }
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const updateKhuyenMai = async (id, data) => {
    try {
        const checkKhuyenMai = await KhuyenMaiModel.findOne({ _id: id });
        if (checkKhuyenMai === null) {
            return {
                status: "OK",
                message: 'KhuyenMai is not defined'
            };
        }

        const updatedKhuyenMai = await KhuyenMaiModel.findByIdAndUpdate(id, data, { new: true });

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: updatedKhuyenMai
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const deleteKhuyenMai = async (id) => {
    try {
        const checkKhuyenMai = await KhuyenMaiModel.findOne({ _id: id });

        if (checkKhuyenMai === null) {
            return {
                status: "OK",
                message: 'KhuyenMai is not defined'
            };
        }

        await KhuyenMaiModel.findByIdAndDelete(id);

        return {
            status: 'OK',
            message: 'DELETE KHUYENMAI SUCCESS'
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getDetailKhuyenMai = async (id) => {
    try {
        const KhuyenMai = await KhuyenMaiModel.findOne({ _id: id });

        if (KhuyenMai === null) {
            return {
                status: "OK",
                message: 'KhuyenMai is not defined'
            };
        }

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: KhuyenMai
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getAllKhuyenMai = async () => {
    try {
        const allKhuyenMai = await KhuyenMaiModel.find();

        return {
            status: 'OK',
            message: 'GET ALL KHUYENMAI SUCCESS',
            data: allKhuyenMai
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};



module.exports = {
    createKhuyenMai,
    updateKhuyenMai,
    deleteKhuyenMai,
    getDetailKhuyenMai,
    getAllKhuyenMai
};
