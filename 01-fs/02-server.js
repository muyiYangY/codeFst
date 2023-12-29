const fs = require('fs');
const http = require('http');
const url = require('url');   // ctrl + D 选中所有url

// Server
const server = http.createServer((req, res) => {
    const pathName = req.url;
    console.log(pathName);
    if(pathName === '/' || pathName === '/overview'){
        res.end('this is overview')
    } else if (pathName === '/product') {
        res.end('this is product')
    } else if (pathName === '/api') {
        fs.readFile(`${__dirname}../dev-data/data.json`, 'utf-8', (err, data)=>{
            const apidata = JSON.parse(data);
            res.writeHead(200, {
                'Content-Type': 'application/json'
            })
            res.end(data)
        })
        res.end('API')
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        })
    }
    res.end('hello from the server!')
})

server.listen(8080, '127.0.0.1', ()=>{
    console.log('Listening to requests on port 8080');
})
