// Student Information Schema
const mongoose = require('mongoose');

const studentInfoSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
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
        type: Date
    }]
});

const StudentInfo = mongoose.model('StudentInfo', studentInfoSchema);

module.exports = StudentInfo;
