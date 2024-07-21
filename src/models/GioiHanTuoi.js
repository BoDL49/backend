const mongoose = require('mongoose');

const GioihantuoiSchema = new mongoose.Schema(
    {
        MaGH: { type: String, unique: true },
        Dotuoi: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

GioihantuoiSchema.pre('save', async function (next) {
    const lastTuoi = await Gioihantuoi.findOne({}, {}, { sort: { 'MaGH': -1 } });

    if (lastTuoi) {
        const lastGHT = lastTuoi.MaGH;
        const lastNumber = parseInt(lastGHT.substring(2));
        this.MaGH = 'GHT' + (lastNumber + 1);
    } else {
        this.MaKH = 'GHT1';
    }

    next();
});

const Gioihantuoi = mongoose.model('Gioihantuoi', GioihantuoiSchema);
module.exports = Gioihantuoi;