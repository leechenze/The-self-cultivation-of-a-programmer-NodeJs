/*
 * @Author: your name
 * @Date: 2021-04-15 22:35:29
 * @LastEditTime: 2021-04-15 23:21:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /The-self-cultivation-of-a-programmer-NodeJs/NodeJs/Basic/CommonJs-SysModules-CustomModules/index.js
 */

const http = require('http');
const url = require('url');
// const tools = require('./node_modules/tools/index');
const tools = require('tools');
// const axios = require('./node_modules/axios/index');
const axios = require('axios');
// const custom = require('./node_modules/custom/index');
const custom = require('custom');

/**
 * @description: 
 * @param {*}
 * @return {*}
 */
http.createServer((request, response) => {

    response.writeHead(200, {'Content-Type':'text/html;charset="utf-8"'});
    response.write('你好,世界');
    response.end();

}).listen(8080);

console.log(tools);
console.log(axios);

console.log('================');
console.log(custom);
console.log(custom.custom());
console.log('================');

console.log('server running at http://127.0.0.1:8080');

