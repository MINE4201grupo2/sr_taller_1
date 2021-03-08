/**
 * IMPORTANTE, USE SUS VARIABLES DE ENTORNO PARA CONFIGURAR
 * NO SUBA NADA AL REPO
 */

const enviroment = {
  v: '1.0.0',
  log: process.env.LOG || 'dev',
  site: {
    name: 'RecomendacionesParaTI'
  },
  apiUrl: process.env.API_URL || 'http://localhost:8080'
};

module.exports = enviroment;
