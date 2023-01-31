const validationUpdatePost = (req, res) => {
    const { title, content, categoryIds } = req.body;

    if (!title || !content || !categoryIds) {
        res.status(400).send({ message: 'Some required fields are missing' });
        return ({ title, content, categoryIds });
    }
};

module.exports = {
    validationUpdatePost,
};