const DienVienModel = require('../models/DienVien');
const DienVienController = require('../controllers/DienVienController');
const Phim = require('../models/Phim');

const createDienVien = async (newDienVien) => {
    const { TenDienvien, MaPhim } = newDienVien;
    try {
        const CheckMaPhim = Phim.findOne({ MaPhim: MaPhim });
        if (!CheckMaPhim) {
            return res.status(200).json({
                status: 'ERR',
                message: 'MaPhim is not defined'
            });
        }

        const checkDienVien = await DienVienModel.findOne({ TenDienvien: TenDienvien });
        if (checkDienVien !== null) {
            return {
                status: 'OK',
                message: 'DienVien is already taken'
            };
        }

        const createdDienVien = await DienVienModel.create({
            TenDienvien, MaPhim
        });

        if (createdDienVien) {
            return {
                status: 'OK',
                message: 'DienVien created successfully',
                data: createdDienVien
            };
        }
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const updateDienVien = async (id, data) => {
    try {
        const checkDienVien = await DienVienModel.findOne({ _id: id });
        if (checkDienVien === null) {
            return {
                status: "OK",
                message: 'DienVien is not defined'
            };
        }

        const updatedDienVien = await DienVienModel.findByIdAndUpdate(id, data, { new: true });

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: updatedDienVien
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const deleteDienVien = async (id) => {
    try {
        const checkDienVien = await DienVienModel.findOne({ _id: id });

        if (checkDienVien === null) {
            return {
                status: "OK",
                message: 'DienVien is not defined'
            };
        }

        await DienVienModel.findByIdAndDelete(id);

        return {
            status: 'OK',
            message: 'DELETE DIENVIEN SUCCESS'
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getDetailDienVien = async (Id) => {
    try {
        const DienVien = await DienVienModel.findOne({ _id: Id });

        if (DienVien === null) {
            return {
                status: "OK",
                message: 'DienVien is not defined'
            };
        }

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: DienVien
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getAllDienVien = async () => {
    try {
        const allDienVien = await DienVienModel.find();

        return {
            status: 'OK',
            message: 'GET ALL DienVien SUCCESS',
            data: allDienVien
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};



module.exports = {
    createDienVien,
    updateDienVien,
    deleteDienVien,
    getDetailDienVien,
    getAllDienVien
};
