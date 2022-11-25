const express = require('express');

const app = express();
app.use((req, res, next) => {
    console.log('请求了req');
    next();
});
app.use('/request', (req, res, next) => {
    console.log('请求了req' + '/request');
    next();
})

app.get('/request', (req, res, next) => {
    req.name = 'zhangzhang';
    next();
});
app.get('/request', (req, res) => {
    res.send(req.name)
})

app.listen(3000);
console.log('服务器启动成功');