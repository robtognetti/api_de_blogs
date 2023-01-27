const tokenJwt = require('jsonwebtoken');
const { User } = require('../models');
// *sa//
const verifyUserEmail = async (email) => {
    const response = await User.findOne({ where: { email } });
    return response;
  };

const newUser = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });

    if (!user) return { status: 400, message: 'Invalid fields' };
    if (password !== user.password) return { status: 400, message: 'Invalid fields' };

    const payload = { data: user };
    const token = tokenJwt.sign(payload, process.env.JWT_SECRET);
    return { status: 200, token };
};
// *sa //
const getById = async (id) => {
    const user = await User.findByPk(id);
    return user;
  };

    module.exports = {
        newUser,
        verifyUserEmail,
        getById,
    };