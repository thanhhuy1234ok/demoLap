const { ApolloServer } = require('apollo-server-express');
const express = require('express')
require('./dbs/connectdb')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
// Create an Apollo server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Initialize an Express application
const app = express();

// Apply the Apollo GraphQL middleware to the Express application
server.start().then(() => {
    server.applyMiddleware({ app });

    // Start the server
    app.listen({ port: 4000 }, () =>
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    );
});