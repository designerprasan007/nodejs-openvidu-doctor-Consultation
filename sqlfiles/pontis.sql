-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: Bellapontis
-- ------------------------------------------------------
-- Server version	5.7.31-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Doctors`
--

DROP TABLE IF EXISTS `Doctors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Doctors` (
  `doc_id` int(11) NOT NULL AUTO_INCREMENT,
  `initial` varchar(250) NOT NULL,
  `firstname` varchar(250) NOT NULL,
  `lastname` varchar(250) NOT NULL,
  `room_name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `provider` int(5) NOT NULL,
  `status` int(5) DEFAULT '0',
  `verified` int(3) DEFAULT '0',
  PRIMARY KEY (`doc_id`),
  UNIQUE KEY `room_name` (`room_name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Doctors`
--

LOCK TABLES `Doctors` WRITE;
/*!40000 ALTER TABLE `Doctors` DISABLE KEYS */;
INSERT INTO `Doctors` VALUES (1,'Dr','PRASANNA','NADAPUROHIT','prasanna','prasanna@gmail.com','prasanna',1,1,0),(2,'Dr','PRASANNA','NADAPUROHIT','prasanna1','designerprasan007@gmail.com','reset',1,0,0),(3,'Dr','david','aram','aramdoctor','david_usa4@yahoo.com','upwork1',1,1,0);
/*!40000 ALTER TABLE `Doctors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Patient`
--

DROP TABLE IF EXISTS `Patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Patient` (
  `patient_id` int(11) NOT NULL AUTO_INCREMENT,
  `patient_name` varchar(250) NOT NULL,
  `d_id` int(11) NOT NULL,
  `url` varchar(250) NOT NULL,
  `status` int(5) DEFAULT '0',
  `b_name` varchar(250) DEFAULT NULL,
  `b_verion` varchar(250) DEFAULT NULL,
  `p_form` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`patient_id`),
  UNIQUE KEY `url` (`url`),
  KEY `d_id` (`d_id`),
  CONSTRAINT `Patient_ibfk_1` FOREIGN KEY (`d_id`) REFERENCES `Doctors` (`doc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Patient`
--

LOCK TABLES `Patient` WRITE;
/*!40000 ALTER TABLE `Patient` DISABLE KEYS */;
INSERT INTO `Patient` VALUES (1,'wel',1,'wi5rgu',0,'Chrome','83.0410361','Linux x86_64'),(2,'llo',1,'deagzh',0,'Chrome','83.0410361','Linux x86_64'),(3,'welc',1,'rsh8f8',0,'Chrome','83.0410361','Linux x86_64'),(5,'aa',1,'y0g2rl',0,'Chrome','83.0410361','Linux x86_64'),(6,'aaa',1,'exrsc9',0,'Chrome','83.0410361','Linux x86_64'),(7,'www',1,'j6hu9h',0,'Chrome','83.0410361','Linux x86_64'),(8,'well',1,'izdtkc',0,'Chrome','83.0410361','Linux x86_64'),(9,'www',1,'rr7w6i',0,'Chrome','83.0410361','Linux x86_64'),(11,'www',1,'bburpk',0,'Chrome','83.0410361','Linux x86_64'),(12,'www',1,'b2bx89',0,'Chrome','83.0410361','Linux x86_64'),(13,'www',1,'wxktmk',0,'Chrome','83.0410361','Linux x86_64'),(14,'asad',1,'hpfmhq',0,'Chrome','83.0410361','Linux x86_64'),(15,'msgs',1,'9n1u2s',0,'Chrome','83.0410361','Linux x86_64'),(16,'www',1,'ur71v3',0,'Chrome','83.0410361','Linux x86_64'),(17,'www',1,'pxnd9j',0,'Chrome','83.0410361','Linux x86_64'),(18,'www',1,'rurkrt',0,'Chrome','83.0410361','Linux x86_64'),(19,'prasanna',3,'xo1zti',0,'Chrome','83.0410361','Linux x86_64'),(20,'prasa',1,'7v0bef',0,'Chrome','83.0410361','Linux x86_64'),(21,'prasanna',1,'i1fq6c',0,'Chrome','83.0410361','Linux x86_64'),(22,'check',1,'6yyimo',0,'Chrome','83.0410361','Linux x86_64'),(24,'wel',1,'xd3f4k',0,'Chrome','83.0410361','Linux x86_64'),(25,'pat',1,'9l98ip',0,'Chrome','83.0410361','Linux x86_64'),(26,'bella',1,'0pgrke',0,'Chrome','83.0410361','Linux x86_64'),(27,'mtv',1,'mtvr3m',0,'Chrome','83.0410361','Linux x86_64'),(28,'wel',1,'asc0id',0,'Chrome','83.0410361','Linux x86_64'),(29,'bella',1,'jval2a',0,'Chrome','83.0410361','Linux x86_64'),(30,'wel',1,'cvgxsc',0,'Chrome','83.0410361','Linux x86_64'),(31,'welc',1,'isf9ap',0,'Chrome','83.0410361','Linux x86_64'),(32,'www',1,'kf97yj',0,'Chrome','83.0410361','Linux x86_64'),(34,'wel',1,'tlibb8',0,'Chrome','83.0410361','Linux x86_64'),(35,'abcd',1,'fucta4',0,'Chrome','83.0410361','Linux x86_64'),(36,'www',1,'oonral',0,'Chrome','83.0410361','Linux x86_64'),(37,'rahul',1,'sasam5',0,'Firefox','72','Linux x86_64'),(39,'rahul',1,'tfbb15',0,'Firefox','72','Linux x86_64'),(40,'rahul',1,'kgmp9s',0,'Firefox','72','Linux x86_64'),(41,'abcd',1,'515saj',0,'Chrome','83.0410361','Linux x86_64'),(42,'fire',1,'sn39rp',0,'Firefox','76','Linux x86_64');
/*!40000 ALTER TABLE `Patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files_tr`
--

DROP TABLE IF EXISTS `files_tr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `files_tr` (
  `f_id` int(11) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(250) NOT NULL,
  `do_id` int(11) NOT NULL,
  `pa_id` varchar(150) NOT NULL,
  PRIMARY KEY (`f_id`),
  KEY `do_id` (`do_id`),
  CONSTRAINT `files_tr_ibfk_1` FOREIGN KEY (`do_id`) REFERENCES `Doctors` (`doc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files_tr`
--

LOCK TABLES `files_tr` WRITE;
/*!40000 ALTER TABLE `files_tr` DISABLE KEYS */;
INSERT INTO `files_tr` VALUES (1,'2020-06-24T07:15:47.651ZScreenshot from 2020-04-23 11-42-58.png',1,'wi5rgu'),(2,'2020-06-24T07:57:37.002ZScreenshot_from_2020-04-23_11-42-58.png',1,'wi5rgu'),(3,'2020-06-22T13:22:30.989Ztest.txt',1,'wi5rgu'),(4,'2020-06-24T11:56:41.187ZScreenshot_from_2020-05-20_16-20-39.png',1,'rsh8f8'),(5,'2020-06-24T12:11:01.549ZScreenshot_from_2020-04-23_11-52-19.png',1,'y0g2rl'),(6,'2020-07-02T10:26:27.424ZScreenshot_from_2020-04-23_11-42-58.png',1,'fucta4'),(7,'2020-07-02T10:28:59.843ZScreenshot_from_2020-04-23_11-52-19.png',1,'fucta4'),(8,'2020-07-02T10:31:03.025ZScreenshot_from_2020-04-22_11-08-53.png',1,'fucta4'),(9,'2020-07-02T11:08:49.447ZScreenshot_from_2020-04-22_11-08-53.png',1,'oonral'),(10,'2020-07-02T11:09:25.395ZScreenshot_from_2020-04-22_11-08-53.png',1,'oonral');
/*!40000 ALTER TABLE `files_tr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `msgs`
--

DROP TABLE IF EXISTS `msgs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `msgs` (
  `m_id` int(11) NOT NULL AUTO_INCREMENT,
  `msg` varchar(250) NOT NULL,
  `d_id` int(11) NOT NULL,
  `url` varchar(250) NOT NULL,
  PRIMARY KEY (`m_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `msgs`
--

LOCK TABLES `msgs` WRITE;
/*!40000 ALTER TABLE `msgs` DISABLE KEYS */;
INSERT INTO `msgs` VALUES (1,'hrllo',1,'wi5rgu'),(2,'hllo',1,'j6hu9h'),(3,'hie well',1,'izdtkc'),(4,'hie',1,'oonral'),(5,'hie',1,'oonral'),(6,'hie',1,'oonral'),(7,'hie',1,'oonral'),(8,'hie',1,'oonral'),(9,'hie',1,'sasam5'),(10,'hi',1,'sasam5'),(11,'hello',1,'sasam5'),(12,'okay chat is working',1,'sasam5'),(13,'okay chat is working',1,'sasam5'),(14,'okay chat is working',1,'sasam5'),(15,'okay chat is working',1,'sasam5'),(16,'okay chat is working',1,'sasam5'),(17,'okay chat is working',1,'sasam5'),(18,'okay chat is working',1,'sasam5'),(19,'hi',1,'kgmp9s');
/*!40000 ALTER TABLE `msgs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal`
--

DROP TABLE IF EXISTS `personal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal` (
  `p_id` int(11) NOT NULL AUTO_INCREMENT,
  `dsp_name` varchar(250) NOT NULL,
  `special` varchar(250) NOT NULL,
  `position` varchar(250) NOT NULL,
  `NPI` varchar(250) NOT NULL,
  `provider` varchar(250) NOT NULL,
  `language` varchar(250) NOT NULL,
  `d_id` int(11) NOT NULL,
  PRIMARY KEY (`p_id`),
  UNIQUE KEY `d_id` (`d_id`),
  CONSTRAINT `personal_ibfk_1` FOREIGN KEY (`d_id`) REFERENCES `Doctors` (`doc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal`
--

LOCK TABLES `personal` WRITE;
/*!40000 ALTER TABLE `personal` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room` (
  `r_id` int(11) NOT NULL AUTO_INCREMENT,
  `profile_pic` varchar(250) NOT NULL,
  `d_name` varchar(250) NOT NULL,
  `cam_pre` varchar(250) NOT NULL,
  `room_pass` varchar(250) NOT NULL,
  `c_term` varchar(250) NOT NULL,
  `d_id` int(11) NOT NULL,
  PRIMARY KEY (`r_id`),
  UNIQUE KEY `d_id` (`d_id`),
  CONSTRAINT `room_ibfk_1` FOREIGN KEY (`d_id`) REFERENCES `Doctors` (`doc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timing`
--

DROP TABLE IF EXISTS `timing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `timing` (
  `call_id` int(11) NOT NULL AUTO_INCREMENT,
  `p_id` int(11) NOT NULL,
  `d_id` int(11) NOT NULL,
  `call_start` text,
  `call_end` text,
  PRIMARY KEY (`call_id`),
  KEY `d_id` (`d_id`),
  KEY `p_id` (`p_id`),
  CONSTRAINT `timing_ibfk_1` FOREIGN KEY (`d_id`) REFERENCES `Doctors` (`doc_id`),
  CONSTRAINT `timing_ibfk_2` FOREIGN KEY (`p_id`) REFERENCES `Patient` (`patient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timing`
--

LOCK TABLES `timing` WRITE;
/*!40000 ALTER TABLE `timing` DISABLE KEYS */;
INSERT INTO `timing` VALUES (1,1,1,'2020-6-20 16:39:49',NULL),(2,2,1,'2020-6-20 16:45:40','2020-6-20 16:46:32'),(3,3,1,'2020-6-24 17:26:10','2020-6-24 17:31:12'),(4,5,1,'2020-6-24 17:40:37',NULL),(5,7,1,'2020-6-24 17:46:37','2020-6-24 17:53:5'),(6,13,1,'2020-6-25 16:44:13','2020-6-25 16:44:20'),(7,19,3,'2020-6-29 21:57:24','2020-6-30 7:45:53'),(8,19,3,'2020-6-29 22:6:45','2020-6-30 7:45:53'),(9,20,1,'2020-6-30 14:59:33','2020-6-30 15:0:20'),(10,39,1,'2020-7-2 17:43:0','2020-7-2 17:45:12'),(11,40,1,'2020-7-2 17:46:40','2020-7-2 17:47:15');
/*!40000 ALTER TABLE `timing` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-28  4:25:50
