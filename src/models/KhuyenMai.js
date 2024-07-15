const mongoose = require('mongoose');

const KhuyenmaiSchema = new mongoose.Schema(
    {
        MaKM: { type: String, required: true },
        TenKM: { type: String, required: true },
        Ngaybatdau: { type: Date, required: true },
        Ngayketthuc: { type: Date, required: true },
        GiatriKM: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const Khuyenmai = mongoose.model('Khuyenmai', KhuyenmaiSchema);
module.exports = Khuyenmai;
