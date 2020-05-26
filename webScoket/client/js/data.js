const port = 5500;
const host = 'localhost';
const serverURL = `ws://${host}:${port}`;
const client = new WebSocket(serverURL);
//dom元素
export const ul = document.querySelector('.box-header>ul');
export const btn = document.querySelector('.box-footer>button');
export const stin = document.querySelector('.box-footer>input');
export const nameBox = document.querySelector('.name-box');
export const cancel = document.querySelector('.btn-box button:nth-child(1)');
export const confirm = document.querySelector('.btn-box button:nth-child(2)');
export const user = document.querySelector('.name-box>input')
export function clientFn() {
    return client
}