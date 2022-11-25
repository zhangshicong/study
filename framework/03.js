const express = require('express');
const fs = require('fs');
const { runInNewContext } = require('vm');
const app = express();

app.get('/index', (req, res, next) => {
    // throw new Error('baocuo')
    fs.readFile('./04.js', 'utf-8', (err, result) => {
            if (err != null) {
                next(err)
            } else {
                res.send(result)
            }
        })
        // res.send('程序无误')
})

app.use((err, req, res, next) => {
    res.status(500).send('服务器发生错误asdaew');
})

app.listen(3000);
console.log('服务器启动成功');