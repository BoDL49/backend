const mongoose = require('mongoose')

const XuatchieuSchema = new mongoose.Schema(
    {
        MaXC: { type: String, required: true },
        MaRap: { type: String },
        MaPhim: { type: String },
        Giochieu: { type: String, required: true },
        NgayChieu: { type: Date, required: true },
        Soluongve: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const XuatChieu = mongoose.model('Xuatchieu', XuatchieuSchema);
module.exports = XuatChieu;