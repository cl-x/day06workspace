// 获取名字的弹框
import * as data from './data.js';
export default function BUllet_box() {
    const client = data.clientFn()

    function closeNameBox() {
        data.nameBox.style.display = 'none'
    }


    data.cancel.onclick = closeNameBox


    data.confirm.onclick = function() {
        window.userName = data.user.value
            // 第一次连接好服务器之后的发送
        client.send(`${window.userName}进来直播间`)
        closeNameBox()
    }

}