/*
SQLyog Ultimate v11.3 (64 bit)
MySQL - 5.7.32-log : Database - ssmp47a3
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`ssmp47a3` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `ssmp47a3`;

/*Table structure for table `config` */

DROP TABLE IF EXISTS `config`;

CREATE TABLE `config` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(100) NOT NULL COMMENT '配置参数名称',
  `value` varchar(100) DEFAULT NULL COMMENT '配置参数值',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='配置文件';

/*Data for the table `config` */

insert  into `config`(`id`,`name`,`value`) values (1,'picture1','http://localhost:8080/ssmp47a3/upload/picture1.jpg'),(2,'picture2','http://localhost:8080/ssmp47a3/upload/picture2.jpg'),(3,'picture3','http://localhost:8080/ssmp47a3/upload/picture3.jpg'),(6,'homepage',NULL);

/*Table structure for table `discusskechengxinxi` */

DROP TABLE IF EXISTS `discusskechengxinxi`;

CREATE TABLE `discusskechengxinxi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `refid` bigint(20) NOT NULL COMMENT '关联表id',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `nickname` varchar(200) DEFAULT NULL COMMENT '用户名',
  `content` longtext NOT NULL COMMENT '评论内容',
  `reply` longtext COMMENT '回复内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1615441245013 DEFAULT CHARSET=utf8 COMMENT='课程信息评论表';

/*Data for the table `discusskechengxinxi` */

insert  into `discusskechengxinxi`(`id`,`addtime`,`refid`,`userid`,`nickname`,`content`,`reply`) values (111,'2021-03-11 13:14:03',1,1,'用户名1','评论内容1','回复内容1'),(112,'2021-03-11 13:14:03',2,2,'用户名2','评论内容2','回复内容2'),(113,'2021-03-11 13:14:03',3,3,'用户名3','评论内容3','回复内容3'),(114,'2021-03-11 13:14:03',4,4,'用户名4','评论内容4','回复内容4'),(115,'2021-03-11 13:14:03',5,5,'用户名5','评论内容5','回复内容5'),(116,'2021-03-11 13:14:03',6,6,'用户名6','评论内容6','回复内容6'),(1615441245012,'2021-03-11 13:40:44',41,1615441175627,'001','211221','');

/*Table structure for table `discusswenzhangxinxi` */

DROP TABLE IF EXISTS `discusswenzhangxinxi`;

CREATE TABLE `discusswenzhangxinxi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `refid` bigint(20) NOT NULL COMMENT '关联表id',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `nickname` varchar(200) DEFAULT NULL COMMENT '用户名',
  `content` longtext NOT NULL COMMENT '评论内容',
  `reply` longtext COMMENT '回复内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1615441266572 DEFAULT CHARSET=utf8 COMMENT='文章信息评论表';

/*Data for the table `discusswenzhangxinxi` */

insert  into `discusswenzhangxinxi`(`id`,`addtime`,`refid`,`userid`,`nickname`,`content`,`reply`) values (131,'2021-03-11 13:14:03',1,1,'用户名1','评论内容1','回复内容1'),(132,'2021-03-11 13:14:03',2,2,'用户名2','评论内容2','回复内容2'),(133,'2021-03-11 13:14:03',3,3,'用户名3','评论内容3','回复内容3'),(134,'2021-03-11 13:14:03',4,4,'用户名4','评论内容4','回复内容4'),(135,'2021-03-11 13:14:03',5,5,'用户名5','评论内容5','回复内容5'),(136,'2021-03-11 13:14:03',6,6,'用户名6','评论内容6','回复内容6'),(1615441266571,'2021-03-11 13:41:06',81,1615441175627,'001','2112','');

/*Table structure for table `discusszuoyexinxi` */

DROP TABLE IF EXISTS `discusszuoyexinxi`;

CREATE TABLE `discusszuoyexinxi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `refid` bigint(20) NOT NULL COMMENT '关联表id',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `nickname` varchar(200) DEFAULT NULL COMMENT '用户名',
  `content` longtext NOT NULL COMMENT '评论内容',
  `reply` longtext COMMENT '回复内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8 COMMENT='作业信息评论表';

/*Data for the table `discusszuoyexinxi` */

insert  into `discusszuoyexinxi`(`id`,`addtime`,`refid`,`userid`,`nickname`,`content`,`reply`) values (121,'2021-03-11 13:14:03',1,1,'用户名1','评论内容1','回复内容1'),(122,'2021-03-11 13:14:03',2,2,'用户名2','评论内容2','回复内容2'),(123,'2021-03-11 13:14:03',3,3,'用户名3','评论内容3','回复内容3'),(124,'2021-03-11 13:14:03',4,4,'用户名4','评论内容4','回复内容4'),(125,'2021-03-11 13:14:03',5,5,'用户名5','评论内容5','回复内容5'),(126,'2021-03-11 13:14:03',6,6,'用户名6','评论内容6','回复内容6');

/*Table structure for table `forum` */

DROP TABLE IF EXISTS `forum`;

CREATE TABLE `forum` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `title` varchar(200) DEFAULT NULL COMMENT '帖子标题',
  `content` longtext NOT NULL COMMENT '帖子内容',
  `parentid` bigint(20) DEFAULT NULL COMMENT '父节点id',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `username` varchar(200) DEFAULT NULL COMMENT '用户名',
  `isdone` varchar(200) DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1615441408978 DEFAULT CHARSET=utf8 COMMENT='论坛表';

/*Data for the table `forum` */

insert  into `forum`(`id`,`addtime`,`title`,`content`,`parentid`,`userid`,`username`,`isdone`) values (92,'2021-03-11 13:14:03','帖子标题2','帖子内容2',2,2,'用户名2','开放'),(93,'2021-03-11 13:14:03','帖子标题3','帖子内容3',3,3,'用户名3','开放'),(94,'2021-03-11 13:14:03','帖子标题4','帖子内容4',4,4,'用户名4','开放'),(95,'2021-03-11 13:14:03','帖子标题5','帖子内容5',5,5,'用户名5','开放'),(96,'2021-03-11 13:14:03','帖子标题6','帖子内容6',6,6,'用户名6','开放'),(1615441395024,'2021-03-11 13:43:14','1221','<p>122112</p>',0,1615441175627,'001','开放'),(1615441408977,'2021-03-11 13:43:28',NULL,'用户可以在这里发帖交流',1615441395024,1615441175627,'001',NULL);

/*Table structure for table `jiangshi` */

DROP TABLE IF EXISTS `jiangshi`;

CREATE TABLE `jiangshi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gonghao` varchar(200) NOT NULL COMMENT '工号',
  `mima` varchar(200) NOT NULL COMMENT '密码',
  `jiaoshixingming` varchar(200) DEFAULT NULL COMMENT '教师姓名',
  `xingbie` varchar(200) DEFAULT NULL COMMENT '性别',
  `touxiang` varchar(200) DEFAULT NULL COMMENT '头像',
  `banji` varchar(200) DEFAULT NULL COMMENT '班级',
  `dianhua` varchar(200) DEFAULT NULL COMMENT '电话',
  PRIMARY KEY (`id`),
  UNIQUE KEY `gonghao` (`gonghao`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COMMENT='讲师';

/*Data for the table `jiangshi` */

insert  into `jiangshi`(`id`,`addtime`,`gonghao`,`mima`,`jiaoshixingming`,`xingbie`,`touxiang`,`banji`,`dianhua`) values (21,'2021-03-11 13:14:03','1','1','王老师','男','http://localhost:8080/ssmp47a3/upload/jiangshi_touxiang1.jpg','班级1','13823888881'),(22,'2021-03-11 13:14:03','讲师2','123456','教师姓名2','男','http://localhost:8080/ssmp47a3/upload/jiangshi_touxiang2.jpg','班级2','13823888882'),(23,'2021-03-11 13:14:03','讲师3','123456','教师姓名3','男','http://localhost:8080/ssmp47a3/upload/jiangshi_touxiang3.jpg','班级3','13823888883'),(24,'2021-03-11 13:14:03','讲师4','123456','教师姓名4','男','http://localhost:8080/ssmp47a3/upload/jiangshi_touxiang4.jpg','班级4','13823888884'),(25,'2021-03-11 13:14:03','讲师5','123456','教师姓名5','男','http://localhost:8080/ssmp47a3/upload/jiangshi_touxiang5.jpg','班级5','13823888885'),(26,'2021-03-11 13:14:03','讲师6','123456','教师姓名6','男','http://localhost:8080/ssmp47a3/upload/jiangshi_touxiang6.jpg','班级6','13823888886');

/*Table structure for table `kechenggoumai` */

DROP TABLE IF EXISTS `kechenggoumai`;

CREATE TABLE `kechenggoumai` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `dingdanbianhao` varchar(200) DEFAULT NULL COMMENT '订单编号',
  `kechengmingcheng` varchar(200) DEFAULT NULL COMMENT '课程名称',
  `kechengleixing` varchar(200) DEFAULT NULL COMMENT '课程类型',
  `gonghao` varchar(200) DEFAULT NULL COMMENT '工号',
  `fengmian` varchar(200) DEFAULT NULL COMMENT '封面',
  `jiage` varchar(200) DEFAULT NULL COMMENT '价格',
  `goumairiqi` date DEFAULT NULL COMMENT '购买日期',
  `xuehao` varchar(200) DEFAULT NULL COMMENT '学号',
  `xueshengxingming` varchar(200) DEFAULT NULL COMMENT '学生姓名',
  `shouji` varchar(200) DEFAULT NULL COMMENT '手机',
  `ispay` varchar(200) DEFAULT '未支付' COMMENT '是否支付',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  PRIMARY KEY (`id`),
  UNIQUE KEY `dingdanbianhao` (`dingdanbianhao`)
) ENGINE=InnoDB AUTO_INCREMENT=1615441241316 DEFAULT CHARSET=utf8 COMMENT='课程购买';

/*Data for the table `kechenggoumai` */

insert  into `kechenggoumai`(`id`,`addtime`,`dingdanbianhao`,`kechengmingcheng`,`kechengleixing`,`gonghao`,`fengmian`,`jiage`,`goumairiqi`,`xuehao`,`xueshengxingming`,`shouji`,`ispay`,`userid`) values (51,'2021-03-11 13:14:03','订单编号1','课程名称1','课程类型1','工号1','http://localhost:8080/ssmp47a3/upload/kechenggoumai_fengmian1.jpg','价格1','2021-03-11','学号1','学生姓名1','手机1','未支付',1),(52,'2021-03-11 13:14:03','订单编号2','课程名称2','课程类型2','工号2','http://localhost:8080/ssmp47a3/upload/kechenggoumai_fengmian2.jpg','价格2','2021-03-11','学号2','学生姓名2','手机2','未支付',2),(53,'2021-03-11 13:14:03','订单编号3','课程名称3','课程类型3','工号3','http://localhost:8080/ssmp47a3/upload/kechenggoumai_fengmian3.jpg','价格3','2021-03-11','学号3','学生姓名3','手机3','未支付',3),(54,'2021-03-11 13:14:03','订单编号4','课程名称4','课程类型4','工号4','http://localhost:8080/ssmp47a3/upload/kechenggoumai_fengmian4.jpg','价格4','2021-03-11','学号4','学生姓名4','手机4','未支付',4),(55,'2021-03-11 13:14:03','订单编号5','课程名称5','课程类型5','工号5','http://localhost:8080/ssmp47a3/upload/kechenggoumai_fengmian5.jpg','价格5','2021-03-11','学号5','学生姓名5','手机5','未支付',5),(56,'2021-03-11 13:14:03','订单编号6','课程名称6','课程类型6','工号6','http://localhost:8080/ssmp47a3/upload/kechenggoumai_fengmian6.jpg','价格6','2021-03-11','学号6','学生姓名6','手机6','未支付',6),(1615441241315,'2021-03-11 13:40:40','1615441235946','XX课程','动漫插画','1','http://localhost:8080/ssmp47a3/upload/kechengxinxi_fengmian1.jpg','150','2021-03-11','001','旺旺','15214121411','已支付',1615441175627);

/*Table structure for table `kechengleixing` */

DROP TABLE IF EXISTS `kechengleixing`;

CREATE TABLE `kechengleixing` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `kechengleixing` varchar(200) NOT NULL COMMENT '课程类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1615441587016 DEFAULT CHARSET=utf8 COMMENT='课程类型';

/*Data for the table `kechengleixing` */

insert  into `kechengleixing`(`id`,`addtime`,`kechengleixing`) values (1615440213446,'2021-03-11 13:23:33','动漫插画'),(1615440222871,'2021-03-11 13:23:42','古风插画'),(1615440229901,'2021-03-11 13:23:49','水彩绘画');

/*Table structure for table `kechengxinxi` */

DROP TABLE IF EXISTS `kechengxinxi`;

CREATE TABLE `kechengxinxi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `kechengmingcheng` varchar(200) NOT NULL COMMENT '课程名称',
  `kechengleixing` varchar(200) NOT NULL COMMENT '课程类型',
  `fengmian` varchar(200) DEFAULT NULL COMMENT '封面',
  `shizhang` varchar(200) NOT NULL COMMENT '时长',
  `jiage` int(11) NOT NULL COMMENT '价格',
  `faburiqi` date DEFAULT NULL COMMENT '发布日期',
  `kechengxiangqing` longtext COMMENT '课程详情',
  `gonghao` varchar(200) DEFAULT NULL COMMENT '工号',
  `jiaoshixingming` varchar(200) DEFAULT NULL COMMENT '教师姓名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8 COMMENT='课程信息';

/*Data for the table `kechengxinxi` */

insert  into `kechengxinxi`(`id`,`addtime`,`kechengmingcheng`,`kechengleixing`,`fengmian`,`shizhang`,`jiage`,`faburiqi`,`kechengxiangqing`,`gonghao`,`jiaoshixingming`) values (41,'2021-03-11 13:14:03','XX课程','动漫插画','http://localhost:8080/ssmp47a3/upload/kechengxinxi_fengmian1.jpg','60分钟',150,'2021-03-01','<p><img src=\"http://localhost:8080/ssmp47a3/upload/1615440153810.jpg\"></p><p>这里可以发布一些课程详细信息21212212</p><p>课程详情1</p>','1','王老师'),(42,'2021-03-11 13:14:03','课程名称2','古风插画','http://localhost:8080/ssmp47a3/upload/kechengxinxi_fengmian2.jpg','时长2',2,'2021-03-11','<p>课程详情2</p>','工号2','教师姓名2'),(43,'2021-03-11 13:14:03','课程名称3','水彩绘画','http://localhost:8080/ssmp47a3/upload/kechengxinxi_fengmian3.jpg','时长3',3,'2021-03-11','<p>课程详情3</p>','工号3','教师姓名3'),(44,'2021-03-11 13:14:03','课程名称4','动漫插画','http://localhost:8080/ssmp47a3/upload/kechengxinxi_fengmian4.jpg','时长4',4,'2021-03-11','<p>课程详情4</p>','工号4','教师姓名4'),(45,'2021-03-11 13:14:03','课程名称5','古风插画','http://localhost:8080/ssmp47a3/upload/kechengxinxi_fengmian5.jpg','时长5',5,'2021-03-11','<p>课程详情5</p>','工号5','教师姓名5'),(46,'2021-03-11 13:14:03','课程名称6','水彩绘画','http://localhost:8080/ssmp47a3/upload/kechengxinxi_fengmian6.jpg','时长6',6,'2021-03-11','<p>课程详情6</p>','工号6','教师姓名6');

/*Table structure for table `storeup` */

DROP TABLE IF EXISTS `storeup`;

CREATE TABLE `storeup` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `refid` bigint(20) DEFAULT NULL COMMENT '收藏id',
  `tablename` varchar(200) DEFAULT NULL COMMENT '表名',
  `name` varchar(200) NOT NULL COMMENT '收藏名称',
  `picture` varchar(200) NOT NULL COMMENT '收藏图片',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1615441255872 DEFAULT CHARSET=utf8 COMMENT='收藏表';

/*Data for the table `storeup` */

insert  into `storeup`(`id`,`addtime`,`userid`,`refid`,`tablename`,`name`,`picture`) values (1615441232707,'2021-03-11 13:40:31',1615441175627,41,'kechengxinxi','XX课程','http://localhost:8080/ssmp47a3/upload/kechengxinxi_fengmian1.jpg'),(1615441255871,'2021-03-11 13:40:54',1615441175627,81,'wenzhangxinxi','XX文章','http://localhost:8080/ssmp47a3/upload/wenzhangxinxi_wenzhangtupian1.jpg');

/*Table structure for table `token` */

DROP TABLE IF EXISTS `token`;

CREATE TABLE `token` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `tablename` varchar(100) DEFAULT NULL COMMENT '表名',
  `role` varchar(100) DEFAULT NULL COMMENT '角色',
  `token` varchar(200) NOT NULL COMMENT '密码',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增时间',
  `expiratedtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '过期时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='token表';

/*Data for the table `token` */

insert  into `token`(`id`,`userid`,`username`,`tablename`,`role`,`token`,`addtime`,`expiratedtime`) values (1,1,'abo','users','管理员','wz813e3fdshtbeazvi45lwvqsnns64tz','2021-03-11 13:16:02','2021-03-11 14:45:40'),(2,21,'1','jiangshi','讲师','pp76kg7sr1ub3pbszuwgb0lqdzxpl6t9','2021-03-11 13:16:06','2021-03-11 14:47:50'),(3,11,'1','xuesheng','学生','pwfvo72xby010bdnoap32y3tdr5tvdvk','2021-03-11 13:16:49','2021-03-11 14:17:08'),(4,1615441175627,'001','xuesheng','学生','wjo6x2xjz7rq0czeldlcoyzhyapwtxx6','2021-03-11 13:39:47','2021-03-11 14:39:48');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `role` varchar(100) DEFAULT '管理员' COMMENT '角色',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户表';

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`password`,`role`,`addtime`) values (1,'abo','abo','管理员','2021-03-11 13:14:03');

/*Table structure for table `wenzhangxinxi` */

DROP TABLE IF EXISTS `wenzhangxinxi`;

CREATE TABLE `wenzhangxinxi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `wenzhangbiaoti` varchar(200) NOT NULL COMMENT '文章标题',
  `wenzhangtupian` varchar(200) DEFAULT NULL COMMENT '文章图片',
  `jianshu` varchar(200) DEFAULT NULL COMMENT '简述',
  `wenzhangneirong` longtext COMMENT '文章内容',
  `fabushijian` datetime DEFAULT NULL COMMENT '发布时间',
  `gonghao` varchar(200) DEFAULT NULL COMMENT '工号',
  `jiaoshixingming` varchar(200) DEFAULT NULL COMMENT '教师姓名',
  `thumbsupnum` int(11) DEFAULT '0' COMMENT '赞',
  `crazilynum` int(11) DEFAULT '0' COMMENT '踩',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8 COMMENT='文章信息';

/*Data for the table `wenzhangxinxi` */

insert  into `wenzhangxinxi`(`id`,`addtime`,`wenzhangbiaoti`,`wenzhangtupian`,`jianshu`,`wenzhangneirong`,`fabushijian`,`gonghao`,`jiaoshixingming`,`thumbsupnum`,`crazilynum`) values (81,'2021-03-11 13:14:03','XX文章','http://localhost:8080/ssmp47a3/upload/wenzhangxinxi_wenzhangtupian1.jpg','11112122122','<p><img src=\"http://localhost:8080/ssmp47a3/upload/1615440178761.jpg\"></p><p>这里可以发布一些文章相关内容给用户解答那些都可以</p>','2021-03-01 13:14:03','1','王老师',2,2),(82,'2021-03-11 13:14:03','文章标题2','http://localhost:8080/ssmp47a3/upload/wenzhangxinxi_wenzhangtupian2.jpg','简述2','文章内容2','2021-03-11 13:14:03','工号2','教师姓名2',2,2),(83,'2021-03-11 13:14:03','文章标题3','http://localhost:8080/ssmp47a3/upload/wenzhangxinxi_wenzhangtupian3.jpg','简述3','文章内容3','2021-03-11 13:14:03','工号3','教师姓名3',3,3),(84,'2021-03-11 13:14:03','文章标题4','http://localhost:8080/ssmp47a3/upload/wenzhangxinxi_wenzhangtupian4.jpg','简述4','文章内容4','2021-03-11 13:14:03','工号4','教师姓名4',4,4),(85,'2021-03-11 13:14:03','文章标题5','http://localhost:8080/ssmp47a3/upload/wenzhangxinxi_wenzhangtupian5.jpg','简述5','文章内容5','2021-03-11 13:14:03','工号5','教师姓名5',5,5),(86,'2021-03-11 13:14:03','文章标题6','http://localhost:8080/ssmp47a3/upload/wenzhangxinxi_wenzhangtupian6.jpg','简述6','文章内容6','2021-03-11 13:14:03','工号6','教师姓名6',6,6);

/*Table structure for table `xuesheng` */

DROP TABLE IF EXISTS `xuesheng`;

CREATE TABLE `xuesheng` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `xuehao` varchar(200) NOT NULL COMMENT '学号',
  `mima` varchar(200) NOT NULL COMMENT '密码',
  `xueshengxingming` varchar(200) NOT NULL COMMENT '学生姓名',
  `xingbie` varchar(200) DEFAULT NULL COMMENT '性别',
  `touxiang` varchar(200) DEFAULT NULL COMMENT '头像',
  `banji` varchar(200) DEFAULT NULL COMMENT '班级',
  `shouji` varchar(200) DEFAULT NULL COMMENT '手机',
  PRIMARY KEY (`id`),
  UNIQUE KEY `xuehao` (`xuehao`)
) ENGINE=InnoDB AUTO_INCREMENT=1615441175628 DEFAULT CHARSET=utf8 COMMENT='学生';

/*Data for the table `xuesheng` */

insert  into `xuesheng`(`id`,`addtime`,`xuehao`,`mima`,`xueshengxingming`,`xingbie`,`touxiang`,`banji`,`shouji`) values (11,'2021-03-11 13:14:03','1','1','学生姓名1','男','http://localhost:8080/ssmp47a3/upload/xuesheng_touxiang1.jpg','班级1','13823888881'),(12,'2021-03-11 13:14:03','学生2','123456','学生姓名2','男','http://localhost:8080/ssmp47a3/upload/xuesheng_touxiang2.jpg','班级2','13823888882'),(13,'2021-03-11 13:14:03','学生3','123456','学生姓名3','男','http://localhost:8080/ssmp47a3/upload/xuesheng_touxiang3.jpg','班级3','13823888883'),(14,'2021-03-11 13:14:03','学生4','123456','学生姓名4','男','http://localhost:8080/ssmp47a3/upload/xuesheng_touxiang4.jpg','班级4','13823888884'),(15,'2021-03-11 13:14:03','学生5','123456','学生姓名5','男','http://localhost:8080/ssmp47a3/upload/xuesheng_touxiang5.jpg','班级5','13823888885'),(16,'2021-03-11 13:14:03','学生6','123456','学生姓名6','男','http://localhost:8080/ssmp47a3/upload/xuesheng_touxiang6.jpg','班级6','13823888886'),(1615441175627,'2021-03-11 13:39:35','001','001','旺旺','男','http://localhost:8080/ssmp47a3/upload/1615441214759.png','计算机','15214121411');

/*Table structure for table `zuoyeleixing` */

DROP TABLE IF EXISTS `zuoyeleixing`;

CREATE TABLE `zuoyeleixing` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `bianhao` varchar(200) DEFAULT NULL COMMENT '编号',
  `zuoyeleixing` varchar(200) NOT NULL COMMENT '作业类型',
  PRIMARY KEY (`id`),
  UNIQUE KEY `bianhao` (`bianhao`)
) ENGINE=InnoDB AUTO_INCREMENT=1615441609713 DEFAULT CHARSET=utf8 COMMENT='作业类型';

/*Data for the table `zuoyeleixing` */

insert  into `zuoyeleixing`(`id`,`addtime`,`bianhao`,`zuoyeleixing`) values (1615440240898,'2021-03-11 13:24:00','1615440236915','动漫'),(1615440246913,'2021-03-11 13:24:06','1615440242842','古风'),(1615440253004,'2021-03-11 13:24:12','1615440248110','漫画'),(1615441609712,'2021-03-11 13:46:49','1615441606869','12');

/*Table structure for table `zuoyexinxi` */

DROP TABLE IF EXISTS `zuoyexinxi`;

CREATE TABLE `zuoyexinxi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `zuoyebianhao` varchar(200) NOT NULL COMMENT '作业编号',
  `zuoyetimu` varchar(200) NOT NULL COMMENT '作业题目',
  `zuoyeleixing` varchar(200) NOT NULL COMMENT '作业类型',
  `tupian` varchar(200) DEFAULT NULL COMMENT '图片',
  `banji` varchar(200) NOT NULL COMMENT '班级',
  `zuoyeneirong` longtext COMMENT '作业内容',
  `shijian` date DEFAULT NULL COMMENT '时间',
  `xuehao` varchar(200) DEFAULT NULL COMMENT '学号',
  `xueshengxingming` varchar(200) DEFAULT NULL COMMENT '学生姓名',
  `thumbsupnum` int(11) DEFAULT '0' COMMENT '赞',
  `crazilynum` int(11) DEFAULT '0' COMMENT '踩',
  PRIMARY KEY (`id`),
  UNIQUE KEY `zuoyebianhao` (`zuoyebianhao`)
) ENGINE=InnoDB AUTO_INCREMENT=1615441357177 DEFAULT CHARSET=utf8 COMMENT='作业信息';

/*Data for the table `zuoyexinxi` */

insert  into `zuoyexinxi`(`id`,`addtime`,`zuoyebianhao`,`zuoyetimu`,`zuoyeleixing`,`tupian`,`banji`,`zuoyeneirong`,`shijian`,`xuehao`,`xueshengxingming`,`thumbsupnum`,`crazilynum`) values (71,'2021-03-11 13:14:03','作业编号1','作业题目1','动漫','http://localhost:8080/ssmp47a3/upload/zuoyexinxi_tupian1.jpg','班级1','作业内容1','2021-03-11','学号1','学生姓名1',1,1),(72,'2021-03-11 13:14:03','作业编号2','作业题目2','古风','http://localhost:8080/ssmp47a3/upload/zuoyexinxi_tupian2.jpg','班级2','作业内容2','2021-03-11','学号2','学生姓名2',2,2),(73,'2021-03-11 13:14:03','作业编号3','作业题目3','漫画','http://localhost:8080/ssmp47a3/upload/zuoyexinxi_tupian3.jpg','班级3','作业内容3','2021-03-11','学号3','学生姓名3',3,3),(74,'2021-03-11 13:14:03','作业编号4','作业题目4','动漫','http://localhost:8080/ssmp47a3/upload/zuoyexinxi_tupian4.jpg','班级4','作业内容4','2021-03-11','学号4','学生姓名4',4,4),(75,'2021-03-11 13:14:03','作业编号5','作业题目5','古风','http://localhost:8080/ssmp47a3/upload/zuoyexinxi_tupian5.jpg','班级5','作业内容5','2021-03-11','学号5','学生姓名5',5,5),(76,'2021-03-11 13:14:03','作业编号6','作业题目6','漫画','http://localhost:8080/ssmp47a3/upload/zuoyexinxi_tupian6.jpg','班级6','作业内容6','2021-03-11','学号6','学生姓名6',6,6),(1615441357176,'2021-03-11 13:42:36','11111','漫画作业','漫画','http://localhost:8080/ssmp47a3/upload/1615441351769.jpg','计算机','21222121','2021-03-11','001','旺旺',1,1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
