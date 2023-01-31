const validationsUser = (request, response, next) => {
    const { displayName, email, password } = request.body;
    if (displayName.length < 8) {
      return response.status(400)
        .send({ message: '"displayName" length must be at least 8 characters long' });
    }
    const emailRegex = /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
    if (!emailRegex.test(email)) {
      return response.status(400)
        .send({ message: '"email" must be a valid email' });
    }
    if (password.length < 6) {
      return response.status(400)
        .send({ message: '"password" length must be at least 6 characters long' });
    }
    next();
  };

module.exports = {
      validationsUser,
};