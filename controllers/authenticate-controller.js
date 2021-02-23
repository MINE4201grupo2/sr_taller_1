// npm i cryptr
// npm install express-sessions

var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
 
var connection = require('../config/database');
module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
   
   
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
       
        if(results.length >0){
            decryptedString = cryptr.decrypt(results[0].password);
            if(password==decryptedString){
               /* res.send({
                    status:true,
                    message:'successfully authenticated y el id del usuario es '+ results[0].id
                })*/
                req.session.loggedin = true;
				        req.session.email = email;
                req.session.userid = results[0].id;
				        res.redirect('/home');
            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
                 res.end();
            }
          
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
          res.end();
        }
      }
    });
}
