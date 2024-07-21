const mongoose = require('mongoose')

const XuatChieuSchema = new mongoose.Schema(
    {
        MaXC: { type: String, required: true, unique: true },
        MaRap: { type: String, required: true },
        MaPhim: { type: String, required: true },
        GioChieu: { type: String, required: true },
        NgayChieu: { type: Date, required: true },
        SoLuongVe: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

XuatChieuSchema.pre('save', async function (next) {
    const lastXuatChieu = await XuatChieu.findOne({}, {}, { sort: { 'MaXC': -1 } });

    if (lastXuatChieu) {
        const lastMaXC = lastXuatChieu.MaXC;
        const lastNumber = parseInt(lastMaXC.substring(2));
        this.MaXC = 'XC' + (lastNumber + 1).toString().padStart(3, '0');
    } else {
        this.MaXC = 'XC1';
    }

    next();
});

const XuatChieu = mongoose.model('Xuatchieu', XuatChieuSchema);
module.exports = XuatChieu;