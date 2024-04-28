const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
const { z } = require('zod');

const { SECRET_KEY } = require('../../config');
const Student = require('../../models/StudentUser');

const loginInputSchema = z.object({
  userid: z.string(),
  password: z.string()
});

const registerInputSchema = z.object({
  userid: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  college: z.string(),
});

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      college: user.college,
      userid: user.userid,
      name: user.name
    },
    SECRET_KEY,
    { expiresIn: '10000h' }
  );
}

module.exports = {
  Mutation: {
    async loginStudent(_, { userid, password }) {
      try {
        loginInputSchema.parse({ userid, password });
      } catch (error) {
        throw new UserInputError('Validation Error', { errors: error.errors });
      }

      const user = await Student.findOne({ userid });

      if (!user) {
        throw new UserInputError('Student not found', {
          errors: {
            userid: 'Student not found'
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


    async registerStudent(_, { userid, college, password, confirmPassword,name } ) {
      try {
        registerInputSchema.parse({ userid, college, password, confirmPassword });
      } catch (error) {
        throw new UserInputError('Validation Error', { errors: error.errors });
      }

      const existingUser = await Student.findOne({ userid });
      if (existingUser) {
        throw new UserInputError('userid is taken', {
          errors: {
            userid: 'This userid is taken'
          }
        });
      }

      password = await bcrypt.hash(password, 12);

      const newUser = new Student({
        college,
        userid,
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
