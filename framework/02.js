const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(404).send('当前资源找不到');
})


app.use('/request', (req, res, next) => {
    let isLogin = true;
    if (isLogin) {
        next();
    } else {
        res.send('还未登陆，无法访问')
    }
})

app.get((req, res) => {
    res.send('当前已登陆')
});


app.listen(3000);
console.log('服务器启动成功');