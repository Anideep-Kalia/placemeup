const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
const { z } = require('zod');

const { SECRET_KEY } = require('../../config');
const Supe = require('../../models/SAUser');

const loginInputSchema = z.object({
  email: z.string(),
  password: z.string()
});

const registerInputSchema = z.object({
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string()
});

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    SECRET_KEY,
    { expiresIn: '1h' }
  );
}

module.exports = {
  Mutation: {
    async login(_, { email, password }) {
      try {
        loginInputSchema.parse({ email, password });
      } catch (error) {
        throw new UserInputError('Validation Error', { errors: error.errors });
      }

      const user = await Supe.findOne({ email });

      if (!user) {
        throw new UserInputError('Supe not found', {
          errors: {
            email: 'Supe not found'
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
    async register(_, { registerInput: { email, college, password, confirmPassword } }) {
      try {
        registerInputSchema.parse({ email, college, password, confirmPassword });
      } catch (error) {
        throw new UserInputError('Validation Error', { errors: error.errors });
      }

      const existingUser = await Supe.findOne({ email });
      if (existingUser) {
        throw new UserInputError('email is taken', {
          errors: {
            email: 'This email is taken'
          }
        });
      }

      password = await bcrypt.hash(password, 12);

      const newUser = new Supe({
        college,
        email,
        password
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
