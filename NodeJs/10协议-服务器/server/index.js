let LcApp = require('./lcApp');
let app = new LcApp();

// 此处的更改相当与更改了static的目录名;
app.staticDir = '/statictext';


// 静态服务器, 改在构造函数中进行封装;
// app.on('/static', function (req, res) {})

// 路由监听;
app.on('/', function (req, res) {
    // res.end("<h1>首页</h1><img src='./static/QQImage2.jpg' />");
    res.end("<h1>首页</h1><img src='./statictext/QQImage2.jpg' />");
})
app.on('/gnxw', function (req, res) {
    if (res.pathObj.base == 'index.html') {
        res.end('国内新闻首页');
    } else {
        res.end('国内新闻其他页');
    }
})
app.on('/ylxw', function (req, res) {
    res.end('娱乐新闻');
})
app.on('/movies', function (req, res) {
    let movies = [
        {
            name: '毛里塔尼亚人',
            brief: '影片改编自Mohamedou Ould Slahi的回忆录《关塔那摩日记》，讲述Slahi(塔哈饰)被美国政府俘虏，在毫无指控与判决的情况下被关进了监狱，他失去了希望。Slahi寻得辩护律师南希·霍兰德(福斯特饰)与助手特里·邓肯(伍德蕾饰)的帮助，他们在面对无数障碍的情况下，一同追求正义。在富有争议的主张及斯图尔特·库什中尉(康伯巴奇饰)揭露的证据下，一个令人震惊的阴谋露出水面。',
            author: '凯文·麦克唐纳 / Kevin Macdonald',
        },
        {
            name: '人生可以重来',
            brief: '两个重复生活在同一天的青少年，使他们能够创造出有名无实的地图。',
            author: '伊恩·塞缪尔斯 / Ian Samuels',
        },
    ]
    let index = res.pathObj.base,
        pageData = movies[index];

    res.render(pageData, './template/movie.html')
    // res.end(movies[index].name);

})


// 服务启动;
app.run(80, () => {
    console.info(`服务已启动: http://192.168.3.23:80`)
})