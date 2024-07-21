const ThongTinVeModel = require('../models/ThongTinVe');

const createThongTinVe = async (newThongTinVe) => {
    const { MaPhim, MaXC } = newThongTinVe;
    try {

        const createdThongTinVe = await ThongTinVeModel.create({ MaPhim, MaXC });

        if (createdThongTinVe) {
            return {
                status: 'OK',
                message: 'ThongTinVe created successfully',
                data: createdThongTinVe
            };
        }
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const updateThongTinVe = async (id, data) => {
    try {
        const checkThongTinVe = await ThongTinVeModel.findOne({ _id: id });
        if (checkThongTinVe === null) {
            return {
                status: "ERR",
                message: 'ThongTinVe is not defined'
            };
        }

        const updatedThongTinVe = await ThongTinVeModel.findByIdAndUpdate(id, data, { new: true });

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: updatedThongTinVe
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const deleteThongTinVe = async (id) => {
    try {
        const checkThongTinVe = await ThongTinVeModel.findOne({ _id: id });

        if (checkThongTinVe === null) {
            return {
                status: "ERR",
                message: 'ThongTinVe is not defined'
            };
        }

        await ThongTinVeModel.findByIdAndDelete(id);

        return {
            status: 'OK',
            message: 'DELETE THONGTINVE SUCCESS'
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getDetailThongTinVe = async (id) => {
    try {
        const ThongTinVe = await ThongTinVeModel.findOne({ _id: id });

        if (ThongTinVe === null) {
            return {
                status: "ERR",
                message: 'ThongTinVe is not defined'
            };
        }

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: ThongTinVe
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getAllThongTinVe = async () => {
    try {
        const allThongTinVe = await ThongTinVeModel.find();

        return {
            status: 'OK',
            message: 'GET ALL THONGTINVE SUCCESS',
            data: allThongTinVe
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};



module.exports = {
    createThongTinVe,
    updateThongTinVe,
    deleteThongTinVe,
    getDetailThongTinVe,
    getAllThongTinVe
};