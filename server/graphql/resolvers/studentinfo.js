const { AuthenticationError, UserInputError } = require('apollo-server');
const { z } = require('zod');
const checkAuth = require('../../util/check-auth');

const Studentinfo = require('../../models/StudentInfo');

const createPostInputSchema = z.object({
  body: z.string()
});

const likePostInputSchema = z.object({
  postId: z.string()
});

module.exports = {
  Query: {
    async getStudentByCollege(_, { collegeName }) {
        try {
            const students = await Studentinfo.find({ college: collegeName });
          if (students) {
            return students;
          } else {
            throw new Error('Studentinfo not found');
          }
        } catch (err) {
          throw new Error(err);
        }
      },
      async getStudentCompanyApplied(_, { studentId }) {
        try {
            const student = await Studentinfo.findById(studentId);
            if (student) {
                return student.companiesApplied;
            } else {
                throw new Error('Student not found');
            }
        } catch (err) {
            throw new Error(err);
        }
    },
      async getDaysLoggedIn(_, { studentId }) {
        try {
            const student = await Studentinfo.findById(studentId);
            if (student) {
                return student.daysLoggedIn;
            } else {
                throw new Error('Student not found');
            }
        } catch (err) {
            throw new Error(err);
        }
    },
    async getStudentInfo(_, { studentId }) {
      try {
        const info = await Studentinfo.findById(studentId);
        if (info) {
          return info;
        } else {
          throw new Error('Studentinfo not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    async addStudentInfo(_, { input }, context) {
        const user = checkAuth(context);
    
        try {
            createPostInputSchema.parse({ body });
          } catch (error) {
            throw new UserInputError('Validation Error', { errors: error.errors });
          }
    
        // Create a new instance of StudentInfo with input data
        const newStudentInfo = new Studentinfo({
            studentId: user.id,
            name: input.name,
            college: input.college,
            companiesApplied: input.companiesApplied,
            daysLoggedIn: input.daysLoggedIn,
        });
    
        // Save the new student info entry to the database
        try {
            const savedStudentInfo = await newStudentInfo.save();
            return savedStudentInfo;
        } catch (error) {
            throw new Error('Failed to add student info');
        }
    }
    ,
    async deletePost(_, { postId }, context) {
      const user = checkAuth(context);

      try {
        const post = await Studentinfo.findById(postId);
        if (user.username === post.username) {
          await post.delete();
          return 'Studentinfo deleted successfully';
        } else {
          throw new AuthenticationError('Action not allowed');
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async likePost(_, { postId }, context) {
      const { username } = checkAuth(context);

      try {
        likePostInputSchema.parse({ postId });
      } catch (error) {
        throw new UserInputError('Validation Error', { errors: error.errors });
      }

      const post = await Studentinfo.findById(postId);
      if (!post) {
        throw new UserInputError('Studentinfo not found');
      }

      const alreadyLiked = post.likes.some(like => like.username === username);

      if (alreadyLiked) {
        // Studentinfo already liked, unlike it
        post.likes = post.likes.filter(like => like.username !== username);
      } else {
        // Not liked, like post
        post.likes.push({
          username,
          createdAt: new Date().toISOString()
        });
      }

      await post.save();
      return post;
    }
  },
  Subscription: {
    newPost: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('NEW_POST')
    }
  }
};
