// const postsResolvers = require('./posts');
const studentusersResolvers = require('./studentuser');
const studentinfoResolvers = require('./studentinfo');
const causersResolvers = require('./causer');
const cainfoResolvers = require('./cainfo');

// const commentsResolvers = require('./comments');

module.exports = {
  // Post: {
  //   likeCount: (parent) => parent.likes.length,
  //   commentCount: (parent) => parent.comments.length
  // },
  Query: {
    // ...postsResolvers.Query
    ...cainfoResolvers.Query
  },
  Mutation: {
    ...studentusersResolvers.Mutation,
    ...studentinfoResolvers.Mutation,
    ...causersResolvers.Mutation,
    ...cainfoResolvers.Mutation,
    // ...postsResolvers.Mutation,
    // ...commentsResolvers.Mutation
  },
  // Subscription: {
  //   ...postsResolvers.Subscription
  // }
};
