const mongoose = require('mongoose')

const TaikhoanSchema = new mongoose.Schema(
    {
        Matk: { type: String, unique: true },
        Tentk: { type: String, required: true },
        Email: { type: String, required: true },
        Matkhau: { type: String, required: true },
        MaNV: { type: String }
    },
    {
        timestamps: true,
    }
);

TaikhoanSchema.pre('save', async function (next) {
    const lastAccount = await TaiKhoan.findOne({}, {}, { sort: { 'Matk': -1 } });

    if (lastAccount) {
        const lastMatk = lastAccount.Matk;
        const lastNumber = parseInt(lastMatk.substring(2));
        this.Matk = 'TK' + (lastNumber + 1);
    } else {
        this.Matk = 'TK1';
    }

    next();
});


const TaiKhoan = mongoose.model('Taikhoan', TaikhoanSchema);
module.exports = TaiKhoan;
