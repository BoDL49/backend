const mongoose = require('mongoose');

const GioihantuoiSchema = new mongoose.Schema(
    {
        MaGH: { type: String, required: true },
        Dotuoi: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Gioihantuoi = mongoose.model('Gioihantuoi', GioihantuoiSchema);
module.exports = Gioihantuoi;