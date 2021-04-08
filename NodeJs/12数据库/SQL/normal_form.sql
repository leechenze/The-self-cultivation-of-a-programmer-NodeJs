/*
 Navicat Premium Data Transfer

 Source Server         : mysqlTest
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : 127.0.0.1:3306
 Source Schema         : normal_form

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 08/04/2021 23:43:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int NOT NULL,
  `studentname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `studentage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of student
-- ----------------------------
BEGIN;
INSERT INTO `student` VALUES (1, 'trump', '74');
INSERT INTO `student` VALUES (2, 'obama', '70');
COMMIT;

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `id` int NOT NULL,
  `teacher` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `project` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of teacher
-- ----------------------------
BEGIN;
INSERT INTO `teacher` VALUES (1, 'lincoln', 'java');
INSERT INTO `teacher` VALUES (2, 'douglas', 'javascript');
COMMIT;

-- ----------------------------
-- Table structure for teacher_student
-- ----------------------------
DROP TABLE IF EXISTS `teacher_student`;
CREATE TABLE `teacher_student` (
  `teacherId` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `studentId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of teacher_student
-- ----------------------------
BEGIN;
INSERT INTO `teacher_student` VALUES ('1', 1);
INSERT INTO `teacher_student` VALUES ('1', 2);
INSERT INTO `teacher_student` VALUES ('2', 1);
INSERT INTO `teacher_student` VALUES ('2', 2);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
