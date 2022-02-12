const fs = require("fs");
const path = require("path");
const url = require("url");

exports.getMime = (extname) => {
  switch (extname) {
    case ".css":
      return "text/css";
    case ".html":
      return "text/html";
    case ".js":
      return "text/javascript";
    default:
      return "text/html";
  }
};

// exports.getFileMime = (extname) => {
// 换成私有方法,以供static中使用;
const getFileMime = (extname) => {
  // 异步方法(需使用异步函数处理)
  // return new Promise((resolve, reject) => {
  //   fs.readFile("./data/mime.json", (err, data) => {
  //     if (err) {
  //       console.log(err);
  //       reject(err);
  //       return;
  //     }
  //     let mimeObj = JSON.parse(data.toString());
  //     resolve(mimeObj[extname]);
  //   });
  // });

  // 同步方法
  let data = fs.readFileSync("./data/mime.json");
  let mimeObj = JSON.parse(data.toString());
  return mimeObj[extname];
};

exports.static = (request, response, staticPath) => {
  let pathname = url.parse(request.url).pathname;
  pathname = pathname == "/" ? "/index.html" : pathname;
  let fileExtname = path.extname(pathname);
  // let mime = getMime(fileExtname);
  let mime = getFileMime(fileExtname);
  if (pathname != "/favicon.ico") {
    try {
      let data = fs.readFileSync(`./${staticPath}${pathname}`);
      if (data) {
        response.writeHead(200, { "Content-Type": `${mime};charset=utf-8` });
        response.end(data);
      }
    } catch (error) {}
  }
};
