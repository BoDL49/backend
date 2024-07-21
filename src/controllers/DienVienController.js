const DienVienService = require('../services/DienVienService');

const createDienvien = async (req, res) => {
    try {
        const { TenDienvien, MaPhim } = req.body;
        if (!TenDienvien || !MaPhim) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            });
        }


        const result = await DienVienService.createDienVien(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateDienvien = async (req, res) => {
    try {
        const DienVienId = req.params.id;
        const data = req.body;
        if (!DienVienId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The DienVienId is required'
            });
        }

        const result = await DienVienService.updateDienVien(DienVienId, data);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const deleteDienvien = async (req, res) => {
    try {
        const DienVienId = req.params.id;
        if (!DienVienId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The DienVienId is required'
            });
        }
        const result = await DienVienService.deleteDienVien(DienVienId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const getDetailDienvien = async (req, res) => {
    try {
        const { DienvienId } = req.params.id;
        if (!DienvienId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The DienvienId is required'
            });
        }
        const result = await DienVienService.getDetailDienVien(DienvienId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const getAllDienvien = async (req, res) => {
    try {
        const result = await DienVienService.getAllDienVien();
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

module.exports = {
    createDienvien,
    updateDienvien,
    deleteDienvien,
    getAllDienvien,
    getDetailDienvien
};
