/*
 * @Author: your name
 * @Date: 2021-05-02 17:09:32
 * @LastEditTime: 2021-05-02 17:16:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /The-self-cultivation-of-a-programmer-NodeJs/NodeJs/Basic/FS/stream/writestream.js
 */

const fs = require('fs');
let str = '';
for (let i = 0; i < 10; i++) {
    str+= 'writestream data, saved\n';
}

let writestream = fs.createWriteStream('./data/output.txt');
writestream.write(str);
// 标记写入完成
writestream.end();
// 只有触发end()方法后能监听到finish方法;
writestream.on('finish', () => {
    console.log('写入完成');
})