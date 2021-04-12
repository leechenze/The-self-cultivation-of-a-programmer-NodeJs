/*
 * @Author: your name
 * @Date: 2021-04-11 19:46:27
 * @LastEditTime: 2021-04-11 20:27:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /The-self-cultivation-of-a-programmer-NodeJs/NodeJs/Basic/HTTP&URL&Supervisor/app.js
 */

const http = require('http');
/**
 * @description: 
 * @param {*}
 * @return {*}
 */
http.createServer((request,response) => {
    console.log(request.url);
    response.writeHead(200, {'Content-Type':'text/html;charset="utf-8"'});
    response.write('你好,世界');
    response.end();
}).listen(8080);

console.log('server running at http://127.0.0.1:8080');

