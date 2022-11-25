const express = require('express');
const app = express();
const home = express.Router();

app.use('/home', home);

home.get('/index', (req, res) => {
    res.send('welcome')
})

module.exports = home;
app.listen(3000);
console.log('服务器启动成功');