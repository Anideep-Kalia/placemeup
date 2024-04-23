const { ApolloServer, PubSub } = require('apollo-server-express');
const express = require('express');
const { dbConnection } = require('./db');
const cors = require('cors');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const pubsub = new PubSub();
const PORT = 5001;

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});

server.applyMiddleware({ app });

dbConnection();

app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
