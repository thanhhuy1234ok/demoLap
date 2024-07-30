const express = require('express');
const swagger = require('./swagger');
const app = express()

require('dotenv').config()
require('./dbs/mongo');
const apiPathV1 = process.env.API_PATH_V1;
app.use(require('body-parser').json())

app.use(`${apiPathV1}`, require('./routes/index'))
swagger(app);

module.exports = app;