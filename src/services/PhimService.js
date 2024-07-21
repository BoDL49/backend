const PhimModel = require('../models/Phim');
const GioiHanTuoiModel = require('../models/GioiHanTuoi');
const TheLoaiModel = require('../models/TheLoai');

const createPhim = async (newPhim) => {
    const { TenPhim, Thoiluong, Daodien, Ngaykhoichieu, MatL, Nuocsx, MaGH } = newPhim;
    try {
        const CheckTenPhim = await PhimModel.findOne({ TenPhim: TenPhim });
        if (CheckTenPhim !== null) {
            return {
                status: 'OK',
                message: 'TenPhim is already taken'
            };
        }

        const MaGH = await GioiHanTuoiModel.findOne({ MaGH: MaGH });
        if (MaGH === null) {
            return {
                status: 'OK',
                message: 'MaGH is not defined'
            };
        }

        const Matl = await TheLoaiModel.findOne({ MatL: MatL });
        if (Matl === null) {
            return {
                status: 'OK',
                message: 'MatL is not defined'
            };
        }


        const createdPhim = await PhimModel.create({
            TenPhim, Thoiluong, Daodien, Ngaykhoichieu, MatL, Nuocsx, MaGH
        });

        if (createdPhim) {
            return {
                status: 'OK',
                message: 'Phim created successfully',
                data: createdPhim
            };
        }
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const updatePhim = async (id, data) => {
    try {
        const checkPhim = await PhimModel.findOne({ _id: id });
        if (checkPhim === null) {
            return {
                status: "OK",
                message: 'Phim is not defined'
            };
        }

        const updatedPhim = await PhimModel.findByIdAndUpdate(id, data, { new: true });

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: updatedPhim
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const deletePhim = async (id) => {
    try {
        const checkPhim = await PhimModel.findOne({ _id: id });

        if (checkPhim === null) {
            return {
                status: "OK",
                message: 'Phim is not defined'
            };
        }

        await PhimModel.findByIdAndDelete(id);

        return {
            status: 'OK',
            message: 'DELETE PHIM SUCCESS'
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getDetailPhim = async (id) => {
    try {
        const Phim = await PhimModel.findOne({ _id: id });

        if (Phim === null) {
            return {
                status: "OK",
                message: 'Phim is not defined'
            };
        }

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: Phim
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};

const getAllPhim = async () => {
    try {
        const allPhim = await PhimModel.find();

        return {
            status: 'OK',
            message: 'GET ALL PHIM SUCCESS',
            data: allPhim
        };
    } catch (err) {
        return {
            status: 'ERR',
            message: err.message
        };
    }
};



module.exports = {
    createPhim,
    updatePhim,
    deletePhim,
    getDetailPhim,
    getAllPhim
};
