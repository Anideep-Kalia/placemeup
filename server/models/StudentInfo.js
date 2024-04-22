// Student Information Schema
const mongoose = require('mongoose');

const studentInfoSchema = new mongoose.Schema({
    studentId: String,
    userid:String,
    name:{
        type: String,
        required:true
    },
    college: {
        type: String,
        required: true
    },
    companiesApplied: [{
        type: String
    }],
    daysLoggedIn: [{
        type: String
    }]
});

const StudentInfo = mongoose.model('StudentInfo', studentInfoSchema);

module.exports = StudentInfo;
