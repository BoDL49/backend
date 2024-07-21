const TheLoaiModel = require('../models/TheLoai');

const createTheLoai = async (newTheLoai) => {
    const { TenTL } = newTheLoai;
    try {
        const CheckTenTL = await TheLoaiModel.findOne({ TenTL: TenTL });
        if (CheckTenTL !== null) {
            return {
                status: 'ERR',
                message: 'TenTL is already taken'
            };
        }

        const createdTheLoai = await TheLoaiModel.create({ TenTL });

        if (createdTheLoai) {
            return {
                status: 'OK',
                message: 'TheLoai created successfully',
                data: createdTheLoai
            };
        }
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const updateTheLoai = async (id, data) => {
    try {
        const checkTheLoai = await TheLoaiModel.findOne({ _id: id });
        if (checkTheLoai === null) {
            return {
                status: "ERR",
                message: 'TheLoai is not defined'
            };
        }

        const updatedTheLoai = await TheLoaiModel.findByIdAndUpdate(id, data, { new: true });

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: updatedTheLoai
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const deleteTheLoai = async (id) => {
    try {
        const checkTheLoai = await TheLoaiModel.findOne({ _id: id });

        if (checkTheLoai === null) {
            return {
                status: "ERR",
                message: 'TheLoai is not defined'
            };
        }

        await TheLoaiModel.findByIdAndDelete(id);

        return {
            status: 'OK',
            message: 'DELETE THELOAI SUCCESS'
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getDetailTheLoai = async (id) => {
    try {
        const TheLoai = await TheLoaiModel.findOne({ _id: id });

        if (TheLoai === null) {
            return {
                status: "ERR",
                message: 'TheLoai is not defined'
            };
        }

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: TheLoai
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getAllTheLoai = async () => {
    try {
        const allTheLoai = await TheLoaiModel.find();

        return {
            status: 'OK',
            message: 'GET ALL THELOAI SUCCESS',
            data: allTheLoai
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};



module.exports = {
    createTheLoai,
    updateTheLoai,
    deleteTheLoai,
    getDetailTheLoai,
    getAllTheLoai
};