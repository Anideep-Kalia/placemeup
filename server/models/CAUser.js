// College Admin Login and Signup Schema
const mongoose = require('mongoose');

const collegeAdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


const CollegeAdmin = mongoose.model('CollegeAdmin', collegeAdminSchema);

module.exports = CollegeAdmin;
