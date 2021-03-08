DELIMITER $$
DROP PROCEDURE IF EXISTS `getRecomendationTracks`;
CREATE PROCEDURE `getRecomendationTracks`(IN par_user_id int(11),in par_model varchar(15), IN par_limit int(11))
BEGIN
     SELECT a.music_track_name,
            ra.recomendation_score 
     FROM recomendations_tracks AS ra
     LEFT JOIN tracks AS a ON a.id = ra.track_id
     WHERE ra.user_id = par_user_id
     AND ra.model = par_model
     ORDER BY recomendation_score DESC
     LIMIT par_limit;
END$$

DELIMITER ;