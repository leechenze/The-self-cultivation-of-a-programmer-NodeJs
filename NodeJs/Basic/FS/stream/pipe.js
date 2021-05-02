/*
 * @Author: your name
 * @Date: 2021-05-02 17:17:23
 * @LastEditTime: 2021-05-02 17:23:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /The-self-cultivation-of-a-programmer-NodeJs/NodeJs/Basic/FS/stream/pipe.js
 */

const fs = require('fs');
let readStream = fs.createReadStream('./aaa.jpg');
let writeStream = fs.createWriteStream('./data/aaa.jpg');

readStream.pipe(writeStream);