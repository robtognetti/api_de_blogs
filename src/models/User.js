module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
          },
          displayName: {
            type: DataTypes.STRING,
          },
          email: {
            type: DataTypes.STRING,
            unique: true
          },
          password: {
            type: DataTypes.STRING,
          },
          image: {
            type: DataTypes.STRING
          },
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'users',
    });
    // *prestar atençao no apelido as criar as models *//
    User.associate = ({ BlogPost }) => {
      User.hasMany(BlogPost, {
        foreignKey: 'user_id', as: 'blogPosts',
      });
    }; 

    return User;
}