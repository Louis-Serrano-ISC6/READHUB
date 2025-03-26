require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

module.exports = {
  "development": {
    "username": process.env.DB_USER || "root", 
    "password": process.env.DB_PASSWORD || null,
    "database": process.env.DB_DATABASE || "database_development", 
    "host": process.env.DB_HOST || "127.0.0.1", 
    "dialect": process.env.DB_DIALECT || "mysql",
    "port": process.env.DB_PORT || 3306 
  },
  "test": {
    "username": process.env.DB_USER || "root", 
    "password": process.env.DB_PASSWORD || null,
    "database": process.env.DB_DATABASE || "database_test", 
    "host": process.env.DB_HOST || "127.0.0.1", 
    "dialect": process.env.DB_DIALECT || "mysql",
    "port": process.env.DB_PORT || 3306 
  },
  "production": {
    "username": process.env.DB_USER || "root", 
    "password": process.env.DB_PASSWORD || null,
    "database": process.env.DB_DATABASE || "database_production", 
    "host": process.env.DB_HOST || "127.0.0.1", 
    "dialect": process.env.DB_DIALECT || "mysql",
    "port": process.env.DB_PORT || 3306 
  }
}
