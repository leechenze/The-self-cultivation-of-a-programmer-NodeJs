/*
 * @Author: your name
 * @Date: 2021-04-05 15:25:40
 * @LastEditTime: 2021-04-05 17:14:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /The-self-cultivation-of-a-programmer-NodeJs/NodeJs/12数据库/index.js
 */

let mysql = require('mysql');

let options = {
    host: '127.0.0.1',
    port: '3306',// 默认值既3306
    user: 'root',
    password: 'lcz19930316',
    // database: 'test_test'
    database: 'shop'
}

// 创建与数据库的连接对象
let sqlCon = mysql.createConnection(options);

// 数据库连接
sqlCon.connect((err) => {
    // 建立连接失败
    if (err) {
        console.log('连接失败');
        throw Error(err);
    } else {
        console.log('连接成功');
    }
});

// 执行数据库语句
// 查询表
// let queryTableSql = 'select * from student';
// sqlCon.query(queryTableSql, (err, res, fields) => {
//     // 回掉参数(错误信息, 结果信息, 字段信息);
//     if (err) {
//         console.log(err)
//     }
//     console.log(err)
//     console.log(res)
//     console.log(fields)
// });
// 删除表
// let delTableSql = 'drop table student';
// sqlCon.query(delTableSql, (err, res) => {
//     console.log(err)
//     console.log(res)
// })
// 删除库
// let delDatabaseSql = 'drop database test_test';
// sqlCon.query(delDatabaseSql, (err, res) => {
//     console.log(err)
//     console.log(res)
// })
// 创建库
// let createDatabaseSql = 'create database shop';
// sqlCon.query(createDatabaseSql, (err, res) => {
//     console.log(err)
//     console.log(res)
// })
// 创建表
// let createTableSql = 'CREATE TABLE `user`  (    `id` int(0) NULL,    `username` varchar(255) NULL,    `password` varchar(255) NULL,    `mail` varchar(255) NULL);';
// sqlCon.query(createTableSql, (err, res) => {
//     console.log(err)
//     console.log(res)
// })
// 插入数据
// let insertDataSql = 'insert into user (id,username,password,mail) values (1,"leecz","123456","10001@qq.com")';
// sqlCon.query(insertDataSql, (err, res) => {
//     console.log(err)
//     console.log(res)
// })
// 插入数据1
// let insertDataSql1 = 'insert into user (id,username,password,mail) values (1,?,?,?)';
// sqlCon.query(insertDataSql1, ['lincoln', '11111', 'lincoln@gmail.com'], (err, res) => {
//     console.log(err)
//     console.log(res)
// })