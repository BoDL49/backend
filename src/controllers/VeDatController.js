const VeDaDatService = require('../services/VeDaDatService');

const createVeDaDat = async (req, res) => {
    try {
        const { MatK, Gia, NgayDat, ManV, Ghe } = req.body;
        if (!MatK || !Gia || !NgayDat || !ManV || !Ghe) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required',
            });
        }

        const result = await VeDaDatService.createVeDaDat(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateVeDaDat = async (req, res) => {
    try {
        const VeDaDatId = req.params.id;
        const data = req.body;
        if (!VeDaDatId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The VeDaDatId is required',
            });
        }

        const result = await VeDaDatService.updateVeDaDat(VeDaDatId, data);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
};

const deleteVeDaDat = async (req, res) => {
    try {
        const VeDaDatId = req.params.id;
        if (!VeDaDatId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The VeDaDatId is required',
            });
        }
        const result = await VeDaDatService.deleteVeDaDat(VeDaDatId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
};

const getDetailVeDaDat = async (req, res) => {
    try {
        const VeDaDatId = req.params.id;
        if (!VeDaDatId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The VeDaDatId is required',
            });
        }
        const result = await VeDaDatService.getDetailVeDaDat(VeDaDatId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
};

const getAllVeDaDat = async (req, res) => {
    try {
        const result = await VeDaDatService.getAllVeDaDat();
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
};

module.exports = {
    createVeDaDat,
    updateVeDaDat,
    deleteVeDaDat,
    getAllVeDaDat,
    getDetailVeDaDat,
};