'use strict';

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

class Book extends Model {
  static associate(models) {
    Book.belongsToMany(models.Author, { through: 'books_authors', foreignKey: 'book_id' });
    Book.belongsToMany(models.User, { through: 'favorites_books', foreignKey: 'book_id' });
  }
}

Book.init(
  {
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
  },
  {
    sequelize,
    modelName: 'Book',
    tableName: 'books',
    timestamps: false
  }
);

module.exports = Book;