const User = require('../models/TaiKhoan');
const bcrypt = require('bcrypt'); // Corrected typo
const { generalAccessToken, generalRefreshToken } = require('./JwtService');

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { Tentk, Email, Matkhau } = newUser;
        try {
            const checkUser = await User.findOne({ Tentk: Tentk });
            const checkEmail = await User.findOne({ Email: Email });

            if (checkUser !== null) {
                resolve({
                    status: "ERR",
                    message: 'The username is already taken'
                });
            }
            if (checkEmail !== null) {
                resolve({
                    status: "ERR",
                    message: 'The email is already registered'
                });
            }

            const hash = bcrypt.hashSync(Matkhau, 10);
            const createdUser = await User.create({
                Tentk,
                Email,
                Matkhau: hash,
            });
            if (createdUser) {
                resolve({
                    status: 'OK',
                    message: 'User created successfully',
                    data: createdUser
                });
            }
        } catch (err) {
            reject(err);
        }
    });
};

const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const { Email, Matkhau } = userLogin;
        try {
            const checkUser = await User.findOne({ Email: Email });

            if (checkUser === null) {
                resolve({
                    status: "ERR",
                    message: 'User not found'
                });
            }

            const comparePassword = bcrypt.compareSync(Matkhau, checkUser.Matkhau);

            if (!comparePassword) {
                resolve({
                    status: "ERR",
                    message: 'Incorrect password'
                });
            }


            const access_token = await generalAccessToken({ id: checkUser.id, MaNV: checkUser.MaNV });
            const refresh_token = await generalRefreshToken({ id: checkUser.id, MaNV: checkUser.MaNV });


            resolve({
                status: 'OK',
                message: 'Login successful',
                access_token: access_token,
                refresh_token: refresh_token
            });
        } catch (err) {
            reject(err);
        }
    });
};

const updateUser = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findOne({ _id: id });

            if (checkUser === null) {
                resolve({
                    status: "OK",
                    message: 'User is not defined'
                });
            }

            const updatedUser = await User.findByIdAndUpdate(id, data, { new: true })

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedUser
            });
        } catch (err) {
            reject(err);
        }
    });
};

const deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findOne({ _id: id });

            if (checkUser === null) {
                resolve({
                    status: "OK",
                    message: 'User is not defined'
                });
            }

            await User.findByIdAndDelete(id)


            resolve({
                status: 'OK',
                message: 'DELETE USER SUCCESS'
            });
        } catch (err) {
            reject(err);
        }
    });
};


const getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allUser = await User.find()


            resolve({
                status: 'OK',
                message: 'GET ALL USER SUCCESS',
                data: allUser
            });
        } catch (err) {
            reject(err);
        }
    });
};

const getDetailUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findOne({ _id: id });

            if (user === null) {
                resolve({
                    status: "OK",
                    message: 'User is not defined'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: user
            });
        } catch (err) {
            reject(err);
        }
    });
};


module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailUser
};