const mongoose = require('mongoose')

const VeDaDatSchema = new mongoose.Schema(
    {
        MaVe: { type: String, required: true, unique: true },
        MatK: { type: String, required: true },
        Gia: { type: Number, required: true },
        NgayDat: { type: Date, required: true },
        ManV: { type: String, required: true },
        Ghe: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

VeDaDatSchema.pre('save', async function (next) {
    const lastVeDaDat = await VeDaDat.findOne({}, {}, { sort: { 'MaVe': -1 } });

    if (lastVeDaDat) {
        const lastMaVe = lastVeDaDat.MaVe;
        const lastNumber = parseInt(lastMaVe.substring(3));
        this.MaVe = 'VDD' + (lastNumber + 1).toString().padStart(3, '0');
    } else {
        this.MaVe = 'VDD1';
    }

    next();
});

const VeDaDat = mongoose.model('Vedadat', VeDaDatSchema);
module.exports = VeDaDat;