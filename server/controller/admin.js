const User = require('../model/admin')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const validator = require('validator')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

const loginUser = async (req, res, next) => {
    const { username_, password } = req.body;

    try {
        loginValidation(username_, password);
        const user = await User.login(username_, password);

        const token = createToken(user._id);
        const username = user.username;
        const id = user._id;

        res.status(200).json({
            success: true,
            statusCode: res.statusCode,
            message: "Login succesfully",
            data: {
                username,
                token,
                id
            }
        });
    }
    catch (err) {
        next(err);
    };
}

const loginValidation = (username, password) => {
    if (!username || !password) {
        throw Error('All field must be filled')
    }


}

const signupUser = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        //validate email and password
        signUpValidation(username, password);

        // user signup
        const user = await User.signup(username, password);

        //create token
        const token = createToken(user._id);
        const id = user._id;

        res.status(200).json({
            success: true,
            statusCode: res.statusCode,
            message: "Sign up succesfully",
            data: {
                username,
                token,
                id
            }
        });
    }
    catch (err) {
        next(err);
    }

}

const signUpValidation = (username, password) => {
    if ( !username || !password) {
        throw Error('All field must be filled')
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough');
    }
}

module.exports = {
    signupUser,
    loginUser

};