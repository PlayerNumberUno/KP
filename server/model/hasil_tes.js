const mongoose = require('mongoose');
const hasil_tes = new mongoose.Schema({
    score: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    
}, { timestamps: true });

 
module.export=mongoose.model('hasil_tes',hasil_tes);