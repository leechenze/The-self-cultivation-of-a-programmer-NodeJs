/*
 * @Author: your name
 * @Date: 2021-04-11 20:30:43
 * @LastEditTime: 2021-04-11 20:34:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /The-self-cultivation-of-a-programmer-NodeJs/NodeJs/Basic/HTTP-URL-Supervisor/app.js
 */

const http = require('http');
const url = require('url');


/**
 * @description: 
 * @param {*}
 * @return {*}
 */
http.createServer((request, response) => {

    if (request.url != '/favicon.ico') {
        let getParam = url.parse(request.url, true).query;
        console.log(`姓名:${getParam.name}    ======    年龄:${getParam.age}`)
    }

    response.end();

}).listen(8080);

console.log('server running at http://127.0.0.1:8080');

