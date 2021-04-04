/*
 * @Author: your name
 * @Date: 2021-04-04 16:54:07
 * @LastEditTime: 2021-04-04 18:03:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /The-self-cultivation-of-a-programmer-NodeJs/NodeJs/11NPM包上传&服务器公网部署/leecsFs.js
 */

let fs = require('fs');

/**
 * @description: 目录重命名
 * @param {*} oldPath
 * @param {*} newPath
 * @return {*}
 */
function rename(oldPath, newPath) {
    return new Promise((resolve, reject) => {
        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve("rename success");
            }
        })
    })
}

/**
 * @description: 创建目录
 * @param {*} path
 * @return {*}
 */
function mkdir(path) {
    return new Promise((resolve, reject) => {
        fs.mkdir(path, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve("create dir success");
            }
        })
    })
}

/**
 * @description: 文件写入
 * @param {*} path
 * @param {*} content
 * @return {*}
 */
function write(path, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, { flag: 'a', encoding: 'utf-8' }, (msg) => {
            if (msg) {
                reject(msg);
            } else {
                resolve(msg);
            }
        })
    })
}

/**
 * @description: 文件读取
 * @param {*} path
 * @return {*}
 */
function read(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, { flag: 'r', encoding: 'utf-8' }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

/**
 * @description: 目录读取
 * @param {*} path
 * @param {*} options
 * @return {*}
 */
function readdir(path,options) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, options, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        })
    })
}

module.exports = {readdir, rename, write, read, mkdir};