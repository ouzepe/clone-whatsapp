const { GraphQLServer } = require('graphql-yoga');
const typesArray = require("./src");
const dotenv = require("dotenv").config();





const opts = {
    port: process.env.PORT,
    endpoint: '/test'
}


const server = new GraphQLServer({ 
    schema: typesArray,
    // resolvers,
    opts});


server.start(() => {
    console.log(`server runing at http://localhost:${process.env.PORT}`)
})