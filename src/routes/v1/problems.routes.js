const express = require('express');

const {ProblemController} = require('../../controllers/index');
const problemController = require('../../controllers/problem.controller');

const problemRouter = express.Router();


problemRouter.get('/ping' , problemController.pingProblemController);

problemRouter.get('/:id' , problemController.getProblem);

problemRouter.get('/',problemController.getProblems);

problemRouter.post('/',problemController.addProblem);

problemRouter.delete('/:id' , ProblemController.deleteProblem);

problemRouter.put('/:id' , problemController.updateProblem);

module.exports = problemRouter;

