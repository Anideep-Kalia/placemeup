const { CollegeAdminInfo } = require('../../models/CAInfo');
// const checkAuth = require('./util/check-auth');

module.exports = {
  Query: {
    async getCollegeAdminInfo(_, { adminId }) {
      try {
        const collegeAdminInfo = await CollegeAdminInfo.findOne({ adminId });
        if (collegeAdminInfo) {
          return collegeAdminInfo;
        } else {
          throw new Error('College Admin Info not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async getAllCollegeAdminInfo() {
      try {
        const collegeAdminInfoList = await CollegeAdminInfo.find();
        return collegeAdminInfoList;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    async createCollegeAdminInfo(_, { adminId, collegeDomain, collegeName }) {
      // Add authentication logic if needed
      const collegeAdminInfo = new CollegeAdminInfo({
        adminId,
        collegeDomain,
        collegeName,
        companiesList: []
      });

      try {
        const result = await collegeAdminInfo.save();
        return result;
      } catch (err) {
        throw new Error(err);
      }
    },
    async updateCollegeAdminInfo(_, { adminId, collegeDomain, collegeName }) {
      // Add authentication logic if needed
      try {
        const collegeAdminInfo = await CollegeAdminInfo.findOne({ adminId });
        if (!collegeAdminInfo) {
          throw new Error('College Admin Info not found');
        }

        if (collegeDomain !== undefined) {
          collegeAdminInfo.collegeDomain = collegeDomain;
        }

        if (collegeName !== undefined) {
          collegeAdminInfo.collegeName = collegeName;
        }

        const result = await collegeAdminInfo.save();
        return result;
      } catch (err) {
        throw new Error(err);
      }
    },
    async deleteCollegeAdminInfo(_, { adminId }) {
      // Add authentication logic if needed
      try {
        const result = await CollegeAdminInfo.deleteOne({ adminId });
        return result.deletedCount > 0;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
