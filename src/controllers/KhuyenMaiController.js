const KhuyenMaiService = require('../services/KhuyenMaiService');

const createKhuyenmai = async (req, res) => {
    try {
        const { TenKM, Ngaybatdau, Ngayketthuc, GiatriKM } = req.body;
        if (!TenKM || !Ngaybatdau || !Ngayketthuc || !GiatriKM) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            });
        }


        const result = await KhuyenMaiService.createKhuyenMai(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateKhuyenmai = async (req, res) => {
    try {
        const KhuyenMaiId = req.params.id;
        const data = req.body;
        if (!KhuyenMaiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The KhuyenMaiId is required'
            });
        }

        const result = await KhuyenMaiService.updateKhuyenMai(KhuyenMaiId, data);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const deleteKhuyenmai = async (req, res) => {
    try {
        const KhuyenMaiId = req.params.id;
        if (!KhuyenMaiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The KhuyenMaiId is required'
            });
        }
        const result = await KhuyenMaiService.deleteKhuyenMai(GioiHantuoiId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const getDetailKhuyenmai = async (req, res) => {
    try {
        const { KhuyenMaiId } = req.params.id;
        if (!KhuyenMaiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The KhuyenMaiId is required'
            });
        }
        const result = await KhuyenMaiService.getDetailKhuyenMai(KhuyenMaiId);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

const getAllKhuyenmai = async (req, res) => {
    try {
        const result = await KhuyenMaiService.getAllKhuyenMai();
        return res.status(200).json(result);
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
};

module.exports = {
    createKhuyenmai,
    updateKhuyenmai,
    deleteKhuyenmai,
    getAllKhuyenmai,
    getDetailKhuyenmai
};
