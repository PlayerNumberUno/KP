const bank_soal = require('../model/bank_soal')

const mongoose = require('mongoose')

//create
const create_soal = async (req, res, next) => {
    const { soal, jawaban, poin } = req.body;
    try {
        const newsoal = await bank_soal.create({ soal, jawaban, poin })
        res.status(200).json({
            success: true,
            message: 'New task added succesfully!',
            data: newsoal
        });
    }
    catch (err) {
        next(err);
    };
}
//update
const update = async (req, res, next) => {
    if (!req.body) {
        throw {
            success: false,
            statusCode: 404,
            message: 'Your data to update is empty',
        };
    }
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw {
                success: false,
                statusCode: 404,
                message: 'Your task id is not valid',
            };
        }
        const task = await bank_soal.findOneAndUpdate({ _id: id }, { ...req.body }, { returnDocument: 'after' }).exec();
        if (!task) {
            throw {
                success: false,
                statusCode: 404,
                message: 'Task is empty',
            };
        }
        res.status(200).json({
            success: true,
            message: 'Task updated succesfully!',
            data: task,
        })
    }
    catch (err) {
        next(err);
    };
}
//read
const read = async (req, res, next) => {
    try {
        const task = await bank_soal.find().exec();

        if (!task) {
            throw {
                success: false,
                statusCode: 404,
                message: 'Task is empty',
            };
        }
        res.status(200).json({
            success: true,
            message: 'Your all tasks is found!',
            data: task
        });
    }
    catch (err) {
        next(err);
    };
}

//delete
const delete_banksoal = async (req, res, next) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw {
                success: false,
                statusCode: 404,
                message: 'Your task id is not valid',
            };
        }
        const task = await bank_soal.findOneAndDelete({ _id: id }).exec();
        if (!task) {
            throw {
                success: false,
                statusCode: 404,
                message: 'Task is empty',
            };
        }
        res.status(200).json({
            success: true,
            message: 'Task updated succesfully!',
            data: task
        });
    }
    catch (err) {
        next(err);
    };
}
module.exports = {
    create_soal,
    read,
    update,
    delete_banksoal,
};