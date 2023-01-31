const { Category } = require('../models');

const allCategory = async () => {
    const categorias = Category.findAll();
    return categorias;
    };

const newCategory = async (name) => {
    const categoryCreated = Category.create({ name });

    return categoryCreated;
};

module.exports = {
    newCategory,
    allCategory,
};