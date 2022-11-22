const { read } = require('fs');
const http = require('http');
const getRouter = require('router');
const template = require('art-template');
const path = require('path');
const serveStatic = require('serve-static');
const querystring = require('querystring');


const router = getRouter();
const serve = serveStatic(path.join(__dirname, 'public'));

template.defaults.root = path.join(__dirname, 'views');

router.get('/add', (req, res) => {
    let html = template('index.art', {});
    res.end(html);
});
router.get('/list', (req, res) => {
    let html = template('list.art', {})
    res.end(html);
});

router.post('/add', (req, res) => {
    let formData = '';
    req.on('data', param => {
        formData += param;
    });
    req.on('end', async() => {
        await Student.create(querystring.parse(formData))
        res.writeHead(301, {
            Location: '/list'
        });
        res.end();

    })
});

const Student = require('./model/connect.js');

const app = http.createServer();

app.on('request', (req, res) => {
    router(req, res, () => {});
    serve(req, res, () => {});
});
app.listen(80);
console.log('服务器请求成功');