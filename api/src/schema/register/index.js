const { makeExecutableSchema } = require('@graphql-tools/schema');

module.exports = makeExecutableSchema({
    typeDefs: `
      type Register {
        id: ID!
        username: String
      }
  
      type Query {
        register: [Register!]
      }
      type mutation {
          addRegister: [Register]
      }
    `,
  });