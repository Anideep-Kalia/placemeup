// const postsResolvers = require('./posts');
const studentusersResolvers = require('./studentuser');
const studentinfoResolvers = require('./studentinfo');
const causersResolvers = require('./causer');
const collegeinfoResolvers = require('./collegeinfo');

// const commentsResolvers = require('./comments');

module.exports = {
  // Post: {
  //   likeCount: (parent) => parent.likes.length,
  //   commentCount: (parent) => parent.comments.length
  // },
  Query: {
    // ...postsResolvers.Query
    ...collegeinfoResolvers.Query,
    ...studentinfoResolvers.Query
  },
  Mutation: {
    ...studentusersResolvers.Mutation,
    ...studentinfoResolvers.Mutation,
    ...causersResolvers.Mutation,
    ...collegeinfoResolvers.Mutation,
  },
  // Subscription: {
  //   ...postsResolvers.Subscription
  // }
};
