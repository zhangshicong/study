const http = require('http');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4
    })
    .then(() => console.log('连接成功'))
    .catch(err => console.log(err, '连接失败'))

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    age: {
        type: Number,
        min: 18,
        max: 80,
    },
    password: String,
    email: String,
    hobbies: [String]
}))

const app = http.createServer();
app.on('request', (req, res) => {
    const method = req.method;

    res.end('ok');
});
app.listen(3000);