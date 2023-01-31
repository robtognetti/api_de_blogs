const { Router } = require('express');
const { validateToken } = require('../middleware/validationToken');
const postController = require('../controller/postController');

const route = Router();

route.get('/', validateToken, postController.getAll);
route.get('/post/:id', validateToken, postController.getByIdPost);
route.delete('/post/:id', validateToken, postController.undoPost);

module.exports = route;