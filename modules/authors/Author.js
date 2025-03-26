'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_year: {
      type: DataTypes.INTEGER
    },
    death_year: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'authors',
    timestamps: false
  });

  Author.associate = models => {
    Author.belongsToMany(models.Book, { through: 'books_authors', foreignKey: 'author_id' });
  };

  return Author;
};
