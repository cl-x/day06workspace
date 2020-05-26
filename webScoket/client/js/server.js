//连接服务器
import * as data from './data.js';


export default function server() {

    const client = data.clientFn()

    function filterDate(val) {
        const date = new Date(val)
        return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate()
    }
    let htmlStr = '';

    client.onmessage = function(msg) {
        console.log(msg);
        console.log(msg.data.toString())
        htmlStr += `<div>
                        <p>${window.userName + ' - ' + filterDate(Date.now())}</p>
                        <li>${msg.data}</li>
                    </div>`;
        data.ul.innerHTML = htmlStr;
    }

    // 点击发送发送内容
    data.btn.onclick = sendSMS

    // 回车也发送内容
    document.onkeydown = function(e) {
        if (e.keyCode == 13) {
            sendSMS()
        }
    }

    function sendSMS() {
        const val = data.stin.value
        if (val) {
            client.send(val)
            data.stin.value = ''
        } else {
            alert('请输入内容')
        }
    }

}