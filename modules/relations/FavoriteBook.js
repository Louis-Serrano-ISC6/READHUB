'use strict';
module.exports = (sequelize, DataTypes) => {
  const FavoriteBook = sequelize.define('FavoriteBook', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'books',
        key: 'id'
      }
    }
  }, {
    tableName: 'favorites_books',
    timestamps: false
  });

  return FavoriteBook;
};
