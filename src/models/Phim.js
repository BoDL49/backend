const mongoose = require('mongoose')

const PhimSchema = new mongoose.Schema(
    {
        MaPhim: { type: String, required: true },
        TenPhim: { type: String, required: true },
        Thoiluong: { type: Number, required: true },
        Daodien: { type: String, required: true },
        Ngaykhoichieu: { type: Date, required: true },
        TheLoai: { type: mongoose.Schema.Types.ObjectId, ref: 'TheLoai' },
        Nuocsx: { type: String, required: true },
        Dotuoi: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Phim = mongoose.model('Phim', PhimSchema);
module.exports = Phim;