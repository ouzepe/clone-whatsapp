const { makeExecutableSchema } = require('@graphql-tools/schema');

module.exports = makeExecutableSchema({
    typeDefs: `
      type Login {
        id: ID!
        username: String
      }
  
      type Query {
        login: [Login!]
      }
    `,
  });