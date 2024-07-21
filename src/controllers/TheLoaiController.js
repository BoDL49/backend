const TheLoaiService = require('../services/TheLoaiService');

const createTheLoai = async (req, res) => {
    try {
        const { TenTL } = req.body;
        if (!TenTL) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required',
            });
        }

        const result = await TheLoaiService.createTheLoai(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateTheLoai = async (req, res) => {
    try {
        const TheLoaiId = req.params.id;
        const data = req.body;
        if (!TheLoaiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The TheLoaiId is required',
            });
        }

        const result = await TheLoaiService.updateTheLoai(TheLoaiId, data);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
};

const deleteTheLoai = async (req, res) => {
    try {
        const TheLoaiId = req.params.id;
        if (!TheLoaiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The TheLoaiId is required',
            });
        }
        const result = await TheLoaiService.deleteTheLoai(TheLoaiId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
};

const getDetailTheLoai = async (req, res) => {
    try {
        const TheLoaiId = req.params.id;
        if (!TheLoaiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The TheLoaiId is required',
            });
        }
        const result = await TheLoaiService.getDetailTheLoai(TheLoaiId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
};

const getAllTheLoai = async (req, res) => {
    try {
        const result = await TheLoaiService.getAllTheLoai();
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
};

module.exports = {
    createTheLoai,
    updateTheLoai,
    deleteTheLoai,
    getAllTheLoai,
    getDetailTheLoai,
};