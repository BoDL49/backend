const mongoose = require('mongoose')

const VedadatSchema = new mongoose.Schema(
    {
        MaVe: { type: String, required: true },
        MatK: { type: mongoose.Schema.Types.ObjectId, ref: 'Taikhoan' },
        Gia: { type: Number, required: true },
        Ngaydat: { type: Date, required: true },
        ManV: { type: mongoose.Schema.Types.ObjectId, ref: 'Nhanvien' },
        Ghe: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Vedadat = mongoose.model('Vedadat', VedadatSchema);
module.exports = Vedadat;