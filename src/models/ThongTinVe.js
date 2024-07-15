const mongoose = require('mongoose');

const ThongtinveSchema = new mongoose.Schema(
    {
        MaVe: { type: String, required: true },
        MaPhim: { type: mongoose.Schema.Types.ObjectId, ref: 'Phim' },
        MaXC: { type: mongoose.Schema.Types.ObjectId, ref: 'Xuatchieu' },
    },
    {
        timestamps: true,
    }
);

const Thongtinve = mongoose.model('Thongtinve', ThongtinveSchema);
module.exports = Thongtinve;