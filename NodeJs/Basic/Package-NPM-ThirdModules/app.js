/*
 * @Author: your name
 * @Date: 2021-04-18 17:49:28
 * @LastEditTime: 2021-04-18 17:58:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /The-self-cultivation-of-a-programmer-NodeJs/NodeJs/Basic/Package-NPM-ThirdModules/app.js
 */

// md5 加密 123456
// cnpm install md5 --save
let md5 = require('md5');
console.log(md5('123456'));

// 
let sd = require('silly-datetime');
let result = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
console.log(result);