const mongoose = require('mongoose');

const NhanvienSchema = new mongoose.Schema(
    {
        MaNV: { type: String, unique: true },
        HoTenNV: { type: String, required: true },
        SoDT: { type: String, required: true },
        DiaChi: { type: String, required: true },
        Chucvu: { type: String, required: true },
        GioiTinh: { type: String, required: true },
        NgaySinh: { type: Date, required: true },
        Matk: { type: mongoose.Schema.Types.ObjectId, ref: 'Taikhoan' }
    },
    {
        timestamps: true,
    }
);

NhanvienSchema.pre('save', async function (next) {
    const lastAccount = await NhanVien.findOne({}, {}, { sort: { 'MaNV': -1 } });

    if (lastAccount) {
        const lastMatK = lastAccount.MaNV;
        const lastNumber = parseInt(lastMatK.substring(2));
        this.MaNV = 'NV' + (lastNumber + 1);
    } else {
        this.MaNV = 'NV1';
    }

    next();
});

const NhanVien = mongoose.model('Nhanvien', NhanvienSchema);
module.exports = NhanVien;
