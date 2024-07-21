const ThongTinVeService = require('../services/ThongTinVeService');

const createThongTinVe = async (req, res) => {
    try {
        const { MaPhim, MaXC } = req.body;
        if (!MaPhim || !MaXC) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required',
            });
        }

        const result = await ThongTinVeService.createThongTinVe(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateThongTinVe = async (req, res) => {
    try {
        const ThongTinVeId = req.params.id;
        const data = req.body;
        if (!ThongTinVeId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ThongTinVeId is required',
            });
        }

        const result = await ThongTinVeService.updateThongTinVe(ThongTinVeId, data);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
};

const deleteThongTinVe = async (req, res) => {
    try {
        const ThongTinVeId = req.params.id;
        if (!ThongTinVeId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ThongTinVeId is required',
            });
        }
        const result = await ThongTinVeService.deleteThongTinVe(ThongTinVeId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
};

const getDetailThongTinVe = async (req, res) => {
    try {
        const ThongTinVeId = req.params.id;
        if (!ThongTinVeId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ThongTinVeId is required',
            });
        }
        const result = await ThongTinVeService.getDetailThongTinVe(ThongTinVeId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
};

const getAllThongTinVe = async (req, res) => {
    try {
        const result = await ThongTinVeService.getAllThongTinVe();
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
};

module.exports = {
    createThongTinVe,
    updateThongTinVe,
    deleteThongTinVe,
    getAllThongTinVe,
    getDetailThongTinVe,
};