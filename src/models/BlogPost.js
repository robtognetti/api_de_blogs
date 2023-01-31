module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
      },
      published: {
        type: DataTypes.DATE
      },
      updated: {
        type: DataTypes.DATE
      }
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'blog_posts'
    });
    // *prestar atençao no apelido as criar as models *//
    BlogPost.associate = ({ User }) => {
      BlogPost.belongsTo(User, {
        foreingKey: 'user_id', as: 'user',
      });
    };

    return BlogPost;
  }