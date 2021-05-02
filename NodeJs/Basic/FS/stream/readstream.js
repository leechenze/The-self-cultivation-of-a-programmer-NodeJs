/*
 * @Author: your name
 * @Date: 2021-05-02 17:02:31
 * @LastEditTime: 2021-05-02 17:10:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /The-self-cultivation-of-a-programmer-NodeJs/NodeJs/Basic/FS/stream/index.js
 */

const fs = require('fs');
let readStream = fs.createReadStream('./data/input.txt');

let count = 0,
    str = '';
readStream.on('data', (data) => {
    str += data;
    count++;
});

readStream.on('end', () => {
    console.log(str);
    console.log(count);
})

readStream.on('error', (err) => {
    console.log(err);
})