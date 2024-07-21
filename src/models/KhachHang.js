const mongoose = require('mongoose');

const KhachhangSchema = new mongoose.Schema(
    {
        MaKH: { type: String, unique: true },
        TenKH: { type: String, required: true },
        SoDT: { type: String, required: true },
        Ngaysinh: { type: Date, required: true },
        Gioitinh: { type: String, required: true },
        Avatar: { type: String, required: false },
        Matk: { type: String }
    },
    {
        timestamps: true,
    }
);

KhachhangSchema.pre('save', async function (next) {
    const lastAccount = await Khachhang.findOne({}, {}, { sort: { 'MaKH': -1 } });

    if (lastAccount) {
        const lastMaKH = lastAccount.MaKH;
        const lastNumber = parseInt(lastMaKH.substring(2));
        this.MaKH = 'KH' + (lastNumber + 1);
    } else {
        this.MaKH = 'KH1';
    }

    next();
});

const Khachhang = mongoose.model('Khachhang', KhachhangSchema);
module.exports = Khachhang;