// College Admin Login and Signup Schema
const mongoose = require('mongoose');

const collegeAdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    college:{
        type: String,
        required: true
    }
});


const CollegeAdmin = mongoose.model('CollegeAdmin', collegeAdminSchema);

module.exports = CollegeAdmin;
