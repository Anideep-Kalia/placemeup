// Student Information Schema
const mongoose = require('mongoose');

const studentInfoSchema = new mongoose.Schema({
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
        name: String,
        role: String,
        stipend: Number,
        link:String,
        expire: Number,
        desc:String,
    }],
    daysLoggedIn: [{
        type: String
    }]
});

const StudentInfo = mongoose.model('StudentInfo', studentInfoSchema);

module.exports = StudentInfo;
