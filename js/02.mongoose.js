const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4
    })
    .then(() => console.log('连接成功'))
    .catch(err => console.log(err, '连接失败'))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    siPuablished: Boolean
});
const Course = mongoose.model('Course', courseSchema);
const course = new Course({
    name: 'node',
    author: 'zz',
    siPuablished: true

});
course.save();