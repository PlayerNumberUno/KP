const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const connectDB = require('./server/database/connection');
const adminRouter = require('./server/route/admin');
const bank_soalRouter = require('./server/route/bank_soal')
const app = express();

// setup port
dotenv.config({ path: "config.env" })
const PORT = process.env.PORT || 8000

//tag req
app.use(morgan('dev'));

//mongoDB connection
connectDB();

// express third party middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//load assets

app.use('/api/admin', adminRouter);
app.use('/api/bank_soal', bank_soalRouter);


// middleware error handler



app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) });