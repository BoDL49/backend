const XuatChieuModel = require('../models/XuatChieu');

const createXuatChieu = async (newXuatChieu) => {
    const { MaRap, MaPhim, GioChieu, NgayChieu, SoLuongVe } = newXuatChieu;
    try {

        const createdXuatChieu = await XuatChieuModel.create({ MaRap, MaPhim, GioChieu, NgayChieu, SoLuongVe });

        if (createdXuatChieu) {
            return {
                status: 'OK',
                message: 'XuatChieu created successfully',
                data: createdXuatChieu
            };
        }
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const updateXuatChieu = async (id, data) => {
    try {
        const checkXuatChieu = await XuatChieuModel.findOne({ _id: id });
        if (checkXuatChieu === null) {
            return {
                status: "ERR",
                message: 'XuatChieu is not defined'
            };
        }

        const updatedXuatChieu = await XuatChieuModel.findByIdAndUpdate(id, data, { new: true });

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: updatedXuatChieu
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const deleteXuatChieu = async (id) => {
    try {
        const checkXuatChieu = await XuatChieuModel.findOne({ _id: id });

        if (checkXuatChieu === null) {
            return {
                status: "ERR",
                message: 'XuatChieu is not defined'
            };
        }

        await XuatChieuModel.findByIdAndDelete(id);

        return {
            status: 'OK',
            message: 'DELETE XUATCHIEU SUCCESS'
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getDetailXuatChieu = async (id) => {
    try {
        const XuatChieu = await XuatChieuModel.findOne({ _id: id });

        if (XuatChieu === null) {
            return {
                status: "ERR",
                message: 'XuatChieu is not defined'
            };
        }

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: XuatChieu
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getAllXuatChieu = async () => {
    try {
        const allXuatChieu = await XuatChieuModel.find();

        return {
            status: 'OK',
            message: 'GET ALL XUATCHIEU SUCCESS',
            data: allXuatChieu
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};



module.exports = {
    createXuatChieu,
    updateXuatChieu,
    deleteXuatChieu,
    getDetailXuatChieu,
    getAllXuatChieu
};