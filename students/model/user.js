const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlenth: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        min: 10,
        max: 25
    },
    sex: {
        type: String
    },
    emali: String,
    hobbies: [String],
    collage: String,
    enterDate: {
        type: Date,
        default: Date.now
    }
});

const Student = mongoose.model('Student', studentsSchema);
module.exports = Student;