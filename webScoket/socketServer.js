//服务器
const ws = require('ws');
const port = 5500;
const host = 'localhost';
const server = new ws.Server({
    port,
    host
});

let count = 9999;
let clients = [];
// 获取客户端进行编号，然后存储它，广播它的数据
server.on('connection', client => {
    client.name = ++count;
    clients[client.name] = client;
    //获取数据
    client.on('message', msg => {
        msg.name = client.name;
        console.log(msg.toString());
        broadcast(msg);
    })
});

function broadcast(msg) {
    for (let key in clients) {
        clients[key].send(msg.toString());
    }
}

server.on('listening', () => {
    console.log(`The server is running at: ws://${host}:${port}`)
})