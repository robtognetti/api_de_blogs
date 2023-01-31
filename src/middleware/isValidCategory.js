module.exports = async (req, res, next) => {
    const { name } = req.body;
  
    if (!name) {
      const err = '"name" is required';
      return res.status(400).send({ message: err });
    }
  
    next();
    };