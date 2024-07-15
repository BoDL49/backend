const mongoose = require('mongoose')

const XuatchieuSchema = new mongoose.Schema(
    {
        MaXC: { type: String, required: true },
        MaRap: { type: mongoose.Schema.Types.ObjectId, ref: 'Rapphim' },
        MaPhim: { type: mongoose.Schema.Types.ObjectId, ref: 'Phim' },
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