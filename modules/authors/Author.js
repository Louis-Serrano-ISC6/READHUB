'use strict';

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

class Author extends Model {
  static associate(models) {
    Author.belongsToMany(models.Book, { through: 'books_authors', foreignKey: 'author_id' });
  }
}

Author.init(
  {
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
  },
  {
    sequelize,
    modelName: 'Author',
    tableName: 'authors',
    timestamps: false
  }
);

module.exports = Author;