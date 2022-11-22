const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4
    })
    .then(() => console.log('连接成功'))
    .catch(err => console.log(err, '连接失败'))