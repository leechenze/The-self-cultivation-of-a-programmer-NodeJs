/*
 * @Author: your name
 * @Date: 2021-05-02 18:17:41
 * @LastEditTime: 2022-02-10 21:40:50
 * @LastEditors: LeeChenZe
 * @Description: In User Settings Edit
 * @FilePath: /The-self-cultivation-of-a-programmer-NodeJs/NodeJs/Basic/StaticWebServer/app.js
 */

const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const utils = require("./modules/utils");
http
  .createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    pathname = pathname == "/" ? "/index.html" : pathname;
    let fileExtname = path.extname(pathname);
    let mime = utils.getMime(fileExtname);

    response.setHeader("Content-Type", `${mime};charset=utf-8`);

    if (pathname != "/favicon.ico") {
      fs.readFile(`./static/${pathname}`, (err, data) => {
        if (err) {
          response.writeHead(404);
          // response.writeHead(404, {
          //   "Content-Type": `${mime};charset=utf-8`,
          // });
          response.end("404 页面不存在");
        }
        response.writeHead(200);
        // response.writeHead(200, {
        //   "Content-Type": `${mime};charset=utf-8`,
        // });
        response.end(data);
      });
    }
  })
  .listen(8000);
console.log("Server runing at http://127.0.0.1:8000/");
