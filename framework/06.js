const express = require('express');
const home = express.Router();

home.get('/index', (req, res) => {
    res.send('welcome')
})

app.listen(3000);
console.log('服务器启动成功');