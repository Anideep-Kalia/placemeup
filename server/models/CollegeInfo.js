// College Admin Information Schema
const mongoose = require('mongoose');

const collegeInfoSchema = new mongoose.Schema({
    adminId: String,
    companiesList: [{
        name: String,
        role: String,
        stipend: Number,
        link:String,
        expire: Number,
        desc:String,
    }],
    collegeDomain: {
        type: String,
        required: true
    },
    collegeName: {
        type: String,
        required: true
    },
});

const CollegeInfo = mongoose.model('CollegeInfo', collegeInfoSchema);

module.exports = CollegeInfo;
