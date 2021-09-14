const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const dotenv = require("dotenv").config()
const cors = require("cors");
const app = express();
/// schema
const schema = require("./src/schema");
/// resolvers
const resolver = require("./src/resolvers");

app.use(cors());

// graphql
app.use("/", graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
}))

app.listen(process.env.PORT || 1000, () => {
    console.log(`server runing at http://localhost:${process.env.PORT}`)
})