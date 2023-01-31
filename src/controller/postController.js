const postServices = require('../services/postServices');

const getAll = async (_req, res) => {
    const posts = await postServices.getAll();
    res.status(200).send(posts);
    };

const getByIdPost = async (req, res) => {
    const { id } = req.params;
    const { post, error } = await postServices.getPostById(id);

    if (error) return res.status(404).send({ message: error });

    res.status(200).send(post);
};

const getPostById = async (req, res) => {
    const autentication = req.headers.authorization;

    const { id } = req.params;

    const { title, content } = req.body;
  
    const { type, message } = await postServices.getPostById(autentication, id, title, content);
    
    if (type) return res.status(404).send({ message });
  
    res.status(200).send(message);
  };

  const getUpdatPost = async (request, response) => {
    const { title, content, userEmail } = request.body;

    const { error, updatedPost } = await postServices.getUpdatPost(
        
        { title, content, userEmail },
    );

    if (error) return response.status(401).send({ message: error });

    response.status(200).send(updatedPost);
};

  module.exports = {
    getAll,
    getByIdPost,
    getPostById,
    getUpdatPost,
};