const mongoose = require('mongoose');

const DienvienSchema = new mongoose.Schema(
    {
        Id: { type: String, required: true },
        TenDienvien: { type: String, required: true },
        MaPhim: { type: String },
    },
    {
        timestamps: true,
    }
);

const Dienvien = mongoose.model('Dienvien', DienvienSchema);
module.exports = Dienvien;