const mongoose = require('mongoose');

const KhuyenmaiSchema = new mongoose.Schema(
    {
        MaKM: { type: String, unique: true },
        TenKM: { type: String, required: true },
        Ngaybatdau: { type: Date, required: true },
        Ngayketthuc: { type: Date, required: true },
        GiatriKM: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

KhuyenmaiSchema.pre('save', async function (next) {
    const lastKM = await Khuyenmai.findOne({}, {}, { sort: { 'MaKM': -1 } });

    if (lastKM) {
        const lastMaKM = lastKM.MaKM;
        const lastNumber = parseInt(lastMaKM.substring(2));
        this.MaKM = 'KM' + (lastNumber + 1);
    } else {
        this.MaKM = 'KM1';
    }

    next();
});

const Khuyenmai = mongoose.model('Khuyenmai', KhuyenmaiSchema);
module.exports = Khuyenmai;
