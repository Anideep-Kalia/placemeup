// College Admin Information Schema
const mongoose = require('mongoose');

const collegeAdminInfoSchema = new mongoose.Schema({
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CollegeAdmin',
        required: true
    },
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

const CollegeAdminInfo = mongoose.model('CollegeAdminInfo', collegeAdminInfoSchema);

module.exports = CollegeAdminInfo;
