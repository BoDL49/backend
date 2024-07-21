const mongoose = require('mongoose');

const TheLoaiSchema = new mongoose.Schema(
    {
        MaTL: { type: String, required: true, unique: true },
        TenTL: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

TheLoaiSchema.pre('save', async function (next) {
    const lastTheLoai = await TheLoai.findOne({}, {}, { sort: { 'MaTL': -1 } });

    if (lastTheLoai) {
        const lastMaTL = lastTheLoai.MaTL;
        const lastNumber = parseInt(lastMaTL.substring(2));
        this.MaTL = 'TL' + (lastNumber + 1).toString().padStart(2, '0');
    } else {
        this.MaTL = 'TL01';
    }

    next();
});

const TheLoai = mongoose.model('Theloai', TheLoaiSchema);
module.exports = TheLoai;