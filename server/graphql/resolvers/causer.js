const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
const { z } = require('zod');

const { SECRET_KEY } = require('../../config');
const Admin = require('../../models/CAUser');

const loginInputSchema = z.object({
  adminId: z.string(),
  password: z.string()
});

const registerInputSchema = z.object({
  adminId: z.string(),
  password: z.string(),
  confirmPassword: z.string()
});

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      adminId: user.adminId
    },
    SECRET_KEY,
    { expiresIn: '10000h' }
  );
}

module.exports = {
  Mutation: {
    async loginCollegeAdmin(_, { adminId, password }) {
      try {
        loginInputSchema.parse({ adminId, password });
      } catch (error) {
        throw new UserInputError('Validation Error', { errors: error.errors });
      }

      const user = await Admin.findOne({ adminId });

      if (!user) {
        throw new UserInputError('Admin not found', {
          errors: {
            adminId: 'Admin not found'
          }
        });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        throw new UserInputError('Wrong credentials', {
          errors: {
            password: 'Wrong credentials'
          }
        });
      }

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token
      };
    },
    async registerCollegeAdmin(_, { adminId, college, password, confirmPassword,name }) {
      try {
        registerInputSchema.parse({ adminId, password, confirmPassword });
      } catch (error) {
        throw new UserInputError('Validation Error', { errors: error.errors });
      }

      const existingUser = await Admin.findOne({ adminId });
      if (existingUser) {
        throw new UserInputError('adminId is taken', {
          errors: {
            adminId: 'This adminId is taken'
          }
        });
      }

      password = await bcrypt.hash(password, 12);

      const newUser = new Admin({
        college,
        adminId,
        password,
        name
      });

      const res = await newUser.save();

      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token
      };
    }
  }
};
