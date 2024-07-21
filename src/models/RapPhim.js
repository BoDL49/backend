const mongoose = require('mongoose')

const RapphimSchema = new mongoose.Schema(
    {
        MaRap: { type: String, unique: true },
        TenRap: { type: String, required: true },
        Soluongghe: { type: Number, required: true },
        ManV: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

RapphimSchema.pre('save', async function (next) {
    const lastRap = await RapPhim.findOne({}, {}, { sort: { 'MaRap': -1 } });

    if (lastRap) {
        const lastRapPhim = lastRap.MaRap;
        const lastNumber = parseInt(lastRapPhim.substring(2));
        this.MaRap = 'RP' + (lastNumber + 1);
    } else {
        this.MaRap = 'RP1';
    }

    next();
});

const RapPhim = mongoose.model('Rapphim', RapphimSchema);
module.exports = RapPhim;