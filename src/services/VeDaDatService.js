const VeDaDatModel = require('../models/VeDaDat');

const createVeDaDat = async (newVeDaDat) => {
    const { MatK, Gia, NgayDat, ManV, Ghe } = newVeDaDat;
    try {

        const createdVeDaDat = await VeDaDatModel.create({ MatK, Gia, NgayDat, ManV, Ghe });

        if (createdVeDaDat) {
            return {
                status: 'OK',
                message: 'VeDaDat created successfully',
                data: createdVeDaDat
            };
        }
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const updateVeDaDat = async (id, data) => {
    try {
        const checkVeDaDat = await VeDaDatModel.findOne({ _id: id });
        if (checkVeDaDat === null) {
            return {
                status: "ERR",
                message: 'VeDaDat is not defined'
            };
        }

        const updatedVeDaDat = await VeDaDatModel.findByIdAndUpdate(id, data, { new: true });

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: updatedVeDaDat
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const deleteVeDaDat = async (id) => {
    try {
        const checkVeDaDat = await VeDaDatModel.findOne({ _id: id });

        if (checkVeDaDat === null) {
            return {
                status: "ERR",
                message: 'VeDaDat is not defined'
            };
        }

        await VeDaDatModel.findByIdAndDelete(id);

        return {
            status: 'OK',
            message: 'DELETE VEDAT SUCCESS'
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getDetailVeDaDat = async (id) => {
    try {
        const VeDaDat = await VeDaDatModel.findOne({ _id: id });

        if (VeDaDat === null) {
            return {
                status: "ERR",
                message: 'VeDaDat is not defined'
            };
        }

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: VeDaDat
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getAllVeDaDat = async () => {
    try {
        const allVeDaDat = await VeDaDatModel.find();

        return {
            status: 'OK',
            message: 'GET ALL VEDAT SUCCESS',
            data: allVeDaDat
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};



module.exports = {
    createVeDaDat,
    updateVeDaDat,
    deleteVeDaDat,
    getDetailVeDaDat,
    getAllVeDaDat
};