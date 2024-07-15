const mongoose = require('mongoose')

const RapphimSchema = new mongoose.Schema(
    {
        MaRap: { type: String, required: true },
        Soluongghe: { type: Number, required: true },
        ManV: { type: mongoose.Schema.Types.ObjectId, ref: 'Nhanvien' },
    },
    {
        timestamps: true,
    }
);

const RapPhim = mongoose.model('Rapphim', RapphimSchema);
module.exports = RapPhim;