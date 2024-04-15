const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    admin: {
        type: String,
        required: true,
    },
    domain: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const College = mongoose.model('College', CollegeSchema);

module.exports = College;
