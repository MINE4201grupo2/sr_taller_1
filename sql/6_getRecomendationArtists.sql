DELIMITER $$
DROP PROCEDURE IF EXISTS `getRecomendationArtists`;
CREATE PROCEDURE `getRecomendationArtists`(IN par_user_id int(11),in par_model varchar(15), IN par_limit int(11))
BEGIN
     SELECT a.music_artist_name,
            ra.recomendation_score 
     FROM recomendations_artists AS ra
     LEFT JOIN artists AS a ON a.id = ra.artist_id
     WHERE ra.user_id = par_user_id
     AND ra.model = par_model
     ORDER BY recomendation_score DESC
     LIMIT par_limit;
END$$

DELIMITER ;