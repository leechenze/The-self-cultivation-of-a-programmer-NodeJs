/*
 * @Author: your name
 * @Date: 2021-01-11 11:11:58
 * @LastEditTime: 2021-05-03 11:41:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /The-self-cultivation-of-a-programmer-NodeJs/NodeJs/Basic/ExpressPackage/app.js
 */
const http = require('http');
const routes = require('./module/routes');
const url = require('url');
const path = require('path');

http.createServer(function (req, res) {
    //创建静态web服务
    routes.static(req, res, 'static');
    //路由
    let pathname = url.parse(req.url).pathname.replace("/", "");      
    //http://127.0.0.1:3000/news      pathname=news  
    //http://127.0.0.1:3000/login      pathname=login  
    // http://127.0.0.1:3000/xxxx      pathname=xxxx   app.xxxx不存在 
    let extname = path.extname(pathname);
    if (!extname) {   //如果有后缀名的话让静态web服务去处理 
        try {
            routes[pathname](req, res);
        } catch (error) {
            routes['error'](req, res);
        }
    }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');