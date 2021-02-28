use taller1;

CREATE TABLE `users`(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `email` varchar(255) NOT NULL UNIQUE,
    `gender` char(1) DEFAULT NULL,
    `age` int(11) DEFAULT NULL,
    `country` varchar(255) DEFAULT NULL,
    `password` varchar(255) NOT NULL, 
    `created_at` datetime NOT NULL, 
    `updated_at` datetime NOT NULL, 
    PRIMARY KEY (`id`));

CREATE TABLE `preferences`(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `user_id` int(11) NOT NULL UNIQUE,
    `music_track_id` varchar(100) DEFAULT NULL,
    `music_artist_id` varchar(100) DEFAULT NULL,
    `created_at` datetime NOT NULL, 
    PRIMARY KEY (`id`,`user_id` ),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`));

CREATE TABLE `recomendations`(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `user_id` int(11) NOT NULL UNIQUE,
    `music_track_id` varchar(100) DEFAULT NULL,
    `music_artist_id` varchar(100) DEFAULT NULL,
    `recomendation_score` decimal(4,4) DEFAULT NULL,
    `created_at` datetime NOT NULL, 
    PRIMARY KEY (`id`,`user_id` ),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`));

CREATE TABLE `user_listening_habits`(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `user_id` int(11) NOT NULL UNIQUE,
    `music_track_id` varchar(100) DEFAULT NULL,
    `music_track_name` varchar(255) DEFAULT NULL,
    `music_artist_id` varchar(100) DEFAULT NULL,
    `music_artist_name` varchar(255) DEFAULT NULL,
    `recomendation_score` decimal(4,4) DEFAULT NULL,
    `created_at` datetime NOT NULL, 
    PRIMARY KEY (`id`,`user_id` ),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`));


-- show tables;

