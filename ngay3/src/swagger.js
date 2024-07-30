const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const PORT = process.env.PORT || 8080;
// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API with Swagger',
        version: '1.0.0',
        description: 'A simple CRUD API application documented with Swagger',
    },
    servers: [
        {
            url: 'http://localhost:8080/api/v1',
            description: 'Development server',
        },
    ],
    // tags: [
    //     {
    //         name: 'users',
    //     },
    //     {
    //         name: 'posts',
    //     },
    // ]
};

// Options for the swagger docs
const options = {
    swaggerDefinition,
    apis: ['./src/routes/**/*.js'],
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};