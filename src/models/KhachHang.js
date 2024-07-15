const mongoose = require('mongoose');

const KhachhangSchema = new mongoose.Schema(
    {
        MaKH: { type: String, required: true, unique: true },
        TenKH: { type: String, required: true },
        SoDT: { type: String, required: true },
        Ngaysinh: { type: Date, required: true },
        Gioitinh: { type: String, required: true },
        MatK: { type: mongoose.Schema.Types.ObjectId, ref: 'Taikhoan' }
    },
    {
        timestamps: true,
    }
);

const Khachhang = mongoose.model('Khachhang', KhachhangSchema);
module.exports = Khachhang;