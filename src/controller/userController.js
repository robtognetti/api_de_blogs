const userServices = require('../services/userServices');

const secret = process.env.JWT_SECRET || 'secretToken';
const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const login = async (req, res) => {
  const { email, password } = req.body;
  
  const user = await userServices.getByEmailAndPassword(email, password);
  
  if (!user) {
    return res.status(400).send({ message: 'Invalid fields' });
  }

  const token = jwtConfig.sign({ data: { userId: user.id } }, secret, jwtConfig);

  res.status(200).send({ token });
};

const newUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { status, message, token } = await userServices.newUser(
    email,
    displayName,
    image,
    password,
  );
  if (!message || message === 'unique violation') {
    return res.status(status).send({ token });
  }
  return res.status(status).send({ message });
};

const allUsers = async (req, res) => { 
    const users = await userServices.allUsers();

  return res.status(200).send(users);
};

const userId = async (req, res) => {
  const { id } = req.params;

  const selectedUser = await userServices.userId(id);

  if (!selectedUser) {
      return res.status(404).send({ message: 'User does not exist' });
  } 

  return res.status(200).send(selectedUser);
};

module.exports = {
    newUser,
    login,
    allUsers,
    userId,
};