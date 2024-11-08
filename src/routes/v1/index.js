const express = require('express');

const ProblemRouter = require('../v1/problems.routes');
const problemRouter = require('../v1/problems.routes');

const v1Router = express.Router();

v1Router.use('/problems' , problemRouter);

module.exports = v1Router;

