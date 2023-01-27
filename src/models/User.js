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
        underscored: true,
        tableName: 'users',
    });

    return User;
}

module.exports = UserModel;