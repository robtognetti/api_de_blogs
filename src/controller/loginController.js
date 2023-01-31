const loginService = require('../services/loginServices');

const newUser = async (req, res) => {
    const { email, password } = req.body;
    const { status, token, message } = await loginService.newUser(email, password);

    if (message) return res.status(status).send({ message });

    return res.status(status).send({ token });
};

module.exports = {
    newUser,
};