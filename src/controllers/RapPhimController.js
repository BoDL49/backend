const RapPhimService = require('../services/PhimService');

const createRapphim = async (req, res) => {
    try {
        const { TenRap, Soluongghe, ManV } = req.body;
        if (!TenRap || !Soluongghe || !ManV) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            });
        }


        const result = await RapPhimService.createRapPhim(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateRapphim = async (req, res) => {
    try {
        const RapPhimId = req.params.id;
        const data = req.body;
        if (!RapPhimId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The RapPhimId is required'
            });
        }

        const result = await RapPhimService.updateRapPhim(RapPhimId, data);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const deleteRapphim = async (req, res) => {
    try {
        const RapPhimId = req.params.id;
        if (!RapPhimId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The RapPhimId is required'
            });
        }
        const result = await RapPhimService.deleteRapPhim(RapPhimId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const getDetailRapphim = async (req, res) => {
    try {
        const { RapPhimId } = req.params.id;
        if (!RapPhimId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The RapPhimId is required'
            });
        }
        const result = await RapPhimService.getDetailRapPhim(RapPhimId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const getAllRapphim = async (req, res) => {
    try {
        const result = await PhimService.getAllRapPhim();
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

module.exports = {
    createRapphim,
    updateRapphim,
    deleteRapphim,
    getAllRapphim,
    getDetailRapphim
};
