const CollegeInfo = require('../../models/CollegeInfo');
const checkAuth = require('../../util/check-auth');

module.exports = {
  Query: {
    async getCollegeInfo(_,__,context) {
      try {
        const user = checkAuth(context);
        const { adminId } = user; 
        const collegeInfo = await CollegeInfo.findOne({ adminId });
        if (collegeInfo) {
          return collegeInfo;
        } else {
          throw new Error('College Info not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async getCompaniesList(_,__,context) {
      try {
        const user = checkAuth(context);
        const { adminId } = user; 
        const collegeInfo = await CollegeInfo.findOne({ adminId });
        if (collegeInfo) {
          return collegeInfo.companiesList;
        } else {
          throw new Error('College Info not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async getCollegeDomain(_, { college }) {
      try {
        const collegeInfo = await CollegeInfo.findOne({ college });
        if (collegeInfo) {
          return collegeInfo.collegeDomain;
        } else {
          throw new Error('College Info not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async getAllCollegeInfo() {
      try {
        const collegeInfoList = await CollegeInfo.find();
        return collegeInfoList;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  async getAdmin(_,{ token }){
    try {
      const user = checkAuth(token);
      const { adminId } = user; 
      return adminId;
    } catch (error) {
      throw new Error(error);
    }
  },

  Mutation: {
    // evrytime admin registers
    async addCompanyToCollegeInfo(_,{ company:{name, role,stipend, link, expire, desc} },context){
      try {
        const user = checkAuth(context);
        const { adminId } = user; 
        const collegeInfo = await CollegeInfo.findOne({ adminId });

        if (!collegeInfo) {
          throw new Error('Admin not found');
        }

        const newCompany = {
          name,
          role,
          stipend,
          link,
          expire,
          desc
        };
        collegeInfo.companiesList.push(newCompany);

        // Save the updated student information
        await collegeInfo.save();

        return collegeInfo;
      } catch (error) {
        throw new Error(error);
      }
    },
    async createCollegeInfo(_, { collegeDomain, collegeName }, context) {
      try {
        const user = checkAuth(context);
        
        if (user && user.adminId) {
          const collegeInfo = new CollegeInfo({
            adminId: user.adminId,
            collegeDomain,
            collegeName,
            companiesList: []
          });
      
          const result = await collegeInfo.save();
          return result;
        } else {
          throw new Error('Admin ID not found');
        }
      } catch (error) {
        throw new Error('Invalid/Expired token');
      }
    },
    async updateCollegeInfo(_, {collegeDomain, collegeName, company },context) {
      // Add authentication logic if needed
      try {
        const user = checkAuth(context);
        const { adminId } = user;
        const collegeInfo = await CollegeInfo.findOne({ adminId });
        if (!collegeInfo) {
          throw new Error('College  Info not found');
        }

        if (collegeDomain !== undefined) {
          collegeInfo.collegeDomain = collegeDomain;
        }

        if (collegeName !== undefined) {
          collegeInfo.collegeName = collegeName;
        }
        if (company) {
          collegeInfo.companiesList = company;
        }

        const result = await collegeInfo.save();
        return result;
      } catch (err) {
        throw new Error(err);
      }
    },
    async deleteCollegeInfo(_, { adminId }) {
      // Add authentication logic if needed
      try {
        const result = await CollegeInfo.deleteOne({ adminId });
        return result.deletedCount > 0;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
