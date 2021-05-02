/*
 * @Author: your name
 * @Date: 2021-05-02 18:19:00
 * @LastEditTime: 2021-05-02 18:21:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /The-self-cultivation-of-a-programmer-NodeJs/NodeJs/Basic/StaticWebServer/utils/index.js
 */

const fs = require('fs');

exports.getFileMime = function (extname) {
    let data = fs.readFileSync('../data/mime.json')
    let mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];
}