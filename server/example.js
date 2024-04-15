const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

const Student = require('./student');
const Admin = require('./admin');
const College = require('./college');

// Example usage
// Create a college
const college = new College({
  name: 'Example University',
  location: 'City, Country'
});

// Save the college
college.save();

// Create an admin for the college
const admin = new Admin({
  name: 'Admin Name',
  email: 'admin@example.com',
  college: college._id
});

// Save the admin
admin.save();

// Create students for the college
const student1 = new Student({
  name: 'Student 1',
  age: 20,
  grade: 'A',
  college: college._id
});

const student2 = new Student({
  name: 'Student 2',
  age: 21,
  grade: 'B',
  college: college._id
});

// Save the students
student1.save();
student2.save();
