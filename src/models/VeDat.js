const mongoose = require('mongoose')

const VedadatSchema = new mongoose.Schema(
    {
        MaVe: { type: String, required: true },
        MatK: { type: String },
        Gia: { type: Number, required: true },
        Ngaydat: { type: Date, required: true },
        ManV: { type: String },
        Ghe: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Vedadat = mongoose.model('Vedadat', VedadatSchema);
module.exports = Vedadat;