const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env]; // Importa la configuración para el entorno actual

// Crear una instancia de Sequelize con la configuración
const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  {
    host: config.host,
    dialect: config.dialect,
    logging: false // Desactiva el logging de consultas SQL en consola
  }
);

// Probar la conexión
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
})();

module.exports = sequelize;