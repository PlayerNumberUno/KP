const mongoose = require('mongoose');
const bank_soal = new mongoose.Schema({
    soal: {
        type: String,
        required: true
    },
    jawaban: {
        type: Array,
        required: true
    },
    poin: {
        type: Array,
        required: true
    },
    
}, { timestamps: false });

 
module.export=mongoose.model('bank_soal',bank_soal);