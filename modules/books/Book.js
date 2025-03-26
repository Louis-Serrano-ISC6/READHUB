'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    download_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'books',
    timestamps: false
  });

  Book.associate = models => {
    Book.belongsToMany(models.Author, { through: 'books_authors', foreignKey: 'book_id' });
    Book.belongsToMany(models.User, { through: 'favorites_books', foreignKey: 'book_id' });
  };

  return Book;
};
