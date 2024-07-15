const mongoose = require('mongoose');

const TheloaiSchema = new mongoose.Schema(
    {
        MatL: { type: String, required: true },
        TentL: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Theloai = mongoose.model('Theloai', TheloaiSchema);
module.exports = Theloai;