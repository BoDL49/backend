const mongoose = require('mongoose')

const PhimSchema = new mongoose.Schema(
    {
        MaPhim: { type: String, unique: true },
        TenPhim: { type: String, required: true },
        Thoiluong: { type: Number, required: true },
        Daodien: { type: String, required: true },
        Ngaykhoichieu: { type: Date, required: true },
        MatL: { type: String },
        Nuocsx: { type: String, required: true },
        MaGH: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

PhimSchema.pre('save', async function (next) {
    const lastPhim = await Phim.findOne({}, {}, { sort: { 'MaPhim': -1 } });

    if (lastPhim) {
        const lastMaPhim = lastPhim.MaPhim;
        const lastNumber = parseInt(lastMaPhim.substring(2));
        this.MaPhim = 'P' + (lastNumber + 1);
    } else {
        this.MaPhim = 'P1';
    }

    next();
});

const Phim = mongoose.model('Phim', PhimSchema);
module.exports = Phim;