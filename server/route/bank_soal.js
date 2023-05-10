const express = require('express');
const { read, update, delete_banksoal, create_soal,} = require('../controller/bank_soal');

const router = express.Router()
router.post('/', create_soal);
router.get('/', read);
router.put('/', update);
router.delete('/', delete_banksoal);
module.exports = router;