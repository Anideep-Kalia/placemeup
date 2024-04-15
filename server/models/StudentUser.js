// Student Login and Signup Schema
const mongoose = require('mongoose');

// otp register -> login id 
const studentSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
