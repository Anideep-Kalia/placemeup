const  StudentInfo  = require('../../models/StudentInfo');
const checkAuth = require('../../util/check-auth');

module.exports = {
  Query: {
    async getStudentInfo(_, { userid }) {
      try {
        const studentInfo = await StudentInfo.findOne({ userid });
        if (studentInfo) {
          return studentInfo;
        } else {
          throw new Error('Student Info not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async getStudentByCollege(_, { college }) {
      try {
        const studentList = await StudentInfo.find({ college });
        return studentList;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getAllStudents() {
      try {
        const studentList = await StudentInfo.find();
        return studentList;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getStudentCompanyApplied(_, { company }) {
      try {
        const studentList = await StudentInfo.find({ companiesApplied: company });
        return studentList;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getDaysLoggedIn(_, {}, context) {
      try {
        const user = checkAuth(context);
        const { userid } = user;
        const studentInfo = await StudentInfo.findOne({ userid });
        if (studentInfo) {
          return studentInfo.daysLoggedIn;
        } else {
          throw new Error('Student Info not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    async addCompanyToStudentInfo(_, { company:{name, role,stipend, link, expire, desc} }, context){
      try {
        const user = checkAuth(context);
        const { userid } = user; 
        const studentInfo = await StudentInfo.findOne({ userid });

        if (!studentInfo) {
          throw new Error('Student not found');
        }

        const newCompany = {
          name,
          role,
          stipend,
          link,
          expire,
          desc
        };
        studentInfo.companiesApplied.push(newCompany);

        // Save the updated student information
        await studentInfo.save();

        return studentInfo;
      } catch (error) {
        throw new Error(error);
      }
    },
    async addStudentInfo(_, {}, context) {
      const user = checkAuth(context);
      const { userid } = user; // Extract userid from user object
    
      let studentInfo = await StudentInfo.findOne({ userid });
    
      if (!studentInfo) {
        studentInfo = new StudentInfo({
          name: user.name,
          college: user.college,
          userid: userid, // Use extracted userid
          companiesApplied: [],
          daysLoggedIn: [new Date()]
        });
      } else {
        studentInfo.daysLoggedIn.push(new Date());
      }
    
      const result = await studentInfo.save();
    
      return result.toObject();
    },
    async updateStudentInfo(_, { name, companiesApplied, daysLoggedIn }, context) {
      try {
        const user = checkAuth(context);
        const { userid } = user;
        let studentInfo = await StudentInfo.findOne({ userid });
    
        if (!studentInfo) {
          throw new Error('Student info not found');
        }
    
        if (name) {
          studentInfo.name = name;
        }
    
        if (companiesApplied) {
          studentInfo.companiesApplied = companiesApplied;
        }
    
        if (daysLoggedIn) {
          const lastLoggedDate = new Date(studentInfo.daysLoggedIn[studentInfo.daysLoggedIn.length - 1]);
          const currentDate = new Date();
          
          if (lastLoggedDate.toDateString() !== currentDate.toDateString()) {
            studentInfo.daysLoggedIn.push(currentDate);
          }
        } else {
          const lastLoggedDate = new Date(studentInfo.daysLoggedIn[studentInfo.daysLoggedIn.length - 1]);
          const currentDate = new Date();
          
          if (lastLoggedDate.toDateString() !== currentDate.toDateString()) {
            studentInfo.daysLoggedIn.push(currentDate);
          }
        }
    
        const result = await studentInfo.save();
    
        return result.toObject();
      } catch (error) {
        throw new Error('Error updating student info: ' + error.message);
      }
    },
    async deleteStudentInfo(_, { userid }) {
      try {
        const result = await StudentInfo.deleteOne({ userid });
        return result.deletedCount > 0;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
