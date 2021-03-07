const connection = require('./../db');
 
module.exports.listArtists= function(req,res){
  if(req.session.loggedin){
    connection.query('SELECT * FROM artists limit 10', function (error, results, fields) {
      if (error) {
	  		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	  	} else {
        res.render('pages/recomendations/preferences',{title: 'getArtists',
                            userProfile: { email: req.session.email },
                            artists: results}
                  );
      }

    });
  }else{res.redirect('/iniciar-sesion');}
}
