// Super Admin Login and Signup Schema
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const superAdminSchema = new mongoose.Schema({
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
const SuperAdmin = mongoose.model('SuperAdmin', superAdminSchema);

module.exports = SuperAdmin;
