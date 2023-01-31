const { BlogPost, Category, User } = require('../models');

const newPost = async (id, body) => {
    const { categoryIds } = body;
    const invalidIds = {
      type: 400,
    };
  
    if (!categoryIds) return invalidIds;
  
    const newerCreatedPost = await BlogPost.findByPk(newPost.id);

    const postid = await BlogPost.findAll();

    const categoryId = 'category_id';
  
    const objects = categoryIds.map((index) => ({ [postid]: newPost.id, [categoryId]: +index }));
  
    await newPost(objects);
  
    return { message: newerCreatedPost };
  };

const getAll = async () => {
    const posts = await BlogPost.findAll({
        include: [
          {
            model: User,
            as: 'user',
            attributes: { exclude: ['password'] },
          },
          {
            model: Category,
            as: 'categories',
            through: { attributes: [] },
          },
        ],
      });
      return posts;
    };

const getByIdPost = async (id) => {
    const postIdAuth = await BlogPost.findOne({ 

        where: { id }, 

        include: [{ model: User,

            as: 'user', 

                attributes: { exclude: ['password'] } },

                { model: Category, as: 'categories', through: { attributes: [] } }],
                
    });
return postIdAuth;
};

const getPostById = async (id, body) => {
    const { title, content, userId } = body;
  
    const postUpdate = await getByIdPost(id);
  
    if (postUpdate.message.userId !== userId) {
      return { type: 401, message: 'Unauthorized user' };
    }
  
    await BlogPost.update(
      { title, content },
      {
        where: { id },
      },
    );
  
    const updatePost = await getByIdPost(id);
  
    return { type: 200, message: updatePost.message };
  };

module.exports = {
  getAll,
  getByIdPost,
  getPostById,
  newPost,
};