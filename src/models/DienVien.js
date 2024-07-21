const mongoose = require('mongoose');

const DienvienSchema = new mongoose.Schema(
    {
        Id: { type: String, unique: true },
        TenDienvien: { type: String, required: true },
        MaPhim: { type: String },
    },
    {
        timestamps: true,
    }
);

DienvienSchema.pre('save', async function (next) {
    const lastDv = await Dienvien.findOne({}, {}, { sort: { 'Id': -1 } });

    if (lastDv) {
        const lastDV = lastDv.Id;
        const lastNumber = parseInt(lastDV.substring(2));
        this.Id = 'DV' + (lastNumber + 1);
    } else {
        this.MaKH = 'DV1';
    }

    next();
});

const Dienvien = mongoose.model('Dienvien', DienvienSchema);
module.exports = Dienvien;

