const GioiHanTuoiService = require('../services/GioiHanTuoiService');

const createGioiHantuoi = async (req, res) => {
    try {
        const { TenDienvien, MaPhim } = req.body;
        if (!TenDienvien || !MaPhim) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            });
        }


        const result = await GioiHanTuoiService.createGioiHanTuoi(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateGioiHantuoi = async (req, res) => {
    try {
        const GioiHantuoiId = req.params.id;
        const data = req.body;
        if (!GioiHantuoiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The GioiHantuoiId is required'
            });
        }

        const result = await GioiHanTuoiService.updateGioiHanTuoi(GioiHantuoiId, data);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const deleteGioiHantuoi = async (req, res) => {
    try {
        const GioiHantuoiId = req.params.id;
        if (!GioiHantuoiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The GioiHantuoiId is required'
            });
        }
        const result = await GioiHanTuoiService.deleteGioiHanTuoi(GioiHantuoiId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const getDetailGioiHantuoi = async (req, res) => {
    try {
        const { GioiHantuoiId } = req.params.id;
        if (!GioiHantuoiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The GioiHantuoiId is required'
            });
        }
        const result = await GioiHanTuoiService.getDetailGioiHanTuoi(GioiHantuoiId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const getAllGioiHantuoi = async (req, res) => {
    try {
        const result = await GioiHanTuoiService.getAllGioiHanTuoi();
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

module.exports = {
    createGioiHantuoi,
    updateGioiHantuoi,
    deleteGioiHantuoi,
    getAllGioiHantuoi,
    getDetailGioiHantuoi
};
