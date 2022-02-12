// /*
//  * @Author: your name
//  * @Date: 2021-05-02 18:17:41
//  * @LastEditTime: 2022-02-11 20:53:19
//  * @LastEditors: LeeChenZe
//  * @Description: In User Settings Edit
//  * @FilePath: /The-self-cultivation-of-a-programmer-NodeJs/NodeJs/Basic/StaticWebServer/app.js
//  */
// // 同步方法
// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const url = require("url");
// const utils = require("./modules/routes");
// http
//   .createServer((request, response) => {
//     let pathname = url.parse(request.url).pathname;
//     pathname = pathname == "/" ? "/index.html" : pathname;
//     let fileExtname = path.extname(pathname);
//     // let mime = utils.getMime(fileExtname);
//     // response.setHeader("Content-Type", `text/html;charset=utf-8`);

//     if (pathname != "/favicon.ico") {
//       fs.readFile(`./static/${pathname}`, (err, data) => {
//         let mime = utils.getFileMime(fileExtname);
//         if (err) {
//           // response.writeHead(404);
//           response.writeHead(404, {
//             "Content-Type": `${mime};charset=utf-8`,
//           });
//           response.end("404 页面不存在");
//         }
//         // response.writeHead(200);
//         response.writeHead(200, {
//           "Content-Type": `${mime};charset=utf-8`,
//         });
//         response.end(data);
//       });
//     }
//   })
//   .listen(8000);
// console.log("Server runing at http://127.0.0.1:8000/");

// /*
//  * @Author: your name
//  * @Date: 2021-05-02 18:17:41
//  * @LastEditTime: 2022-02-11 19:34:50
//  * @LastEditors: LeeChenZe
//  * @Description: In User Settings Edit
//  * @FilePath: /The-self-cultivation-of-a-programmer-NodeJs/NodeJs/Basic/StaticWebServer/app.js
//  */
// 异步方法(需使用异步函数处理)
// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const url = require("url");
// const utils = require("./modules/utils");
// http
//   .createServer((request, response) => {
//     let pathname = url.parse(request.url).pathname;
//     pathname = pathname == "/" ? "/index.html" : pathname;
//     let fileExtname = path.extname(pathname);
//     // let mime = utils.getMime(fileExtname);
//     let mime = utils.getFileMime(fileExtname);
//     mime.then((resolve, reject) => {
//       if (reject) {
//         console.log(reject);
//       }
//       response.setHeader("Content-Type", `${resolve};charset=utf-8`);
//       if (pathname != "/favicon.ico") {
//         fs.readFile(`./static/${pathname}`, (err, data) => {
//           if (err) {
//             response.writeHead(404);
//             // response.writeHead(404, {
//             //   "Content-Type": `${resolve};charset=utf-8`,
//             // });
//             response.end("404 页面不存在");
//           }
//           response.writeHead(200);
//           // response.writeHead(200, {
//           //   "Content-Type": `${resolve};charset=utf-8`,
//           // });
//           response.end(data);
//         });
//       }
//     });
//   })
//   .listen(8000);
// console.log("Server runing at http://127.0.0.1:8000/");

// ===========================================模块封装===========================================

const http = require("http");
const url = require("url");
const routes = require("./modules/routes");
http
  .createServer(async (request, response) => {
    // 创建静态WEB服务
    await routes.static(request, response, "static");
    // 路由
    let pathname = url.parse(request.url).pathname;
    if (pathname == "/login") {
      response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      response.end("执行登陆逻辑");
    } else if (pathname == "/register") {
      response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      response.end("执行注册逻辑");
    } else if (pathname == "/admin") {
      response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      response.end("执行后台业务逻辑");
    } else {
      response.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
      response.end("404,页面找不到");
    }
  })
  .listen(8000);
console.log("Server runing at http://127.0.0.1:8000/");
