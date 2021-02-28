// Defines de connection to de DB
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'user_taller1',
  password : 'taller1.',
  database : 'taller1'
});
connection.connect(function(err){
if(!err) {
    console.log("Base de datos conectada");
} else {
    console.log("No puedo conectarme a la BD");
}
});

module.exports = connection; 