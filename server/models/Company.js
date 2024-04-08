const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stipend: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    expire: {
        type: Date,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
