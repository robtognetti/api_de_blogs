const validationUpdatePost = (req, res, next) => {
    const { title, content, categoryIds } = req.body;

    if (!title || !content || !categoryIds) {
        res.status(400).json({ message: 'Some required fields are missing' });
        return;
    }

    next();
};

module.exports = {
    validationUpdatePost,
};