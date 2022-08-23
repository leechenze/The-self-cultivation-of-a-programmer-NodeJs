// 引入MongoDB
const { MongoClient } = require("mongodb");

// 数据库连接地址
const url =
"mongodb://pandaadmin:123456@localhost:27017/?retryWrites=true&writeConcern=majority&authSource=panda";


const client = new MongoClient(url);

async function run() {
    try {
        // 定义要操作的数据库
        const db = client.db('panda');
        // 定义要操作的数据库表
        const orderTables = db.collection('order');
        let orderData = null;
        await orderTables.find().toArray((err, data) => {
            console.log(data);
            orderData = data;
        });
        // 插入数据
        await orderTables.insertOne(
            {"order_id": 4}, (err, res) => {
                if (err) {
                    console.log('插入失败');
                    return;
                }
                console.log('插入成功');
            }
        )
        // 更新数据
        await orderTables.updateOne(
            {"order_id": 4}, {$set: {"all_price": 10}}, (err, res) => {
                if (err) {
                    console.log('更新失败');
                    return;
                }
                ;
                console.log('更新成功');
            }
        )

        await (function () {
            console.log('orderData', orderData);
        }())

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);