/*
 * @Author: your name
 * @Date: 2021-03-07 19:34:33
 * @LastEditTime: 2021-04-04 15:40:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /The-self-cultivation-of-a-programmer/WEBFrontEnd/NodeJS/Basics/10协议-服务器/server/lcApp.js
 */

let http = require('http');
let path = require('path');
let url = require('url');
let fs = require('fs');


class LcApp {
    constructor() {
        this.server = http.createServer();
        this.reqEvent = {};
        // 声明静态目录的含义是为了可以在index.js中操作
        // new LcApp().staticDir = 'asd' 实现目录更改;
        this.staticDir = '/static';

        this.server.on('request', (request, response) => {
            let pathObj = path.parse(request.url);
            if (pathObj.dir in this.reqEvent) {
                // 设置响应的内容类型, 解决中文乱码;
                response.setHeader("Content-Type", "text/html; charset=utf-8");
                response.pathObj = pathObj;
                response.render = render;
                this.reqEvent[pathObj.dir](request, response);
                // 判断静态目录的访问;
            } else if (pathObj.dir == this.staticDir) {
                response.setHeader('Content-Type', this.getContentType(pathObj.ext));
                // 请求访问的是声明的 staticDir 目录, 这个目录名称自己定义;
                // 但实际的访问目录是 ./static/${pathObj.base};
                let rs = fs.createReadStream(`./static/${pathObj.base}`);
                rs.pipe(response);
            } else {
                response.setHeader("Content-Type", 'text/html; charset=utf-8');
                response.end('<h1>404! 页面丢失了!~~ </h1>')
            }
        })
    }
    on(url, handle) {
        this.reqEvent[url] = handle;
    }
    run(port, callback) {
        this.server.listen(port, callback);
    }
    getContentType(extName) {
        switch (extName) {
            case '.jpg':
                return "image/jpeg"
            case '.html':
                return "text/html charset=utf-8"
            case '.js':
                return "text/javascript; charset=utf-8"
            case '.json':
                return "text/json; charset=utf-8"
            case '.gif':
                return "image/gif"
            case '.css':
                return "text/css"
        }
    }
}


/**
 * @description: 自行封装的render渲染方法;
 * @param {Object} options
 * @param {String} templatePath
 * @return {void}
 */
function render(options, templatePath) {
    fs.readFile(templatePath, { flag: 'r', encoding: 'utf-8' }, (err, data) => {
        if (err) {
            throw new Error(err);
        } else {
            data = replaceArr(data, options);
            data = replaceVal(data, options);

            // 这里使用箭头函数, 所以当前的this指向的就是response
            this.end(data);
        }
    })
}

/**
 * @description: 
 * @param {*} data
 * @param {*} options
 * @return {*}
 */
function replaceVal(data, options) {
    // 匹配普通的变量,并替换内容
    let reg = /\{\{(.*?)\}\}/igs,
        result;
    // result = reg.exec(data)操作赋值后返回的是reg.exec(data)的结果;
    // exec函数如果没有匹配完成会一直返回匹配结果, 如果完成后没有匹配结果返回null;
    // reg.exec('{{title}} abc sdf sdfs {{name}}')
    // 不理解用while循环的原因 可以将以上正则的exec函数匹配结果在控制台执行多次查看结果;
    while (result = reg.exec(data)) {
        let strKey = result[1].trim();
        let strVal = eval('options.' + strKey);
        data = data.replace(result[0], strVal);
    }
    return data;
}


/**
 * @description: 
 * @param {*} data
 * @param {*} options
 * @return {*}
 */
function replaceArr(data, options) {
    // 匹配循环的变量, 并且替换循环的内容;
    let reg = /\{\%for \{(.*?)\}\%\}(.*?)\{\%endfor\%\}/igs,
        result;
    while (result = reg.exec(data)) {
        let strKey = result[1].trim();
        // 通过Key值获取数组内容;
        let strVal = options[strKey],
            listStr = "";
        strVal.forEach((item, ind) => {
            listStr = listStr + replaceVal(result[2], { "item": item });
        })
        data = data.replace(result[0], listStr);
    }
    return data;
}

module.exports = LcApp;