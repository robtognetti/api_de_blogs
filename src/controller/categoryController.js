const categoryServices = require('../services/categoryServices');

const allCategory = async (_req, res) => {
    const categories = await categoryServices.allCategory();
    return res.status(200).send(categories);
    };

const newCategory = async (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send(
        { message: '"name" is required' },
        );
    }
    const category = await categoryServices.newCategory(name);
    res.status(201).send(category);
  };
  
module.exports = {
    newCategory,
    allCategory,
};