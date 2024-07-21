const GioiHanTuoiModel = require('../models/GioiHanTuoi');
const GioiHanTuoiController = require('../controllers/GioiHanTuoiController');

const createGioiHanTuoi = async (newGioiHanTuoi) => {
    const { Dotuoi } = newGioiHanTuoi;
    try {
        const checkDoTuoi = await GioiHanTuoiModel.findOne({ Dotuoi: Dotuoi });
        if (checkDoTuoi !== null) {
            return {
                status: 'OK',
                message: 'DoTuoi is already taken'
            };
        }

        const createdGioiHanTuoi = await GioiHanTuoiModel.create({
            Dotuoi
        });

        if (createdGioiHanTuoi) {
            return {
                status: 'OK',
                message: 'Dotuoi created successfully',
                data: createdGioiHanTuoi
            };
        }
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const updateGioiHanTuoi = async (id, data) => {
    try {
        const checkDoTuoi = await GioiHanTuoiModel.findOne({ _id: id });
        if (checkDoTuoi === null) {
            return {
                status: "OK",
                message: 'DoTuoi is not defined'
            };
        }

        const updatedDoTuoi = await GioiHanTuoiModel.findByIdAndUpdate(id, data, { new: true });

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: updatedDoTuoi
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const deleteGioiHanTuoi = async (id) => {
    try {
        const checkDoTuoi = await GioiHanTuoiModel.findOne({ _id: id });

        if (checkDoTuoi === null) {
            return {
                status: "OK",
                message: 'DoTuoi is not defined'
            };
        }

        await GioiHanTuoiModel.findByIdAndDelete(id);

        return {
            status: 'OK',
            message: 'DELETE DOTUOI SUCCESS'
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getDetailGioiHanTuoi = async (id) => {
    try {
        const DoTuoi = await GioiHanTuoiModel.findOne({ _id: id });

        if (DoTuoi === null) {
            return {
                status: "OK",
                message: 'DoTuoi is not defined'
            };
        }

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: DoTuoi
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getAllGioiHanTuoi = async () => {
    try {
        const allGioiHanTuoi = await GioiHanTuoiModel.find();

        return {
            status: 'OK',
            message: 'GET ALL DOTUOI SUCCESS',
            data: allGioiHanTuoi
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};



module.exports = {
    createGioiHanTuoi,
    updateGioiHanTuoi,
    deleteGioiHanTuoi,
    getDetailGioiHanTuoi,
    getAllGioiHanTuoi
};
