const sequelize = require('sequelize');

const dbconfig = require ('./config/config.js');

const Usuario = require('../model/Usuario');

const conexão = new Sequelize(dbconfig);

Usuario.init(conexão);

module.exports = conexão;