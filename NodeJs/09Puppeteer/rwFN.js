/*
 * @Author: your name
 * @Date: 2020-07-11 21:43:26
 * @LastEditTime: 2021-04-04 16:55:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /The-self-cultivation-of-a-programmer-NodeJs/NodeJs/09Puppeteer/rwFN.js
 */
let fs = require('fs');

// 封装文件读取;
function fsRead(path){
    return new Promise(function (resolve, reject) {
        fs.readFile(path, {flag: 'r', encoding: 'utf-8'}, function (err, data) {
            if(err) {
                reject(err);
                throw Error(err);
            }else{
                resolve(data);
                console.log('读取内容成功');
            }
        })
    })
}


// 封装文件写入;
function fsWrite(path, content){
    return new Promise(function (resolve, reject) {
        fs.writeFile(path, content, {flag: 'a', encoding: 'utf-8'}, function (err) {
            if(err) {
                reject(err);
                throw Error(err);
            }else{
                resolve(err);
                console.log('写入内容成功');
            }
        })
    })    
}



// 导出封装的fs的读取和写入方法啊;
module.exports = {fsRead, fsWrite};