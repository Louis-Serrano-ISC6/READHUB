'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookAuthor = sequelize.define('BookAuthor', {
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'books',
        key: 'id'
      }
    },
    author_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'authors',
        key: 'id'
      }
    }
  }, {
    tableName: 'books_authors',
    timestamps: false
  });

  return BookAuthor;
};
