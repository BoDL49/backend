const XuatChieuService = require('../services/XuatChieuService');

const createXuatChieu = async (req, res) => {
    try {
        const { MaRap, MaPhim, GioChieu, NgayChieu, SoLuongVe } = req.body;
        if (!MaRap || !MaPhim || !GioChieu || !NgayChieu || !SoLuongVe) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required',
            });
        }

        const result = await XuatChieuService.createXuatChieu(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateXuatChieu = async (req, res) => {
    try {
        const XuatChieuId = req.params.id;
        const data = req.body;
        if (!XuatChieuId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The XuatChieuId is required',
            });
        }

        const result = await XuatChieuService.updateXuatChieu(XuatChieuId, data);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
};

const deleteXuatChieu = async (req, res) => {
    try {
        const XuatChieuId = req.params.id;
        if (!XuatChieuId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The XuatChieuId is required',
            });
        }
        const result = await XuatChieuService.deleteXuatChieu(XuatChieuId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
};

const getDetailXuatChieu = async (req, res) => {
    try {
        const XuatChieuId = req.params.id;
        if (!XuatChieuId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The XuatChieuId is required',
            });
        }
        const result = await XuatChieuService.getDetailXuatChieu(XuatChieuId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
};

const getAllXuatChieu = async (req, res) => {
    try {
        const result = await XuatChieuService.getAllXuatChieu();
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
};

module.exports = {
    createXuatChieu,
    updateXuatChieu,
    deleteXuatChieu,
    getAllXuatChieu,
    getDetailXuatChieu,
};