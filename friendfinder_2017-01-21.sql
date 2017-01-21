# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.17)
# Database: friendfinder
# Generation Time: 2017-01-21 19:46:47 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table friends
# ------------------------------------------------------------

DROP TABLE IF EXISTS `friends`;

CREATE TABLE `friends` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `photo` varchar(500) DEFAULT NULL,
  `scores` varchar(30) DEFAULT NULL,
  `match` varchar(100) DEFAULT NULL,
  `matchPhoto` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `friends` WRITE;
/*!40000 ALTER TABLE `friends` DISABLE KEYS */;

INSERT INTO `friends` (`id`, `name`, `photo`, `scores`, `match`, `matchPhoto`)
VALUES
	(339,'Sarah','https://pbs.twimg.com/profile_images/543475139925401600/bbikE42V.jpeg','1,4,5,4,5,4,3,2,3,1','N/A','N/A'),
	(340,'Patrick','https://pbs.twimg.com/profile_images/784404948700262400/xENRN2IK.jpg','4,1,4,5,1,2,4,5,1,3','Sarah','https://pbs.twimg.com/profile_images/543475139925401600/bbikE42V.jpeg'),
	(341,'Thomas','http://www.mckinsey.com/~/media/McKinsey/Our%20People/Thomas%20Baumgartner/Thomas%20Baumgartner_std_img.ashx?mw=488&car=1:1','5,2,5,1,5,5,4,2,1,4','Sarah','https://pbs.twimg.com/profile_images/543475139925401600/bbikE42V.jpeg'),
	(342,'Garrett','http://www.tgw-conveyor.com/images/people/Tenkel-Garret%20grtenk%202016.jpg','4,2,4,1,4,5,2,2,1,4','Thomas','http://www.mckinsey.com/~/media/McKinsey/Our%20People/Thomas%20Baumgartner/Thomas%20Baumgartner_std_img.ashx?mw=488&car=1:1'),
	(343,'Kierra','https://v.cdn.vine.co/v/avatars/f8121287-5f1a-4331-9390-c105c98914e08cba8051fe.jpg?versionId=RQqEmRx8ZB0AhF8n8WQfwV7i09453LVD','3,4,5,3,1,4,4,2,1,4','Thomas','http://www.mckinsey.com/~/media/McKinsey/Our%20People/Thomas%20Baumgartner/Thomas%20Baumgartner_std_img.ashx?mw=488&car=1:1'),
	(344,'Tim Hecker','http://cdn.pitchfork.com/news/62672/0fa60e11.jpg','3,1,4,5,2,1,1,5,5,5','Patrick','https://pbs.twimg.com/profile_images/784404948700262400/xENRN2IK.jpg'),
	(345,'Jennifer Lopez','http://gazettereview.com/wp-content/uploads/2016/06/jennifer-lopez-net-worth.jpg','2,3,3,1,5,5,4,2,2,1','Sarah','https://pbs.twimg.com/profile_images/543475139925401600/bbikE42V.jpeg');

/*!40000 ALTER TABLE `friends` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
