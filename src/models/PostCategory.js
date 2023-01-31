module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      'PostCategory',
      {
        post_id: { 
            type: DataTypes.INTEGER, 
            foreingKey: true, 
            allowNull: false, 
        },
        category_id: { 
            type: DataTypes.INTEGER, 
            foreingKey: true, 
            allowNull: false ,
        },
      },
      {
        tableName: 'posts_categories',
        timestamps: false
      },
    );

    PostCategory.associate = ({ BlogPost, Category }) => {
      BlogPost.belongsToMany(Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'post_id',
        otherKey: 'category_id',
      });

      Category.belongsToMany(BlogPost, {
        as: 'posts',
        through: PostCategory,
        foreignKey: 'category_id',
        otherKey: 'post_id',
      });
    };

    return PostCategory;
  };