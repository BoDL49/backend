const RapPhimModel = require('../models/Phim');
const NhanVienModel = require('../models/NhanVien');

const createRapPhim = async (newRapPhim) => {
    const { TenRap, Soluongghe, ManV } = newPhim;
    try {
        const CheckTenRap = await RapPhimModel.findOne({ TenRap: TenRap });
        if (CheckTenRap !== null) {
            return {
                status: 'OK',
                message: 'TenRap is already taken'
            };
        }

        const MaNV = await NhanVienModel.findOne({ MaNV: MaNV });
        if (MaGH === null) {
            return {
                status: 'OK',
                message: 'MaNV is not defined'
            };
        }

        const createdRapPhim = await RapPhimModel.create({
            TenRap, Soluongghe, ManV
        });

        if (createdRapPhim) {
            return {
                status: 'OK',
                message: 'RapPhim created successfully',
                data: createdRapPhim
            };
        }
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const updateRapPhim = async (id, data) => {
    try {
        const checkRapPhim = await RapPhimModel.findOne({ _id: id });
        if (checkRapPhim === null) {
            return {
                status: "OK",
                message: 'RapPhim is not defined'
            };
        }

        const updatedRapPhim = await RapPhimModel.findByIdAndUpdate(id, data, { new: true });

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: updatedRapPhim
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const deleteRapPhim = async (id) => {
    try {
        const checkRapPhim = await RapPhimModel.findOne({ _id: id });

        if (checkRapPhim === null) {
            return {
                status: "OK",
                message: 'RapPhim is not defined'
            };
        }

        await RapPhimModel.findByIdAndDelete(id);

        return {
            status: 'OK',
            message: 'DELETE RAPPHIM SUCCESS'
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getDetailRapPhim = async (id) => {
    try {
        const RapPhim = await RapPhimModel.findOne({ _id: id });

        if (RapPhim === null) {
            return {
                status: "OK",
                message: 'RapPhim is not defined'
            };
        }

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: RapPhim
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getAllRapPhim = async () => {
    try {
        const allRapPhim = await RapPhimModel.find();

        return {
            status: 'OK',
            message: 'GET ALL RAPPHIM SUCCESS',
            data: allRapPhim
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};



module.exports = {
    createRapPhim,
    updateRapPhim,
    deleteRapPhim,
    getDetailRapPhim,
    getAllRapPhim
};
