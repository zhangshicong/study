const { create } = require('domain');
const mongoose = require('mongoose');
const { resourceLimits } = require('worker_threads');

mongoose.connect('mongodb://localhost/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4
    })
    .then(() => console.log('连接成功'))
    .catch(err => console.log(err, '连接失败'))

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, '必须传入名称字段']
    },
    author: String,
    siPuablished: Boolean
});
const Course = mongoose.model('Course', courseSchema);
//第一种创建数据save
// const course = new Course({
//     name: 'node',
//     author: 'zz',
//     siPuablished: true

// });
// course.save();
//第二种创建数据 create
// Course.create({ author: 'ss', siPuablished: true }, (err, result) => {
//     console.log(err);
//     console.log(result);
// })

//查询文档方法
// Course.find({ name: 'java' }).then(result => console.log(result));
// Course.findOne({ name: 'java' }).then(result => console.log(result));
// Course.find().select('name author -_id').then(result => console.log(result));
// Course.find().skip(1).limit(1).then(result => console.log(result));

//删除文档方法 findOneAndDelete  deleteMany
// Course.findOneAndDelete({ name: 'java' }).then(result => console.log(result));

//更新文档方法  updateone updataMany
// Course.updateOne({ name: 'node' }, { name: 'node1' }).then(result => console.log(result));

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}));

const Post = mongoose.model('Post', new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}));
// User.create({ name: 'have' }).then(result => console.log(result));
// Post.create({ title: 'aa', author: '63775c2f580c3c4ce33ad547' }).then(result => console.log(result));
// Post.find().populate('author').then(result => console.log(result));