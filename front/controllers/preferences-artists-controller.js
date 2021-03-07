const connection = require('../db');
// cryptr = new Cryptr('myTotalySecretKey');
 
 
module.exports.postPreferences=function(req,res){
    var sql_artists = "INSERT INTO `preferences_artists` (`user_id`,`artist_id`,`created_at`) VALUES  ? "
    //if (error) throw error
    var data = req.body;
    var today = new Date();
    var userId= ''

    connection.query('SELECT id FROM users WHERE email = ?',[req.session.email], function (error, results, fields) {
        if(error) throw error
        userId = results[0].id;
        console.log(userId)
        var inserts = [];
        data.artists.forEach(function (item) {
            //console.log(item);   
            inserts.push([userId,item,today]);
        });
        //console.log(inserts)
        connection.query(sql_artists,[inserts], function (error, results, fields) {
            if (error) throw error
            console.log('Row inserted:' + results.affectedRows);
        });
    });

}