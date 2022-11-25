const express = require('express');
const fs = require('fs');
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);
const app = express();

app.get('/index', async(req, res, next) => {
    try {
        await readFile('./03.js')
    } catch (error) {
        next(error)
    }

})

app.use((err, req, res) => {
    res.send('服务器发生错误asdaew');
})