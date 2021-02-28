var Cryptr = require('cryptr');
const connection = require('./../db');
// cryptr = new Cryptr('myTotalySecretKey');
 
 
module.exports.register=function(req,res){
  var today = new Date();
  var encryptedString = cryptr.encrypt(req.body.password);
  var users={
      "age": req.body.age,
      "country":req.body.country,
      "email":req.body.email,
      "password":encryptedString,
      "created_at":today,
      "updated_at":today
  }
  connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
    if (error) {
      res.json({
          status:false,
          message:'No se pudo insertar correctamente el usuario'
      })
    }else{
        res.json({
          status:true,
          data:results,
          message:'Usuario registrado '
      })
    }
  });
}

