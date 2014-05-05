var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/azaltja',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://notme159:azaltja@ds053178.mongolab.com:53178/azaltja',
    port: process.env.PORT || 80
  }
};