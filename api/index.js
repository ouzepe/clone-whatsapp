const express = require("express");
const  app = express();
const dotenv = require("dotenv");
let { graphqlHTTP } = require('express-graphql');
let { buildSchema } = require('graphql');

dotenv.config();

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};
// routes
app.get("/", (req, res) => {
    res.send("test")
})
app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));

// server start
app.listen(process.env.port || 6000, () => console.log(`server run`));