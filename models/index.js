'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Ruta de la carpeta modules
const modulesPath = path.join(__dirname, '../modules');

// Leer todos los archivos de modelos dentro de la carpeta modules y subcarpetas
fs.readdirSync(modulesPath).forEach(folder => {
  const folderPath = path.join(modulesPath, folder);
  if (fs.lstatSync(folderPath).isDirectory()) {
    fs.readdirSync(folderPath)
      .filter(file => file.endsWith('.js'))
      .forEach(file => {
        // Importa el modelo como clase, no como función
        const modelClass = require(path.join(folderPath, file));
        
        // Agrega el modelo al objeto db
        // El nombre del modelo debería ser accesible como modelClass.name
        if (modelClass && modelClass.name) {
          db[modelClass.name] = modelClass;
        }
      });
  }
});

// Registrar las asociaciones después de cargar todos los modelos
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;