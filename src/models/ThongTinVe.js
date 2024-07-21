const mongoose = require('mongoose');

const ThongTinVeSchema = new mongoose.Schema(
    {
        MaVe: { type: String, required: true, unique: true },
        MaPhim: { type: String, required: true },
        MaXC: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

ThongTinVeSchema.pre('save', async function (next) {
    const lastThongTinVe = await ThongTinVe.findOne({}, {}, { sort: { 'MaVe': -1 } });

    if (lastThongTinVe) {
        const lastMaVe = lastThongTinVe.MaVe;
        const lastNumber = parseInt(lastMaVe.substring(2));
        this.MaVe = 'TTV' + (lastNumber + 1).toString().padStart(3, '0');
    } else {
        this.MaVe = 'TTV1';
    }

    next();
});

const ThongTinVe = mongoose.model('Thongtinve', ThongTinVeSchema);
module.exports = ThongTinVe;