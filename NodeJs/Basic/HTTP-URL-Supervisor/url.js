/*
 * @Author: your name
 * @Date: 2021-04-11 20:25:17
 * @LastEditTime: 2021-04-11 20:33:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /The-self-cultivation-of-a-programmer-NodeJs/NodeJs/Basic/HTTP-URL-Supervisor/url.js
 */

const url = require('url');
const api = 'http://127.0.0.1:8080?name=clinton&age=99';

console.log(url.parse(api, true));

// const getValue = url.parse(api, false).query;
const getValue = url.parse(api, true).query;

console.log(getValue);

console.log(`姓名:${getValue.name}    ======    年龄:${getValue.age}`)