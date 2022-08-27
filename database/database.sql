-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.33 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table test_rolling_glory.gifts
CREATE TABLE IF NOT EXISTS `gifts` (
  `id` char(36) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `stock` int(10) DEFAULT NULL,
  `point` int(11) DEFAULT NULL,
  `averageRating` int(11) DEFAULT NULL,
  `ratingStars` int(11) DEFAULT NULL,
  `totalRating` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table test_rolling_glory.gifts: ~2 rows (approximately)
DELETE FROM `gifts`;
/*!40000 ALTER TABLE `gifts` DISABLE KEYS */;
INSERT INTO `gifts` (`id`, `name`, `slug`, `stock`, `point`, `averageRating`, `ratingStars`, `totalRating`, `image`) VALUES
	('0a1516de-5d61-4782-9e98-9477ebb263dd', 'samsung galaxy s5', 'samsung-galaxy-s5', 200, 200000, NULL, NULL, NULL, 'http://localhost:3000/images/1660797619195.jpg'),
	('4d08d7ca-3894-4710-b8f2-52cd3c8c50c8', 'samsung galaxy s9', 'samsung-galaxy-s9', 200, 200000, NULL, NULL, NULL, 'http://localhost:3000/images/1660797619195.jpg'),
	('89a8c8aa-0b8c-4337-82e2-3a8b5cc32cc8', 'samsung galaxy s14', 'samsung-galaxy-s14', 200, 200000, NULL, NULL, NULL, 'http://localhost:3000/images/1660797619195.jpg'),
	('957234d9-a719-4eab-a7e8-afaeeb4ca8f3', 'samsung galaxy s11', 'samsung-galaxy-s11', 200, 200000, NULL, NULL, NULL, 'http://localhost:3000/images/1660797619195.jpg'),
	('9f1aeebe-445b-477b-82af-38834cad34f7', 'samsung galaxy s8', 'samsung-galaxy-s8', 200, 200000, NULL, NULL, NULL, 'http://localhost:3000/images/1660797619195.jpg'),
	('a204fe1c-6d50-46fe-b86d-ad5877e68150', 'samsung galaxy s12', 'samsung-galaxy-s12', 200, 200000, NULL, NULL, NULL, 'http://localhost:3000/images/1660797619195.jpg');
/*!40000 ALTER TABLE `gifts` ENABLE KEYS */;

-- Dumping structure for table test_rolling_glory.sequelizemeta
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table test_rolling_glory.sequelizemeta: ~3 rows (approximately)
DELETE FROM `sequelizemeta`;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` (`name`) VALUES
	('20220426135541-Users.js'),
	('20220816142139-create-gift-table.js'),
	('20220816142703-create-user-gift-table.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;

-- Dumping structure for table test_rolling_glory.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` char(36) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table test_rolling_glory.users: ~0 rows (approximately)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
	('ff04c998-4ab5-4374-b691-b8abac072adc', 'admin', 'admin@gmail.com', '$2b$10$zIH.CCRzk7DYMJT2rz7CA.fGbPePgFSZZIdeWl9AiISRoyhsJ6q4W');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table test_rolling_glory.user_gifts
CREATE TABLE IF NOT EXISTS `user_gifts` (
  `id` char(36) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `user_id` char(36) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `gift_id` char(36) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table test_rolling_glory.user_gifts: ~2 rows (approximately)
DELETE FROM `user_gifts`;
/*!40000 ALTER TABLE `user_gifts` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_gifts` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
