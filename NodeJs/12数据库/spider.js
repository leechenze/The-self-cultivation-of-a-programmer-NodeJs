/*
 * @Author: your name
 * @Date: 2021-04-05 17:15:03
 * @LastEditTime: 2021-04-05 19:41:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /The-self-cultivation-of-a-programmer-NodeJs/NodeJs/12数据库/spider.js
 */

const mysql = require('mysql');
const axios = require('axios');
const cheerio = require('cheerio');

let page = 2,
    count = 1,
    sqlCon = mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'lcz19930316',
        database: 'shop'
    });
sqlCon.connect((err) => {
    if (err) {
        console.log('连接失败');
    } else {
        console.log('连接成功');
    }
});

/**
 * @description: 获取第N个页面所有书籍链接
 * @param {*} pageNum
 * @return {*}
 */
async function getPageUrl(pageNum) {
    let httpUrl = `https://sobooks.cc/page/${pageNum}`;
    let res = await axios.get(httpUrl);
    let $ = cheerio.load(res.data);
    $("#cardslist .card-item .thumb-img>a").each((i, ele) => {
        let href = $(ele).attr('href');
        // 根据地址访问书籍详情界面
        getBookInfo(href);
    })
}

/**
 * @description: 根据书籍链接获取详细书籍信息
 * @param {*} href
 * @return {*}
 */
async function getBookInfo(href) {
    let res = await axios.get(href);
    let $ = await cheerio.load(res.data);

    // 书籍图片
    let bookimg = $('.article-content .bookpic img').attr('src');
    // 书籍名称
    let bookname = $('.article-content .bookinfo ul li:nth-child(1)').text();
    bookname = await bookname.substring(3, bookname.length);
    // 书籍作者
    let author = $('.article-content .bookinfo ul li:nth-child(2)').text();
    author = await author.substring(3, author.length);
    // 浏览总数
    // let viewCount = $('.article-content .bookinfo ul li:nth-child(3)').text();
    // viewCount = await viewCount.substring(3, viewCount.length - 1);
    // 标签
    let tag = $('.article-content .bookinfo ul li:nth-child(4)').text();
    tag = await tag.substring(3, tag.length);
    // 时间    
    let pubtime = $('.article-content .bookinfo ul li:nth-child(5)').text();
    pubtime = await pubtime.substring(3, pubtime.length);
    // 评分
    let score = $('.article-content .bookinfo ul li:nth-child(6) b').attr('class');
    score = await score[score.length - 1];
    // 分类
    let cataory = $('#mute-category > a').text().trim();
    // 内容简介
    let brief = $('.article-content').html();
    // 书籍链接
    let bookUrl = await href;
    // 书籍下载链接
    // let download = $('body > section > div.content-wrap > div > article > table > tbody > tr:nth-child(3) > td > a:nth-child(3)').attr('href').split('?url=')[1];
    // 书籍信息数据Array;
    let bookInfoData = [bookname, author, tag, pubtime, score, bookimg, cataory, brief, bookUrl];

    // 插入数据库
    let insertBaseSql = 'insert into book (bookname, author, tag, pubtime, score, bookimg, cataory, brief, bookUrl) values (?,?,?,?,?,?,?,?,?)';
    sqlCon.query(insertBaseSql, bookInfoData, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
    })
}



getPageUrl(page);






