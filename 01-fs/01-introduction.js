const fs = require('fs');
const http = require('http');

const txt = fs.readFileSync('../www/text.txt', 'utf-8')
console.log(txt);

let txtOut = `this is what I want to write to you in the file: ${txt}.\nCreated on : ${Date.now()}`;
fs.writeFileSync('../www/text.txt', txtOut);
console.log('Finally');

//  Non-blocking asynchronous way
//  node.js的回调约定是错误先行，也就是第一个参数需要接收错误，其他才是正常的数据

fs.readFile(`${__dirname}./www/text.txt`, 'utf-8', (err, data)=>{ // callback function
    console.log(data);
})
console.log('will read file');