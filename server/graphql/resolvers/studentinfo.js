const { AuthenticationError, UserInputError } = require('apollo-server');
const  StudentInfo  = require('../../models/StudentInfo');
const checkAuth = require('../../util/check-auth');

module.exports = {
  Query: {
    async getStudentInfo(_, { studentId }) {
      try {
        const studentInfo = await StudentInfo.findOne({ studentId });
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
    async getDaysLoggedIn(_, { studentId }) {
      try {
        const studentInfo = await StudentInfo.findOne({ studentId });
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
    async addStudentInfo(_, { studentId, name, college, userid, companiesApplied, daysLoggedIn }, context) {
        const studentInfo = new StudentInfo({
          studentId: studentId,
          name: name,
          college: college,
          userid: userid, // Provide userid here
          companiesApplied: companiesApplied,
          daysLoggedIn: daysLoggedIn.map(date => new Date(date)) // Map the dates to Date objects
        });

        const result = await studentInfo.save();

        return result.toObject();;
    },
    async updateStudentInfo(_, { studentId, name, college, companiesApplied, daysLoggedIn }) {
      try {
        const studentInfo = await StudentInfo.findOne({ studentId });
        if (!studentInfo) {
          throw new Error('Student Info not found');
        }

        if (name !== undefined) {
          studentInfo.name = name;
        }

        if (college !== undefined) {
          studentInfo.college = college;
        }

        if (companiesApplied !== undefined) {
          studentInfo.companiesApplied = companiesApplied;
        }

        if (daysLoggedIn !== undefined) {
          studentInfo.daysLoggedIn = daysLoggedIn;
        }

        const result = await studentInfo.save();
        return result;
      } catch (err) {
        throw new Error(err);
      }
    },
    async deleteStudentInfo(_, { studentId }) {
      try {
        const result = await StudentInfo.deleteOne({ studentId });
        return result.deletedCount > 0;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
