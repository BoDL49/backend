const mongoose = require('mongoose');

const ThongtinveSchema = new mongoose.Schema(
    {
        MaVe: { type: String, required: true },
        MaPhim: { type: String },
        MaXC: { type: String },
    },
    {
        timestamps: true,
    }
);

const Thongtinve = mongoose.model('Thongtinve', ThongtinveSchema);
module.exports = Thongtinve;