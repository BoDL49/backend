const PhimService = require('../services/PhimService');

const createphim = async (req, res) => {
    try {
        const { TenPhim, Thoiluong, Daodien, Ngaykhoichieu, MatL, Nuocsx, MaGH } = req.body;
        if (!TenPhim || !Thoiluong || !Daodien || !Ngaykhoichieu || MatL || Nuocsx || MaGH) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            });
        }


        const result = await PhimService.createPhim(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updatephim = async (req, res) => {
    try {
        const PhimId = req.params.id;
        const data = req.body;
        if (!PhimId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The PhimId is required'
            });
        }

        const result = await PhimService.updatePhim(PhimId, data);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const deletephim = async (req, res) => {
    try {
        const PhimId = req.params.id;
        if (!PhimId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The PhimId is required'
            });
        }
        const result = await PhimService.deletePhim(PhimId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const getDetailphim = async (req, res) => {
    try {
        const { PhimId } = req.params.id;
        if (!PhimId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The PhimId is required'
            });
        }
        const result = await PhimService.getDetailPhim(PhimId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const getAllphim = async (req, res) => {
    try {
        const result = await PhimService.getAllPhim();
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

module.exports = {
    createphim,
    updatephim,
    deletephim,
    getAllphim,
    getDetailphim
};
